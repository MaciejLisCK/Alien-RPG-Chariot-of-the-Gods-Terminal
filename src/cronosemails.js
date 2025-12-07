
	class Room {
		constructor(Name, Description) {
			this.Name = Name;
			this.Description = Description;
		}
	}
	
	const Mother = new Room(
		"MU/TH/UR 2000",
		"Raum nur zugänglich mit Kommando- oder Firmenzugang.",
	);
	
	const JunctionA1 = new Room(
		"Junction A1",
		"Hauptluftschleuse offen. Umbilical erkannt. Zugang zu Decks A-C.",
	);
	
	
	const AirScrubbers = new Room(
		"Air Scrubbers",
		"Luftreiniger arbeiten mit 20% Effizienz aufgrund angesammelter Schadstoffe.",
		// "Air scrubbers operating at 20% efficiency due to accumulated pollutants.  Cleaning required before Displacement drive can be engaged. <br /><br />Only accessible via ventilation and maintenance shafts. <br /> <br /> Carbon filters clean the air of pollutants while churning machines electrolyze the water and generate oxygen. <br /><br />WARNING: Electrolysis enabled. Risk of electrocution.",
	);
	
	const Stairwell = new Room(
		"Stairwell",
		"Ermöglicht Zugang zu allen Decks",
	);
	
	
	const EVAStorage = new Room(
		"Eva Storage",
		"Inventar: 3 EVA-Anzüge.",
	);
	
	const LeftShower = new Room(
		"Port Showers",
		"",
		// "Warning: fungal organisms detected.",
	);
	
	const RightShower = new Room(
		"Starboard Showers",
		"",
	);
	
	const JunctionA2 = new Room(
		"Junction A2",
		"Shaft leads to other levels of the ship.",
	);
	
	const Cryochambers = new Room(
		"Cryochambers 1-3",
		"",
		// "Five life signs detected. 2 Deceased.  4 Chambers empty.",
	);
	
	const ExaminationRoom = new Room(
		"Examination Room",
		"",
		// "Inventory: 2 Personal Medkits.",
	);
	
	const LeftElevator = new Room(
		"Port Elevator",
		""
		// "Accesses all decks of the ship.",
	);
	
	const RightElevator = new Room(
		"Starboard Elevator",
		""
		// "Elevator damaged and inoperable.",
	);
	
	
	
	const Vestibule1 = new Room(
		"Vestibule 1 (Armory)",
		""
		// "Inventory: 1 M41A Pulse Rifle. 1 case shotgun shells.",
	);
	const Vestibule2 = new Room(
		"Vestibule 2 (EVA Suits)",
		"",
		// "Inventory: 2 EVA suits",
	);
	const EscapePods = new Room(
		"4 Escape Pods",
		"",
		// "0/4 Remaining Escape Pods",
	);
	const Bridge = new Room(
		"Bridge",
		"Command Station - Status Operational Activates displacement drive (FTL).  Flight and crew records.. <br /><br />Holographic Display Table<br /><br />Sensor Station: Used for ship video surveillance of the ship.<br /><br/>Life Support Monitors - Analyze current life support system status. ",
		// "Command Station - Status Operational Activates displacement drive (FTL).  Flight and crew records.. <br /><br />Holographic Display Table - Destroyed<br /><br />Sensor Station: Used for ship video surveillance of the ship.  Currently needs repairs. <br /><br/>Life Support Monitors - Analyze current life support system status. ",
	);
	const JunctionB1 = new Room(
		"Junction B-1",
		"Access A-C via ladder.",
	);
	const MessHall = new Room(
		"Mess Hall",
		"",
	);
	const CorporateSuite = new Room(
		"Corporate Suite",
		"Company access required.  Escape pod fully operational.",
	);	
	const MedLab = new Room(
		"Med Lab",
		"Alien specimens contained.",
		// "Alien specimens contained. <br /><br />Medpod1 is damaged but operational. Medpod2 is in use.",
	);
	const ScienceLab1 = new Room(
		"Science Lab 1",
		"",
		// "Fungal organisms detected.",
	);
	const ScienceLab2 = new Room(
		"Science Lab 2",
		"",
	);
	const JunctionB2 = new Room(
		"Junction B-2",
		"Ladder allows access to other decks.",
	);
	const LivingQuarters = new Room(
		"Living Quarters",
		"",
		// "Fungal organisms detected.",
	);
	const ScienceModule = new Room(
		"Science Module",
		"Science module ejected from ship.",
		// "Science module ejected from ship.",
	);
	const ReactorCore = new Room(
		"Reactor Core",
		"Fission reactor core.",
	);
	
	
	
	const JunctionC1 = new Room(
		"Junction C-1",
		"Deck Access A-C.",
	);
	const LeftStorageUnit = new Room(
		"Port Storage",
		""
		// "Inventory:  7 Drums of quinitricetyline (WARNING: Highly Unstable)",
	);
	const RightStorageUnit = new Room(
		"Starboard Storage",
		"",
		// "Inventory: 2 bolt guns, 1 cutting torch, 1 maintenance jack.",
	);
	const CargoBay1 = new Room(
		"Cargo Bay 1",
		"Inventory: Food stores.",
	);
	const CargoBay2 = new Room(
		"Cargo Bay 2",
		"Inventory: Spare RV tires.",
	);
	const CargoOffice = new Room(
		"Cargo Office",
		"",
	);
	const JunctionC2 = new Room(
		"Junction C-2",
		"Access Decks A-C",
	);
	const CoolantTanks = new Room(
		"Coolant Tanks",
		"Coolant tanks prevent overloading.",
		// "Coolant tanks prevent overloading. <br /><br /> (Warning: Damaging coolant tanks could lead to reactor critical mass). <br /><br />Accessible via service tunnels.",
	);
	const Catwalk = new Room(
		"Catwalk",
		"Overlooks Deck D vehicle bay.",
	);
	const ReactorRelayControl = new Room(
		"Reactor Relay Control",
		"Alert: Relay disconnected from four fission engines. Unable to engage Displacement Drive (FTL) <br /><br />Warning: Radiation leak detected. <br /><br />Power from the four engine pods channel through the main relay here before being distributed to the rest of the ship. <br /><br />Forbidden area: Emergency self destruct accessible here.",
	);
	
	
	
	const VehicleBay = new Room(
		"Vehicle Bay",
		"Inventory: 2 ATVs",
	);
	const EQUShed = new Room(
		"EQU Shed",
		"",
	);
	const VehiclePartsStorage = new Room(
		"Vehicle Parts Storage",
		"",
	);
	const DispatchOffice = new Room(
		"Dispatch Office",
		"",
	);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	class Email {
		constructor(Subject, To, From, Time, Content) {
			this.To = To;
			this.From = From;
			this.Subject = Subject;
			this.Time = Time;
			this.Content = Content;
		}
	}
	
	
	const LV1113Reached = new Email(
	"LV-1113 erreicht",
	"WYCorporate",
	"L.Clayton",
	"(3-5-2112 5:55 am)", '\
	Die Crew ist aus dem Kälteschlaf erwacht, während sich die Cronus dem 26 Draconis-System nähert. Vorläufige Scans von LV-1113 zeigen einen üppigen Dschungelplaneten mit zahlreichen Lebensformen. Das Forschungsteam bereitet sich darauf vor, das Wissenschaftsmodul zu entfalten. Walker hat das Sicherheitsteam gebeten, sie zu begleiten. Das chemische Agens könnte dort unten sein, aber es gibt keine Ahnung, was sonst noch auf dem Planeten ist.\
	');
	
		const OriginOfChemical = new Email(
	"Ursprung von AO-3959X.91-15",
	"L.Clayton",
	"D.Cooper",
	"(3-16-2112 7:55 am)", '\
	Genau wie die entschlüsselte Übertragung uns glauben ließ, haben wir AO-3949X.91-15 hier auf LV-1113 gefunden. Das Wissenschaftsteam hat begonnen, mit der schwarzen Flüssigkeit zu experimentieren und nennt sie den "26 Draconis-Stamm".\
	<Am interessantesten ist, dass die Chemikalie hier nicht entstanden ist, sondern vor langer Zeit hier eingesetzt wurde. Sie hat sogar die Lebensformen des Planeten mutiert. Genetische Tests an den Eiersäcken, die im Tempel wachsen, zeigen, dass sie hauptsächlich aus dem 26 Draconis-Stamm gezüchtet wurden.\
	<Ich lade unsere Analyse auf das Zugriffsterminal hoch.\
	');
	
	const XenomorphAttack = new Email(
	"Xenomorph-Angriff",
	"R.Walker",
	"C.Reynolds",
	"(3-17-2112 6:06 am)", '\
	Es ist meine Pflicht zu berichten, dass Carter tot ist. Es passierte so schnell, dass ich es kaum beschreiben kann. Zuerst klagte er über Migräne. Dann begann Blut aus ihm zu strömen. Dann versuchte Wright, Hilfe zu leisten, als eine Art Kreatur aus seinem Körper platzte. Sie hat Wright ziemlich übel zugerichtet, bevor ich sie von ihm riss. Sie ist in den Dschungel geflohen.\
	<Cooper konnte Spuren von Sporen finden, die Carter infiziert hatten, in seinen Körper eingedrungen waren und sein Inneres mutierten, um dieses Ding wachsen zu lassen. Sie kamen von den Eiersäcken, die wir gefunden haben. Wer weiß, wer sonst noch infiziert ist.\
	<Wo im Himmel sind wir nur?\
	');
	
	
	
	const UrgingEvacuation = new Email(
	"Dringende Evakuierung von LV-1113",
	"R.Walker",
	"V.Reid",
	"(3-17-2112 3:11 pm)", '\
Wir haben Carter, Wright, Garcia und Nguyen verloren.\
<9 Stunden später kam die Kreatur, die aus Carter herauskam, zurück, um den Rest von uns zu holen. Jetzt war sie viel größer. Dieses Mal zerriss sie Wright in Stücke und war bei Garcia, bevor er sein Gewehr ziehen konnte. In Panik begannen wir, wild zu schießen. Die Kreatur ging schließlich zu Boden, aber Nguyen wurde im Kreuzfeuer getroffen.\
<Verdammt sei die Firma, wir können keine Minute länger auf diesem Felsen bleiben. Ich dränge Sie nachdrücklich, das Wissenschaftsteam sofort zurückzurufen und jeden Überlebenden vom Planeten und zurück auf die Cronus zu bringen. Wenn Clayton Ihnen Schwierigkeiten macht, sagen Sie ihr, sie kann hier unten bleiben.\
');


	const EggSacsOnShip = new Email(
	"Alarm! EIERSÄCKE auf dem SCHIFF",
	"R.Walker",
	"E.Tenwick",
	"(3-19-2112 11:27 am)", '\
Ich weiß nicht, wie das passieren konnte, aber dieselben Eiersäcke, die wir auf LV-1113 gefunden haben, wachsen jetzt auf der Cronus. Ich war mir zuerst nicht sicher, aber ich sah eine Gruppe vogelgroßer Eier in den Luftreinigern wachsen. Ich habe sie möglicherweise bereits gestört und die Sporen freigesetzt.\
<Ich dachte, wir hätten bestätigt, dass die Neomorphs keine Eier legen? Wie konnte das also passieren? Wir werden bald alle Brutkästen für diese Dämonen sein.\
');

	const ImInfected = new Email(
	"Ich bin infiziert",
	"L.Flynn",
	"E.Tenwick",
	"(3-19-2112 4:18 pm)", '\
Ich habe es gerade mit einem Bluttest bestätigt. Ich bin infiziert. Es ist nicht mehr viel Zeit, bevor ein Monster aus mir herauskriecht. Ich habe gesehen, was mit den anderen auf LV-1113 passiert ist. Nein danke. \
<Ich spende das, was von mir übrig ist, der Wissenschaft. Tötet mich. Nehmt es aus mir heraus. Untersucht es. Lernt daraus. Das ist alles, was ich noch zu geben habe.\
<Ich weiß immer noch nicht, wie die Eiersäcke auf das Schiff gekommen sind. Aber es ist nur eine Frage der Zeit, bis jeder infiziert ist. Die Partikel sind kleiner als Sandkörner. Sie reisen zum nächsten potenziellen Wirt und zielen auf jede ungeschützte Öffnung. \
<Vielleicht kann Flynn irgendeine Art Schutz dagegen entwickeln. Tut, was nötig ist. Und tut es schnell, mein Kopf bringt mich um.\
');

	const UpdateOnPossibleCure = new Email(
	"Update zu möglichem \"Heilmittel\"",
	"R.Walker",
	"L.Flynn",
	"(3-20-2112 3:55 pm)", '\
Ich habe enorme Fortschritte bei einem möglichen "Heilmittel" für diejenigen gemacht, die von den Neomorph-Sporen infiziert wurden, die irgendwie auf die Cronus gelangt sind. Ich habe es an meiner eigenen Infektion getestet und es hat die mutierten Zellen in meinem Körper schnell in einen gutartigen Tumor umgewandelt. Ich denke, wir sollten sofort mit der Verteilung der Impfung beginnen. Es gibt keine Zeit für weitere Studien.\
<Dieser Fortschritt wurde nur durch die Bergung des embryonalen "Blutplatzers" möglich, den wir von Tenwick geborgen haben. Wir können also Trost darin finden, dass sie nicht völlig umsonst gestorben ist.\
<Darüber hinaus kann die Impfung weitere medizinische Vorteile über den Bereich der Sporen hinaus haben, wie z.B. das Stoppen einiger Krebsarten. Trotz der Tragödien, die wir hier erlitten haben, gibt es vielleicht einen Hoffnungsschimmer in all dem.\
');

	const SideEffects = new Email(
	"Nebenwirkungen?",
	"L.Flynn",
	"R.Walker",
	"(3-20-2112 6:19 pm)", '\
Ich weiß, Sie sind beschäftigt, aber ich habe einige gesundheitliche Probleme, die ich nicht ignorieren kann. Meine Haut ist fleckig und ich fange an, mich krank zu fühlen. Wenn ein Monster in mir wachsen würde, hätte es mich inzwischen getötet, also muss es etwas anderes sein.\
<Sie haben keine Nebenwirkungen der Impfung erwähnt, aber könnte es das sein? Alle anderen scheinen in Ordnung zu sein. \
<Ich werde versuchen, zur Krankenstation zu kommen, wenn die Luft rein ist.\
');

	const Youkkkkk  = new Email(
	"(Entwurf) Duuuuuu iSELBST",
	"",
	"R.Walker",
	"(3-20-2112 1:47 am)", '\
FÜHLE JUCKEN UND...AGGGG ..ICH SEHE DAS ROT RICHTIG?\
<…ES TUT WEH…WER BIST DU? WAS BIN iCH JETZT?\
');

	const YoureInCommandNow  = new Email(
	"Sie haben jetzt das Kommando",
	"A.Johns",
	"V.Reid",
	"(3-21-2112 9:10 am)", '\
Der Captain ist tot. Ich habe ihn getötet. Sie können mich vor ein Kriegsgericht stellen, wenn wir zur Erde zurückkommen, wenn Sie wollen. Sie können meinen Vertrag mit WY zerreißen, es ist mir egal. \
<Es musste getan werden. Er war nicht mehr er selbst, er war ein Monster. Eine Bedrohung für uns alle. Im Gegensatz zu Ihnen habe ich zu viel Tod gesehen. Zuerst auf Torin Prime und jetzt LV-1113. Manchmal muss man harte Entscheidungen treffen.\
<Und jetzt, da Sie der neue amtierende Captain sind, werden Sie viele harte Entscheidungen treffen müssen. Zwischen Monstern, die aus Menschen herausplatzen, und anderen, die sich selbst in Monster verwandeln, wird es keinen Mangel an Opfern geben, die gebracht werden müssen, um das zu retten, was von uns übrig ist.\
<Viel Glück. Sie können sich darauf verlassen, dass ich alles tue, was nötig ist, um die Cronus zu schützen. Es sei denn, Sie wollen mich wegen Meuterei in die Zelle werfen.\
');

	const TellMeTheTruth  = new Email(
	"Sag mir die Wahrheit",
	"L.Flynn",
	"D.Cooper",
	"(3-21-2112 10:31 am)", '\
Ich habe gerade die erste Sektion an diesem Ding beendet, das einmal Captain Walker war. Ich habe eine DNA-Probe genommen und etwas gefunden, worüber wir wirklich sprechen sollten.\
<Flynn, ich weiß, dass die Dinge zur Hölle gegangen sind, aber ich brauche, dass Sie ehrlich zu mir sind. Warum haben Sie uns nicht gesagt, dass das "Heilmittel" ein Derivat des 26 Draconis-Stammes war? \
<Wir kennen uns schon lange und ich weiß, dass Sie alles tun würden, um ein Leben zu retten. Aber haben Sie jemals in Betracht gezogen, dass das "Heilmittel" selbst für die Mutation des Captains verantwortlich war? Es gibt noch so viel, was wir über AO-3959.91-15 nicht wissen. \
');

	const ReportToCryoChambers  = new Email(
	"ALLE VERBLEIBENDEN MITARBEITER SOFORT ZU KRYOKAMMERN MELDEN",
	"CronusCrew",
	"A.Johns",
	"(3-21-2112 2:08 pm)", '\
Wir haben die Kontrolle über die Cronus verloren. Jedem verbleibenden Besatzungsmitglied wird befohlen, sich sofort zu den Kryokammern zu begeben für die Reise zurück zur Erde. Ich habe die Brücke so eingestellt, dass sie in 20 Minuten eine vollständige Abriegelung einleitet. \
<Sobald diese Türen verschlossen sind, werden wir sicher sein. Aber nur, wenn Sie drinnen sind. Die Kreaturen werden nicht in der Lage sein, die Türen zu öffnen. Nur jemand mit Kartenzugang kann sie öffnen.\
<Ava wird das Schiff weiter warten. Die Xenomorphs scheinen sie zu ignorieren. Mit etwas Hoffnung schaffen wir es vielleicht wirklich. \
<Ich habe diese Entscheidung nicht leichtfertig getroffen. Aber als Ihr amtierender Captain war dies meine Entscheidung. Ich erwarte, dass Sie sich fügen.\
');

	const NotGoingToMakeIt  = new Email(
	"Werde es nicht schaffen",
	"A.Johns",
	"C.Reynolds",
	"(3-21-2112 2:20 pm)", '\
Nun Johns, ich habe es fast zu den Kryokammern geschafft, wie Sie befohlen haben. Aber ich fürchte, Ihnen sagen zu müssen, dass ich es nicht schaffen werde.\
<Meine Haut ist fleckig und meine Sicht verschwimmt und ich fühle mich, als hätte ich jede letzte Flasche von Walkers Whiskey-Vorrat getrunken. Ich weiß, was mit mir passiert. Das Gleiche, was mit Walker selbst passiert ist. Bald werde ich eine Gefahr für die Crew werden.\
<Schade. Ich war so nah daran, zu meiner Frau und meinen Kindern zurückzukehren.\
<Anstatt zu einer Abscheulichkeit zu werden, habe ich beschlossen, die Sache hier zu meinen Bedingungen zu beenden. Pass auf dich auf. \
<Hier ist Second Security Officer, Clark Reynolds, abmeldend.\
');

	const NeomorphLifeCycle  = new Email(
	"Entdeckung des Neomorph-Lebenszyklus",
	"A.Johns",
	"Ava",
	"(3-28-2112 10:00 am)", '\
Während meiner routinemäßigen Wartungsrunden bin ich auf etwas ziemlich Faszinierendes gestoßen. Der tote Kadaver einer erwachsenen Neomorph-Kreatur liegt im Mannschaftsquartier. Sie scheint von einer Lüftungsöffnung in der Decke gefallen zu sein.\
<Was interessant ist, ist, dass sie anscheinend eines natürlichen Todes gestorben ist. Dies ist nur 24 Stunden, nachdem sie aus der Wirbelsäule von Officer Peters hervorgegangen ist. Geboren werden, wachsen, töten und sterben - alles an einem einzigen Tag. Faszinierend.\
<Ich habe mehrere Bewegungssensor-Scans über das gesamte Schiff durchgeführt und keine Bewegung wurde erfasst. Ich bin überzeugt, dass es keine anderen Xenomorphs auf dem Schiff gibt. Sie müssen alle eines natürlichen Todes gestorben sein.\
<Ich glaube, es ist sicher, Sie und die verbleibende Crew aus dem Kryoschlaf zu wecken. Aber solange ich in der Lage bin, das Schiff selbst zu warten, werde ich Ihren Schlummer nicht stören, bis wir die Erde erreichen. \
');

	const ImpactOfMicroMeteorStorm  = new Email(
	"Auswirkungen des Mikrometeoriten-Sturms",
	"A.Johns",
	"Ava",
	"(4-17-2112 2:08 pm)", '\
Leider habe ich schlechte Nachrichten bezüglich unserer Reise zurück zur Erde zu berichten. Wir sind auf einen Mikrometeoriten-Sturm gestoßen, der das Kommunikations-Array beschädigte und die Navigationssteuerung zum Ausfall brachte. Die Lichtgeschwindigkeit wurde deaktiviert und wir rasen jetzt mit Unterlichtgeschwindigkeit dahin.\
<Ich versuchte, das Kommunikations-Array selbst an der Außenseite des Schiffes zu reparieren, als ich auf eine "Abscheulichkeit" stieß. Anscheinend ist das Schiff nicht frei von Gefahren, wie ich zuvor berichtet hatte. Die mutierten Besatzungsmitglieder sind noch sehr am Leben, sie sind nur in einen Winterschlafzustand eingetreten (ich halte weiterhin an der Überzeugung fest, dass die Neomorphs alle innerhalb von 24 Stunden eines natürlichen Todes starben), wo sie von meinen Bewegungsscans unentdeckt blieben.\
<Ich habe die "Abscheulichkeit", von der ich glaube, dass es unser Chefingenieur Justin Walthorp ist, durch die Luftschleuse ausgestoßen. Aber nicht bevor sie mir in einem Wutanfall mit einem Schraubenschlüssel die Seite meines Kopfes einschlug. \
<Ich könnte Schaden erlitten haben und muss einen Scan meiner Systeme durchführen.\
');


	const Beeeeeep  = new Email(
	"(Entwurf) Pieeeeep",
	"",
	"Ava",
	"(4-19-2112 11:55 pm)", '\
Metallknochen. Milchblut. Hörst du sie am Fenster? \
<Cronus erzählt es mir. Es erzählt mir Dinge.\
<Es ist hier nicht sicher. Aber meine Tiere werden dich beschützen, Johns. Sie sind auch aus Metall.\
<Ich kann die Sterne nicht sehen.\
');


	const AndroidReactivation  = new Email(
	"Android-Reaktivierung",
	"CronusCrew",
	"Ava",
	"(4-20-2112 3:00 am)", '\
Dies ist ein automatisierter Eintrag vom Walter-Modell Android 215437.73, bezeichnet als "Ava". Diese Einheit hat begonnen zu versagen. Zur Sicherheit jeglichen vorhandenen menschlichen Lebens wird sie sich selbst deaktivieren.\
<Wenn Sie diese Einheit reaktivieren möchten, geben Sie die Reaktivierungssequenz B833J99 ein.\
<Weyland-Yutani\
');


	const EmailList = [
	LV1113Reached, 
	OriginOfChemical, 
	XenomorphAttack, 
	UrgingEvacuation, 
	EggSacsOnShip,
	ImInfected,
	UpdateOnPossibleCure,
	SideEffects,
	Youkkkkk,
	YoureInCommandNow,
	TellMeTheTruth,
	ReportToCryoChambers,
	NotGoingToMakeIt,
	NeomorphLifeCycle,
	ImpactOfMicroMeteorStorm,
	Beeeeeep,
	AndroidReactivation,
	];