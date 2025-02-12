import request.request as req

def add_avis(avis_data):
    """Ajoute un avis dans la base de données"""
    try:
        cur, conn = req.get_db_connection()

        # Récupérer l'ID de l'attraction à partir du nom
        cur.execute("SELECT attraction_id FROM attraction WHERE nom = %s;", (avis_data.get("attraction_name"),))
        attraction = cur.fetchone()

        if not attraction:
            return {"error": "Attraction non trouvée"}, 400

        attraction_id = attraction[0]  # Récupérer l'ID

        # Insérer l'avis dans la base
        requete = """
            INSERT INTO avis (nom, prenom, note, texte, attraction_id)
            VALUES (%s, %s, %s, %s, %s);
        """
        cur.execute(requete, (
            avis_data.get("nom"),
            avis_data.get("prenom"),
            avis_data.get("note"),
            avis_data.get("texte"),
            attraction_id
        ))
        conn.commit()
        conn.close()
        return True
    except Exception as e:
        print(f"Erreur lors de l'ajout d'un avis: {e}")
        return False
