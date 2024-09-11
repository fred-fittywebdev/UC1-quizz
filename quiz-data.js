// quiz-data.js

const quizData = {
	quiz1: {
		title: "Quiz 1 : Niveau facile",
		questions: [
			{
				question:
					"Quel est le principal objectif de la formation PSC1 ?",
				options: [
					"Devenir pompier",
					"Apprendre les gestes de premiers secours",
					"Apprendre la législation sur la sécurité",
				],
				correctAnswer: 1,
				reference: "PSC1 - Objectifs de la formation",
			},
			{
				question: "Que signifie 'PLS' en secourisme ?",
				options: [
					"Position latérale de sécurité",
					"Position de levage sécurisée",
					"Position de lutte et sécurité",
				],
				correctAnswer: 0,
				reference: "PSC1 - Position latérale de sécurité",
			},
			{
				question:
					"Quel est l'outil essentiel pour traiter un arrêt cardiaque ?",
				options: ["Garrot", "Défibrillateur", "Bandage"],
				correctAnswer: 1,
				reference: "PSC1 - Arrêt cardiaque",
			},
			{
				question:
					"Quels sont les éléments nécessaires pour qu'un feu se déclare ?",
				options: [
					"Oxygène, chaleur, métal",
					"Combustible, comburant, énergie d'activation",
					"Oxygène, plastique, électricité",
				],
				correctAnswer: 1,
				reference: "Risques professionnels - Incendie",
			},
			{
				question:
					"Que faire si une victime respire mais a perdu connaissance ?",
				options: [
					"Commencer une réanimation",
					"La placer en PLS",
					"Lui donner à boire",
				],
				correctAnswer: 1,
				reference: "PSC1 - Perte de connaissance",
			},
			{
				question:
					"Quel est le risque principal lié à une chute de hauteur ?",
				options: ["Douleur", "Blessures graves", "Fatigue"],
				correctAnswer: 1,
				reference: "Risques professionnels - Chute de hauteur",
			},
			{
				question:
					"Quel geste est recommandé en cas d'obstruction complète des voies aériennes ?",
				options: [
					"Rester calme",
					"Donner des claques dans le dos",
					"Alerter les secours immédiatement",
				],
				correctAnswer: 1,
				reference: "PSC1 - Obstruction des voies aériennes",
			},
			{
				question:
					"Quel est l'un des principaux risques dans les activités physiques répétitives ?",
				options: [
					"Troubles musculo-squelettiques",
					"Troubles cardiaques",
					"Perte d'équilibre",
				],
				correctAnswer: 0,
				reference: "Risques professionnels - Activité physique",
			},
			{
				question:
					"Quels types de gants sont recommandés pour éviter le contact avec du sang ?",
				options: ["Gants en latex", "Gants de jardinage", "Aucun gant"],
				correctAnswer: 0,
				reference: "PSC1 - Hémorragies externes",
			},
			{
				question:
					"Quel est le risque majeur lié à l'inhalation de produits chimiques ?",
				options: ["Brûlures", "Intoxication", "Fatigue"],
				correctAnswer: 1,
				reference: "Risques professionnels - Agents chimiques",
			},
		],
	},
	quiz2: {
		title: "Quiz 2 : Niveau intermédiaire",
		questions: [
			{
				question:
					"Quelle est la fréquence idéale des compressions thoraciques lors d'une réanimation cardio-pulmonaire (RCP) ?",
				options: [
					"50 à 70 compressions par minute",
					"100 à 120 compressions par minute",
					"80 à 90 compressions par minute",
				],
				correctAnswer: 1,
				reference: "PSC1 - Compressions thoraciques",
			},
			{
				question:
					"Quels éléments doivent être réunis pour qu'un incendie éclate ?",
				options: [
					"Combustible, comburant, chaleur",
					"Oxygène, gaz naturel, flamme",
					"Électricité, humidité, métal",
				],
				correctAnswer: 0,
				reference: "Risques professionnels - Incendie",
			},
			{
				question:
					"Quel est le geste à effectuer si la victime ne peut pas respirer en raison d'une obstruction des voies aériennes ?",
				options: [
					"Faire boire de l'eau",
					"Réaliser des compressions abdominales",
					"Placer la victime en PLS",
				],
				correctAnswer: 1,
				reference: "PSC1 - Obstruction des voies aériennes",
			},
			{
				question:
					"Quelle mesure permet de limiter les risques d'accidents routiers liés à la fatigue ?",
				options: [
					"Raccourcir les trajets",
					"Respecter les temps de pause",
					"Conduire plus lentement",
				],
				correctAnswer: 1,
				reference: "Risques professionnels - Risque routier",
			},
			{
				question: "Que signifie RCP en secourisme ?",
				options: [
					"Risque cardio-protecteur",
					"Réanimation cardio-pulmonaire",
					"Réaction cardio-posturale",
				],
				correctAnswer: 1,
				reference: "PSC1 - Réanimation cardio-pulmonaire",
			},
			{
				question:
					"Quelle est l'action à privilégier pour prévenir les troubles musculo-squelettiques ?",
				options: [
					"Aménager le poste de travail",
					"Augmenter la cadence",
					"Ignorer les douleurs",
				],
				correctAnswer: 0,
				reference: "Risques professionnels - Activité physique",
			},
			{
				question:
					"Lors d'un incendie, que faut-il éviter dans une zone à risque ?",
				options: [
					"Laisser les fenêtres ouvertes",
					"Fumer",
					"Porter un masque",
				],
				correctAnswer: 1,
				reference: "Risques professionnels - Incendie",
			},
			{
				question:
					"Comment reconnaître une obstruction partielle des voies aériennes ?",
				options: [
					"La victime peut encore parler et tousser",
					"La victime est inconsciente",
					"La victime est complètement immobile",
				],
				correctAnswer: 0,
				reference: "PSC1 - Obstruction partielle",
			},
			{
				question:
					"Quels sont les équipements à vérifier régulièrement pour éviter les risques électriques ?",
				options: ["Chauffage", "Prises de terre", "Fenêtres"],
				correctAnswer: 1,
				reference: "Risques professionnels - Électricité",
			},
			{
				question:
					"Quel type d'hémorragie nécessite la pose d'un garrot ?",
				options: [
					"Hémorragie légère",
					"Hémorragie externe incontrôlée",
					"Hémorragie interne",
				],
				correctAnswer: 1,
				reference: "PSC1 - Garrot",
			},
		],
	},
	quiz3: {
		title: "Quiz 3 : Niveau difficile",
		questions: [
			{
				question:
					"Quel est l'un des premiers signes d'une obstruction complète des voies aériennes chez un adulte ?",
				options: [
					"Respiration avec un sifflement",
					"Aucune respiration ni son",
					"Douleur à la poitrine",
				],
				correctAnswer: 1,
				reference: "PSC1 - Obstruction complète",
			},
			{
				question:
					"Lorsqu'on pose un garrot, à quelle distance doit-il être placé par rapport à la plaie ?",
				options: [
					"5 à 7 cm au-dessus de la plaie",
					"Directement sur la plaie",
					"3 à 4 cm en dessous de la plaie",
				],
				correctAnswer: 0,
				reference: "PSC1 - Garrot",
			},
			{
				question:
					"Quels sont les trois éléments principaux à contrôler pour prévenir les risques d'incendie ?",
				options: [
					"Ventilation, chauffage, humidité",
					"Électricité, stockage des produits inflammables, ventilation",
					"Éclairage, ventilation, électricité",
				],
				correctAnswer: 1,
				reference: "Risques professionnels - Incendie",
			},
			{
				question:
					"Quelle est la durée recommandée pour évaluer la respiration d'une victime inconsciente ?",
				options: ["15 secondes", "10 secondes", "5 secondes"],
				correctAnswer: 1,
				reference: "PSC1 - Évaluation de la respiration",
			},
			{
				question:
					"Quel dispositif est souvent utilisé pour prévenir les chutes de hauteur dans un chantier ?",
				options: [
					"Escalier de secours",
					"Échafaudages avec garde-corps",
					"Échelles portatives",
				],
				correctAnswer: 1,
				reference: "Risques professionnels - Chute de hauteur",
			},
			{
				question:
					"Lors d'une RCP chez un nourrisson, combien de compressions thoraciques sont suivies par 2 insufflations ?",
				options: [
					"20 compressions",
					"15 compressions",
					"30 compressions",
				],
				correctAnswer: 1,
				reference: "PSC1 - RCP chez les nourrissons",
			},
			{
				question:
					"Quelle est la meilleure prévention contre les risques liés aux vibrations mécaniques ?",
				options: [
					"Utiliser des machines portatives de grande taille",
					"Limiter la vitesse des engins et vérifier les suspensions",
					"Augmenter la cadence des machines",
				],
				correctAnswer: 1,
				reference: "Risques professionnels - Vibrations mécaniques",
			},
			{
				question:
					"Que faut-il faire immédiatement après l'utilisation d'un défibrillateur ?",
				options: [
					"Attendre les secours",
					"Reprendre les compressions thoraciques si nécessaire",
					"Couvrir la victime avec une couverture",
				],
				correctAnswer: 1,
				reference: "PSC1 - Défibrillateur",
			},
			{
				question:
					"Quelle est la norme minimale de lumière à respecter dans les locaux de travail, selon le Code du travail ?",
				options: ["500 lux", "200 lux", "300 lux"],
				correctAnswer: 2,
				reference: "Risques professionnels - Éclairage",
			},
			{
				question:
					"Quelles sont les principales causes des troubles musculo-squelettiques (TMS) ?",
				options: [
					"Mouvements répétitifs et positions statiques prolongées",
					"Fatigue générale et stress",
					"Exposition aux produits chimiques",
				],
				correctAnswer: 0,
				reference: "Risques professionnels - Activité physique",
			},
		],
	},
	quizRandom: {
		title: "Quiz Aleatoire",
		questions: [],
	},
};
