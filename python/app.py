from flask import Flask, jsonify, request
from flask_cors import CORS # type: ignore

import request.request as req
import controller.auth.auth as user
import controller.attraction as attraction
import controller.avis as avis  


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, Docker!'

# Attraction
@app.post('/attraction')
def addAttraction():
    print("okok", flush=True)
    # Fonction vérif token
    checkToken = user.check_token(request)
    if (checkToken != True):
        return checkToken

    json = request.get_json()
    retour = attraction.add_attraction(json)
    if (retour):
        return jsonify({"message": "Element ajouté.", "result": retour}), 200
    return jsonify({"message": "Erreur lors de l'ajout.", "result": retour}), 500

@app.get('/attraction')
def getAllAttraction():
    result = attraction.get_all_attraction()
    return result, 200

@app.get('/attraction/<int:index>')
def getAttraction(index):
    result = attraction.get_attraction(index)
    return result, 200

@app.delete('/attraction/<int:index>')
def deleteAttraction(index):

    # Fonction vérif token
    checkToken = user.check_token(request)
    if (checkToken != True):
        return checkToken

    json = request.get_json()
    
    if (attraction.delete_attraction(index)):
        return "Element supprimé.", 200
    return jsonify({"message": "Erreur lors de la suppression."}), 500

@app.post('/login')
def login():
    json = request.get_json()

    if (not 'name' in json or not 'password' in json):
        result = jsonify({'messages': ["Nom ou/et mot de passe incorrect"]})
        return result, 400
    
    cur, conn = req.get_db_connection()
    requete = f"SELECT * FROM users WHERE name = '{json['name']}' AND password = '{json['password']}';"
    cur.execute(requete)
    records = cur.fetchall()
    conn.close()

    result = jsonify({"token": user.encode_auth_token(list(records[0])[0]), "name": json['name']})
    return result, 200




@app.post('/avis')
def addAvis():
    """Ajoute un avis dans la base de données"""
    json = request.get_json()

    required_fields = ["nom", "prenom", "note", "texte", "attraction_name"]
    if not all(field in json for field in required_fields):
        return jsonify({"message": "Tous les champs sont requis"}), 400

    result = avis.add_avis(json)
    
    if isinstance(result, dict): 
        return jsonify(result), 400

    if result:
        return jsonify({"message": "Avis ajouté avec succès."}), 200
    return jsonify({"message": "Erreur lors de l'ajout de l'avis."}), 500

@app.get('/avis/<int:id>')
def getAvis(id):
    """Récupère tous les avis d'une attraction spécifique"""
    result = avis.get_avis_by_attraction(id)
    
    if result:
        return jsonify(result), 200
    return jsonify({"message": "Aucun avis trouvé pour cette attraction."}), 404


