/////////////////////ASTRAEUS////////////////////////////

		var astraeus = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">ASTRAEUS</div>\
		<div class="dataimage"><img class="dataimg" src="images/astraeus.png"></div>\
		<div class="datacontent">Die Astraeus ist ein Raumschiff der Gallivant-Klasse, das von Offizieren der Galaktischen Konkordanz betrieben wird. Benannt nach dem griechischen Gott der Sterne und Astrologie, dient dieses Schiff hauptsächlich der Tiefraumforschung und -erkundung.  \
		<br /><br />Die Astraeus ist mit einem Xenospace-Antrieb für Überlichtreisen durch die Galaxie sowie einem Basis-Waffensystem zur Verteidigung ausgestattet.\
		</div>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'crew\');">Besatzung</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'mission\');">Mission</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'status\');">Status</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'systems\');">Systeme</button>\
	';

	var crew = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">ASTRAEUS</div>\
		<div class="dataimage"><img class="dataimg" src="images/astraeus.png"></div>\
		<div class="datacontent">\
		<table class="tablecontent">\
		<tr><td><img class="badge" src="images/vargasbadge.png"></td><td>KAPITÄN: <br />JUDD VARGAS</td>\
		<td><img class="badge" src="images/holtzbadge.png"></td><td>LEITENDER INGENIEUR: <br />DALTON HOLTZ</td></tr>\
		<tr><td><img class="badge" src="images/buchananbadge.png"></td><td>WISSENSCHAFTSOFFIZIER: <br />ALAINE BUCHANAN</td>\
		<td><img class="badge" src="images/shimakibadge.png"></td><td>KAMPFOFFIZIER: <br />RIKU SHIMAKI</td></tr>\
		<tr><td><img class="badge" src="images/inbibibadge.png"></td><td>XENOSPACE-OPERATOR: <br />INBIBI ASOON</td>\
		<td><img class="badge" src="images/rorobadge.png"></td><td>ASTRO-ROVER: <br />"RO-RO"</td></tr>\
		</table>\
		</div>\
		<div>\
		<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'astraeus\');">Astraeus</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'mission\');">Mission</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'status\');">Status</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'systems\');">Systeme</button>\
	';

		var systems = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">ASTRAEUS</div>\
		<div class="dataimage"><img class="dataimg" src="images/bridgecontrols.png"></div>\
		<div class="datacontent">\
		<font color=#8620f5>Waffenkontrolle anfordern:</font> Bittet um Erlaubnis, den Waffenkontrollstick zu aktivieren. \
		<br /><br /><font color=#f78420>Ruffrequenzen öffnen: </font> Drücken, um einen Ruf zu beantworten oder ein anderes Schiff zu kontaktieren.\
		<br /><br /><font color=#4ef421>Xenospace-Antrieb aktivieren: </font> Versucht das Schiff zu den im Xenospace-Antrieb eingestellten Koordinaten zu springen.\
		<br /><br /><font color=#2084f6>Transmitter-Array aktivieren: </font> Sendet oder empfängt Objekte vom Transmitter-Array.\
		</div>\
		<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'astraeus\');">Astraeus</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'mission\');">Mission</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'status\');">Status</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'crew\');">Besatzung</button>\
	';

		var status = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">ASTRAEUS</div>\
		<div class="dataimage"><img class="dataimg" src="images/astraeus.png"></div>\
		<div class="datacontent">Schäden durch Begegnung mit urbraxianischem Leichenschiff\
		<font color="ef433a">\
		<ul><li><font color="ef433a">Lucidite-Reserven: 0%</li>\
		<li>Impulsantrieb beschädigt</li>\
		<li>Schilde bei 0%</li>\
		<li>Verlust der Xenospace-Konfigurationsdaten</li>\
		<li>Kampfoffizier - Verstorben</li>\
		</ul></div>\
		<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'astraeus\');">Astraeus</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'mission\');">Mission</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'crew\');">Besatzung</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'systems\');">Systeme</button>\
	';


		var mission = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">MISSION</div>\
		<div class="dataimage"><img class="dataimg" src="images/impon7.png"></div>\
		<div class="datacontent">\
		Die Galaktische Konkordanz hat der Besatzung der Astraeus befohlen, nach XCD-14 zu reisen, um zoologische Forschungen auf Impon VII durchzuführen, einem unbewohnten Dschungelplaneten mit reichhaltiger Tierwelt.\
		<br /><br />Während der Mission entdeckte die Besatzung einen unbekannten außerirdischen Tempel, der ein Artefakt enthielt. \
		<br /><br />Kapitän Vargas beendete die Mission abrupt und die Besatzung kehrte mit dem Artefakt zur Astraeus zurück.\
		</div>\
		<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 500px" onclick="StartContent(\'mission2\');">Weiter</button>\
		';


		var mission2 = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">MISSION</div>\
		<div class="dataimage"><img class="dataimg" src="images/corpsevessel.png"></div>\
		<div class="datacontent">\
		Die Astraeus wurde dann von einem urbraxianischen Leichenschiff überfallen, das das Artefakt forderte. Es ist unbekannt, wie die Urbraxianer von dem Artefakt erfuhren, jedoch vermutet Kampfoffizier Shimaki, dass die Urbraxianer ihr Xenophoton-Netzwerksystem zur schnellen Kommunikation nutzten.\
		<br /><br />Die Astraeus versuchte ihren Xenospace-Antrieb zu aktivieren und zu entkommen, doch das Schiff wurde beschädigt, bevor der Sprung abgeschlossen werden konnte. Mit ihrem in dem fehlgeschlagenen Sprung erschöpften Lucidite floh die Astraeus mit voller Impulsgeschwindigkeit.\
		</div>\
		<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 500px" onclick="StartContent(\'mission3\');">Weiter</button>\
		';

		var mission3 = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle">MISSION</div>\
		<div class="dataimage"><img class="dataimg" src="images/stars.gif"></div>\
		<div class="datacontent">\
		Um den Urbraxianern vorübergehend zu entkommen, befahl Kapitän Vargas der verbliebenen Besatzung, das Schiff mit Rettungskapseln zu verlassen.\
		<br /><br />Kapitän Vargas beschloss, auf dem Schiff zu bleiben und es im minimalen Energiemodus zu halten, um zu verhindern, dass die verfolgenden Urbraxianer seinen Standort orten.\
		</div>\
		<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'astraeus\');">Astraeus</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 480; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'crew\');">Besatzung</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 350;height: 50;" onclick="StartContent(\'status\');">Status</button>\
	<button class="greenbutton databutton" onmousedown="playRandomSound()" style="top: 550; font-size: 28; left: 125;height: 50;" onclick="StartContent(\'systems\');">Systeme</button>\
	';

////////////////////////////////////
