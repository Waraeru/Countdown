var idtimeCompteur=0;

function DisplayCompteur() {
	// délais d'affichage
	var delais = 1;
	// Element contenant l'affichage
	var CompteurAffiche=document.getElementById("Compteur");
	// HTML d'affichage
	var html = "<font color=#B87E49>Départ dans :</font><br/> <span style=\"font-size:45pt ; line-height:80px; word-spacing:10px\">[j] j [h] h [m] m [s] s </span>" ;
	// HTML d'affichage si écoulé
	var htmlafter = "<font color=#663300>Parti depuis :</font><br /> <span style=\"font-size:30pt ; line-height:80px\">[j] j [h] h [m] m [s] s </span>" ;
	// Date / heure courante
	var date1 = new Date();
	// Date / heure de fin
	// Attention, le mois commence à 0 pour janvier
	var date2 = new Date (2018, 7, 13, 12, 15, 47);
	// Nombre de secondes entre les dates
	var nbsec = (date2 - date1) / 1000;
	// Nombre de secondes dans une journée
	var nbsecj = 24 * 3600;
	// Pour arrêt compteur si temps écoulé et pas de texte prévu
	var stopcpt = false;
	// Si négatif => temps écoulé
	if (nbsec <= 0) {
		nbsec=-nbsec;
		if (htmlafter!="") 
			{ html=htmlafter; }
		else
			{stopcpt=true;}
	}

	// Nombre de jours restants
	var j = Math.floor (nbsec / nbsecj);
	// Nombre d'heures restantes
	var h = Math.floor ((nbsec - (j * nbsecj)) / 3600);
	// Nombre de minutes restantes
	var m = Math.floor ((nbsec - ((j * nbsecj + h * 3600))) / 60);
	// Nombre de secondes restantes
	var s = Math.floor (nbsec - ((j * nbsecj + h * 3600 + m * 60)));
	// Si pas de texte après temps écoulé => on met tout à zéro
	if (stopcpt==true) {j=0;h=0;m=0;s=0}
	// Modification du HTML à afficher
	var html = html.replace("[j]",j);
	var html = html.replace("[h]",h);
	var html = html.replace("[m]",m);
	var html = html.replace("[s]",s);
	// Affichage
	if (CompteurAffiche!=null) {CompteurAffiche.innerHTML = html;}
	// Relance du compteur 
	if (stopcpt==false) {idtimeCompteur=setTimeout ("DisplayCompteur();", 1*1000);}
}

DisplayCompteur();


