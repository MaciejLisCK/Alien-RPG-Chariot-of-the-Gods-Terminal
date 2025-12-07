/////////////////////////////////// BIOGENETIC RESEARCH /////////////////////////////////////
var biogeneticFunction1 = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle" style="font-size: 40px">Biogenetisches Labor</div>\
		<div class="dataimage"><img class="dataimg" src="images/biogeneticlab.png"></div>\
		<div class="datacontent">\
<font color=#f78420><b>Inhalt:</b></font> Zoologische Proben von Impon 7.\
<br \><font color=#4ef421><b>Status:</b>  </font>Alle Proben aufgrund von Stromausfall verstorben.\
<br><br>Die Tasten stimulieren die Nervensysteme einer Probe und zwingen sie, ihre natürliche Lautäußerung abzugeben (auch wenn die Probe verstorben ist).\
<br /><br />Befolgen Sie die Schritte für beschleunigtes Embryonalwachstum.\
		</div>\
		<button class="nextbutton" onmousedown="playRandomSound()" onclick="StartContent(\'biogeneticFunction2\');">Schritt 1</button>';
	var biogeneticFunction2 = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle" style="font-size: 40px">Biogenetisches Labor</div>\
		<div class="dataimage"><img class="dataimg" src="images/embryo.png"></div>\
		<div class="datacontent">\
		ENTFERNEN SIE DEN ORGANISMUS AUS DEM STASIS-BEHÄLTER. BENUTZEN SIE DIE ENTSORGUNGSEINHEIT, UM ÜBERSCHÜSSIGE FLÜSSIGKEIT ZU ENTSORGEN. ACHTEN SIE DARAUF, KEINE STASIS-FLÜSSIGKEIT AUF ELEKTRONIK ZU VERSCHÜTTEN.\
		<br /><br />FINDEN UND ENTFERNEN SIE DEN EMBRYONALEN SACK IM INNEREN DES ORGANISMUS.\
		</div>\
		<button class="prevbutton" onmousedown="playRandomSound()" onclick="StartContent(\'biogeneticFunction1\');">Zurück</button>\
		<button class="nextbutton" onmousedown="playRandomSound()" onclick="StartContent(\'biogeneticFunction3\');">Schritt 2</button>';

	var biogeneticFunction3 = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle" style="font-size: 40px">Biogenetisches Labor</div>\
		<div class="dataimage"><img class="dataimg" src="images/embryo2.png"></div>\
		<div class="datacontent">\
		Verwenden Sie die Embryo-Extraktionswerkzeuge, um den Embryo vorsichtig aus dem Embryonalsack zu entfernen.\
		<br /><br />Legen Sie den Embryo in die Probenschale und fügen Sie Flüssigkeit hinzu, um sein Wachstum durch Ontogenese zu beschleunigen. \
		</div>\
		<button class="prevbutton" onmousedown="playRandomSound()" onclick="StartContent(\'biogeneticFunction2\');">Zurück</button>\
		<button class="nextbutton" onmousedown="playRandomSound()" onclick="StartContent(\'biogeneticFunction4\');">Schritt 3</button>';

	var biogeneticFunction4 = '\
		<button class="backbutton" onmousedown="playRandomSound()" onclick="StartContent(\'mainMenu\');">ZURÜCK</button>\
		<div class="datatitle" style="font-size: 40px">Biogenetisches Labor</div>\
		<div class="dataimage"><img class="dataimg" src="images/embryo3.png"></div>\
		<div class="datacontent">\
		Nach einigen Minuten wird sich der Embryo zu einem neugeborenen Organismus entwickeln.\
		</div>\
		<button class="prevbutton" onmousedown="playRandomSound()" onclick="StartContent(\'biogeneticFunction3\');">Zurück</button>';
	
	///////////////////////////////////////////////////////////////////////