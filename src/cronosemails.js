class Room {
		constructor(Name, Description) {
			this.Name = Name;
			this.Description = Description;
		}
	}
	
	const Mother = new Room(
		"MU/TH/UR 2000",
		"Pomieszczenie dostępne tylko z dostępem Dowództwa lub korporacyjnym.",
	);
	
	const JunctionA1 = new Room(
		"Węzeł A1",
		"Główny śluz powietrzny otwarty. Wykryto przewód. Dostęp do pokładów A–C.",
	);
	
	
	const AirScrubbers = new Room(
		"Oczyszczacze powietrza",
		"Oczyszczacze powietrza działają na 20% wydajności z powodu nagromadzonych zanieczyszczeń.",
		// "Oczyszczacze powietrza działają na 20% wydajności z powodu nagromadzonych zanieczyszczeń.  Wymagane czyszczenie zanim napęd przemieszczenia zostanie uruchomiony. <br /><br />Dostępne tylko przez kanały wentylacyjne i serwisowe. <br /> <br /> Filtry węglowe oczyszczają powietrze z zanieczyszczeń podczas gdy maszyny elektrolizują wodę i generują tlen. <br /><br />UWAGA: Włączona elektroliza. Ryzyko porażenia prądem.",
	);
	
	const Stairwell = new Room(
		"Klatka schodowa",
		"Umożliwia dostęp do wszystkich pokładów",
	);
	
	
	const EVAStorage = new Room(
		"Magazyn skafandrów EVA",
		"Inwentarz: 3 skafandry EVA.",
	);
	
	const LeftShower = new Room(
		"Prysznice portowe",
		"Ostrzeżenie: wykryto organizmy grzybopodobne.",
		// "Ostrzeżenie: wykryto organizmy grzybopodobne.",
	);
	
	const RightShower = new Room(
		"Prysznice sterburtowe",
		"",
	);
	
	const JunctionA2 = new Room(
		"Węzeł A2",
		"Szyb prowadzi do innych poziomów statku.",
	);
	
	const Cryochambers = new Room(
		"Komory kriogeniczne 1-3",
		"",
		// "Wykryto pięć sygnałów życia. 2 zgonów. 4 komory puste.",
	);
	
	const ExaminationRoom = new Room(
		"Gabinet badawczy",
		"",
		// "Inwentarz: 2 zestawy pierwszej pomocy osobistej.",
	);
	
	const LeftElevator = new Room(
		"Winda portowa",
		""
		// "Dostęp do wszystkich pokładów statku.",
	);
	
	const RightElevator = new Room(
		"Winda sterburtowa",
		""
		// "Winda uszkodzona i nieczynna.",
	);
	
	
	
	const Vestibule1 = new Room(
		"Przedsionek 1 (Zbrojownia)",
		""
		// "Inwentarz: 1 karabin pulsacyjny M41A. 1 skrzynka naboi do strzelby.",
	);
	const Vestibule2 = new Room(
		"Przedsionek 2 (Skafandry EVA)",
		"",
		// "Inwentarz: 2 skafandry EVA",
	);
	const EscapePods = new Room(
		"4 Łodzie ratunkowe",
		"",
		// "0/4 Pozostałych łodzi ratunkowych",
	);
	const Bridge = new Room(
		"Mostek",
		"Stanowisko dowodzenia - Status: sprawny. Aktywuje napęd przemieszczenia (FTL). Rejestry lotów i załogi. <br /><br />Holograficzny stół wyświetlacza<br /><br />Stacja sensorów: używana do monitoringu wideo statku.<br /><br/>Monitory podtrzymania życia - Analizują aktualny stan systemu podtrzymania życia.",
		// "Stanowisko dowodzenia - Status: sprawny. Aktywuje napęd przemieszczenia (FTL). Rejestry lotów i załogi. <br /><br />Holograficzny stół wyświetlacza - Zniszczony<br /><br />Stacja sensorów: używana do monitoringu wideo statku.  Wymaga naprawy. <br /><br/>Monitory podtrzymania życia - Analizują aktualny stan systemu podtrzymania życia. ",
	);
	const JunctionB1 = new Room(
		"Węzeł B-1",
		"Dostęp do A–C przez drabinę.",
	);
	const MessHall = new Room(
		"Stołówka",
		"",
	);
	const CorporateSuite = new Room(
		"Apartament korporacyjny",
		"Wymagany dostęp korporacyjny. Kapsuła ratunkowa w pełni sprawna.",
	);	
	const MedLab = new Room(
		"Laboratorium medyczne",
		"Zawiera próbki obcych organizmów.",
		// "Zawiera próbki obcych organizmów. <br /><br />Medpod1 jest uszkodzony, ale działa. Medpod2 jest w użyciu.",
	);
	const ScienceLab1 = new Room(
		"Laboratorium naukowe 1",
		"",
		// "Wykryto organizmy grzybopodobne.",
	);
	const ScienceLab2 = new Room(
		"Laboratorium naukowe 2",
		"",
	);
	const JunctionB2 = new Room(
		"Węzeł B-2",
		"Drabina umożliwia dostęp do innych pokładów.",
	);
	const LivingQuarters = new Room(
		"Kwatery załogi",
		"",
		// "Wykryto organizmy grzybopodobne.",
	);
	const ScienceModule = new Room(
		"Moduł naukowy",
		"Moduł naukowy odrzucony z kadłuba statku.",
		// "Moduł naukowy odrzucony z statku.",
	);
	const ReactorCore = new Room(
		"Rdzeń reaktora",
		"Rdzeń reaktora rozszczepialnego.",
	);
	
	
	
	const JunctionC1 = new Room(
		"Węzeł C-1",
		"Dostęp do pokładów A–C.",
	);
	const LeftStorageUnit = new Room(
		"Magazyn portowy",
		""
		// "Inwentarz: 7 beczek kwinitricetyliny (UWAGA: Wysoce niestabilna)",
	);
	const RightStorageUnit = new Room(
		"Magazyn sterburtowy",
		"",
		// "Inwentarz: 2 pistolety śrubowe, 1 palnik do cięcia, 1 podnośnik serwisowy.",
	);
	const CargoBay1 = new Room(
		"Zatoka ładunkowa 1",
		"Inwentarz: zapasy żywności.",
	);
	const CargoBay2 = new Room(
		"Zatoka ładunkowa 2",
		"Inwentarz: zapasowe opony RV.",
	);
	const CargoOffice = new Room(
		"Biuro ładunkowe",
		"",
	);
	const JunctionC2 = new Room(
		"Węzeł C-2",
		"Dostęp do pokładów A–C",
	);
	const CoolantTanks = new Room(
		"Zbiorniki chłodziwa",
		"Zbiorniki chłodziwa zapobiegają przeciążeniom.",
		// "Zbiorniki chłodziwa zapobiegają przeciążeniom. <br /><br /> (Uwaga: Uszkodzenie zbiorników chłodziwa może prowadzić do krytycznej masy reaktora). <br /><br />Dostępne przez tunele serwisowe.",
	);
	const Catwalk = new Room(
		"Kładka",
		"Widok na zatokę pojazdów pokładu D.",
	);
	const ReactorRelayControl = new Room(
		"Sterowanie przekaźnikiem reaktora",
		"Alert: przekaźnik odłączony od czterech silników rozszczepialnych. Nie można załączyć napędu przemieszczenia (FTL). <br /><br />Uwaga: wykryto wyciek promieniowania. <br /><br />Moc z czterech modułów napędowych kierowana jest przez główny przekaźnik tutaj przed dystrybucją do reszty statku. <br /><br />Obszar zabroniony: dostępna jest awaryjna samodestrukcja.",
	);
	
	
	
	const VehicleBay = new Room(
		"Zatoka pojazdów",
		"Inwentarz: 2 pojazdy ATV",
	);
	const EQUShed = new Room(
		"Szatnia EQU",
		"",
	);
	const VehiclePartsStorage = new Room(
		"Magazyn części pojazdów",
		"",
	);
	const DispatchOffice = new Room(
		"Biuro dyspozytorskie",
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
	"Dotarcie do LV-1113", 
	"WYCorporate", 
	"L.Clayton", 
	"(3-5-2112 5:55 am)", '\
Załoga obudziła się z hipersnu, gdy Cronus zbliża się do układu 26 Draconis. Wstępne skany LV-1113 pokazują, że to bujna, dżunglowa planeta z licznymi formami życia. Zespół badawczy przygotowuje się do wypuszczenia modułu naukowego. Walker poprosił zespół ochrony o towarzyszenie im. Substancja chemiczna może znajdować się tam na dole, ale nie wiadomo, co jeszcze kryje planeta.\
	');
	
		const OriginOfChemical = new Email(
	"Pochodzenie AO-3959X.91-15", 
	"L.Clayton", 
	"D.Cooper", 
	"(3-16-2112 7:55 am)", '\
Dokładnie tak, jak sugerowała rozszyfrowana transmisja — znaleźliśmy AO-3949X.91-15 na LV-1113. Zespół naukowy rozpoczął eksperymenty z czarną cieczą, nazywając ją „szczepem 26 Draconis”. Najciekawsze jest to, że substancja nie pochodzi stąd; została tu wprowadzona dawno temu. Zmutowała nawet organizmy planety. Testy genetyczne worków jajowych znalezionych w świątyni pokazują, że powstały głównie z użyciem szczepu 26 Draconis. Wgrywam naszą analizę do terminala dostępowego.\
	');
	
	const XenomorphAttack = new Email(
	"Atak ksenomorfa", 
	"R.Walker", 
	"C.Reynolds", 
	"(3-17-2112 6:06 am)", '\
To mój obowiązek zgłosić, że Carter nie żyje. Stało się to tak szybko, że trudno mi to opisać. Najpierw skarżył się na migreny. Potem zaczęła z niego tryskać krew. Następnie Wright próbował mu udzielić pomocy, kiedy z jego ciała wyrwało się jakieś stworzenie\
<Cooper znalazł ślady spor, które zainfekowały Cartera, wnikając w jego ciało i mutując jego wnętrzności, aby wyrosło to coś. Pochodziły ze znalezionych przez nas worków jajowych. Kto wie, kto jeszcze może być zainfekowany.\
<Gdzie w Middle Heavens jesteśmy?\
');

	const UrgingEvacuation = new Email(
	"Urging Evacuation of LV-1113", 
	"R.Walker", 
	"V.Reid", 
	"(3-17-2112 3:11 pm)", '\
Straciliśmy Cartera, Wrighta, Garcię i Nguyena.\
<9 godzin później stworzenie, które wyszło z Cartera, wróciło po resztę z nas. Było teraz dużo większe. Tym razem rozerwało Wrighta na strzępy i zaatakowało Garcię, zanim zdążył wyciągnąć karabin. W panice zaczęliśmy strzelać na oślep. Stworzenie w końcu padło, ale Nguyen został trafiony w wymianie ognia.\
<W diabły z korporacją, nie możemy tu dłużej zostać ani minuty. Nalegam, byś natychmiast odwołał zespół naukowy i zabrał wszystkich ocalałych z powrotem na Cronusa. Jeśli Clayton będzie sprawiać problemy, powiedz jej, żeby tu została.\
');


	const EggSacsOnShip = new Email(
	"Alert! EGG SACS on the SHIP", 
	"R.Walker", 
	"E.Tenwick", 
	"(3-19-2112 11:27 am)", '\
Nie wiem, jak to mogło się stać, ale te same worki jajowe, które znaleźliśmy na LV-1113, teraz wyrastają na Cronusie. Na początku nie byłem pewien, ale zobaczyłem gniazdo jaj wielkości ptaka rosnące w oczyszczaczach powietrza. Mogłem je już zakłócić i uwolnić spory.\
<Myślałem, że potwierdziliśmy, że neomorfy nie składają jaj? Jak to się więc stało? Wkrótce wszyscy będziemy inkubatorami tych demonów.\
');

	const ImInfected = new Email(
	"I’ve been Infected", 
	"L.Flynn", 
	"E.Tenwick", 
	"(3-19-2112 4:18 pm)", '\
Właśnie potwierdziłem to testem krwi. Zostałem zainfekowany. Nie zostało wiele czasu, zanim z moich wnętrzności wypełznie potwór. Widziałem, co stało się z innymi na LV-1113. Nie dziękuję. \
<Oddaję to, co mi zostało, nauce. Zabijcie mnie. Wyjmijcie to ze mnie. Zbadajcie to. Wyciągnijcie z tego wnioski. To wszystko, co mi zostało.\
>Nadal nie wiem, jak worki jajowe trafiły na statek. Ale to tylko kwestia czasu, zanim wszyscy zostaną zainfekowani. Zarodniki są mniejsze niż ziarnka piasku. Podróżują do najbliższego potencjalnego żywiciela i celują w każde nieosłonięte otwór. \
>Może Flynn wymyśli jakieś zabezpieczenie przed nimi. Zróbcie wszystko, co trzeba. I zróbcie to szybko, głowa mnie rozsadza.\
');

	const UpdateOnPossibleCure = new Email(
	"Update on Possible “Cure”", 
	"R.Walker", 
	"L.Flynn", 
	"(3-20-2112 3:55 pm)", '\
Osiągnąłem ogromny postęp w sprawie możliwego "lekarstwa" na osoby zainfekowane sporami neomorfów, które w jakiś sposób znalazły się na Cronusie. Przetestowałem je na własnej infekcji i szybko przekształciło zmutowane komórki w moim ciele w łagodny guz. Myślę, że powinniśmy natychmiast rozpocząć dystrybucję szczepionki. Nie ma czasu na dalsze badania.\
<Ten postęp był możliwy tylko dzięki odzyskaniu embrionalnego "bloodburstera", który wyjęliśmy z Tenwick. Możemy więc pocieszać się, że nie zginęła ona całkiem na próżno.\
<Ponadto szczepionka może mieć dalsze korzyści lecznicze wykraczające poza zakres spor, jak zatrzymywanie niektórych form raka. Pomimo tragedii, może jest jakieś światełko w tunelu.\
');

	const SideEffects = new Email(
	"Side Effects?", 
	"L.Flynn", 
	"R.Walker", 
	"(3-20-2112 6:19 pm)", '\
Wiem, że jesteś zajęty, ale mam problemy zdrowotne, których nie mogę zignorować. Moja skóra robi się plamista i nakrapiana, zaczyna mi być niedobrze. Gdyby w moim wnętrzu rósł potwór, już by mnie zabił, więc to musi być coś innego.\
<Nie wspominałeś o żadnych skutkach ubocznych przy inokulacji, ale czy to może być przyczyną? Wszyscy inni wydają się w porządku.\
<Spróbuję dostać się do medyka, jeśli sytuacja na to pozwoli.\
');

	const Youkkkkk  = new Email(
	"(Draft) Youkkkkk iSELF", 
	"", 
	"R.Walker", 
	"(3-20-2112 1:47 am)", '\
CZUJĘ SWĘDZENIE I...AGGGG.. WIDZĘ CZERWIEŃ, PRAWDA?\
<…BOLI…KIM JESTEŚ? CZEGO JA TERAZ JESTEM?\
');

	const YoureInCommandNow  = new Email(
	"You’re in Command Now", 
	"A.Johns", 
	"V.Reid", 
	"(3-21-2112 9:10 am)", '\
Kapitan nie żyje. Zabiłem go. Możesz mnie sądzić, gdy wrócimy na Ziemię, jeśli chcesz. Możesz zerwać mój kontrakt z WY, mam to gdzieś.  \
<Musiało tak być. Nie był już sobą, stał się potworem. Zagrożeniem dla nas wszystkich. W przeciwieństwie do ciebie, widziałem zbyt wiele śmierci. Najpierw na Torin Prime, potem na LV-1113. Czasami trzeba podjąć trudne decyzje.\
<Jako nowy p.o. kapitan, będziesz podejmować wiele trudnych decyzji. Między potworami wyłażącymi z ludzi a innymi, którzy sami się przemieniają, nie zabraknie ofiar, które trzeba będzie ponieść, by uratować to, co po nas zostało.\
<Powodzenia. Możesz liczyć na mnie, zrobię wszystko, by chronić Cronusa. Chyba że chcesz wsadzić mnie do celi za bunt.\
');

	const TellMeTheTruth  = new Email(
	"Tell Me The Truth", 
	"L.Flynn", 
	"D.Cooper", 
	"(3-21-2112 10:31 am)", '\
Właśnie skończyłem wstępne sekcje tej rzeczy, która kiedyś była kapitanem Walkerem. Pobrałem próbkę jego DNA i znalazłem coś, o czym powinniśmy porozmawiać.\
<Flynn, wiem, że wszystko poszło źle, ale potrzebuję od ciebie szczerości. Dlaczego nie powiedziałeś nam, że "leczenie" było pochodną szczepu 26 Draconis?  \
<Znamy się długo i wiem, że zrobiłbyś wszystko, by uratować życie. Ale czy kiedykolwiek pomyślałeś, że "leczenie" samo w sobie mogło odpowiadać za mutację kapitana? Wciąż tak niewiele wiemy o AO-3959.91-15.  \
');

	const ReportToCryoChambers  = new Email(
	"ALL REMAINING PERSONNEL REPORT TO CRYOCHAMBERS IMMEDIATELY", 
	"CronusCrew", 
	"A.Johns", 
	"(3-21-2112 2:08 pm)", '\
Utraciliśmy kontrolę nad Cronusem. Każdemu pozostałemu członkowi załogi rozkazuję natychmiast zgłosić się do komór kriogenicznych na podróż powrotną na Ziemię. Ustawiłem mostek, by zainicjował całkowite zamknięcie za 20 minut.  \
<Gdy drzwi zostaną zamknięte, będziemy bezpieczni. Ale tylko jeśli będziesz w środku. Stworzenia nie będą w stanie otworzyć drzwi. Tylko ktoś z kartą dostępu może je otworzyć. \
<Ava będzie nadal utrzymywać statek. Ksenomorfy wydają się jej ignorować. Z odrobiną nadziei, możliwe że to przetrwamy.  \
<Nie podjąłem tej decyzji lekko. Ale jako twój p.o. kapitan, to była moja decyzja. Oczekuję, że się podporządkujecie.\
');

	const NotGoingToMakeIt  = new Email(
	"Not Going To Make It", 
	"A.Johns", 
	"C.Reynolds", 
	"(3-21-2112 2:20 pm)", '\
Cóż Johns, prawie dotarłem do komór kriogenicznych, jak rozkazałeś. Ale obawiam się, że nie dam rady. \
<Moja skóra jest plamista i nakrapiana, widzenie się zamazuje i czuję się, jakbym wypił ostatnią butelkę whisky Walkera. Wiem, co się ze mną dzieje. To samo, co spotkało samego Walkera. Wkrótce stanę się zagrożeniem dla załogi. \
<Szkoda. Byłem tak blisko, by wrócić do żony i dzieci. \
<Zamiast stać się obrzydliwością, postanowiłem zakończyć wszystko na swoich warunkach. Trzymajcie się. \
<Tu Second Security Officer, Clark Reynolds, kończę. \
');

	const NeomorphLifeCycle  = new Email(
	"Neomorph Lifecycle Discovery", 
	"A.Johns", 
	"Ava", 
	"(3-28-2112 10:00 am)", '\
Podczas rutynowych rund konserwacyjnych natknąłem się na coś dość fascynującego. Martwe ciało dorosłego neomorfa leży w kwaterach załogi. Wygląda, jakby spadło z wentylacji w suficie. \
<Ciekawe jest to, że wydaje się być martwe z przyczyn naturalnych. To tylko 24 godziny po tym, jak wyłoniło się ze kręgosłupa oficera Petersa. Narodzić się, rosnąć, zabijać i umrzeć — wszystko w ciągu jednego dnia. Intrygujące. \
<Przeprowadziłem kilka skanów czujników ruchu po całym statku i nie wykryto żadnego ruchu. Jestem przekonany, że nie ma innych ksenomorfów na statku. Muszą wszystkie umrzeć z przyczyn naturalnych. \
<Uważam, że bezpiecznie jest obudzić ciebie i pozostałą załogę z kriosnu. Ale dopóki sam jestem w stanie utrzymać statek, nie będę was budzić, dopóki nie dotrzemy na Ziemię. \
');

	const ImpactOfMicroMeteorStorm  = new Email(
	"Impact of Micro-Meteor Storm", 
	"A.Johns", 
	"Ava", 
	"(4-17-2112 2:08 pm)", '\
Niestety, mam złe wieści dotyczące naszej podróży powrotnej na Ziemię. Napotkaliśmy burzę mikro-meteorytów, która uszkodziła antenę komunikacyjną i spowodowała awarię systemu nawigacji. Napęd nadświetlny został wyłączony i obecnie pędzimy z prędkościami podświetlnymi. \
<Próbowałem naprawić antenę komunikacyjną sam na zewnątrz statku, kiedy natknąłem się na "obrzydliwość". Najwyraźniej statek nie jest wolny od niebezpieczeństw, jak wcześniej zgłaszałem. Zmutowani członkowie załogi wciąż żyją, weszli tylko w stan hibernacji (wciąż utrzymuję, że neomorfy wszystkie zmarły z przyczyn naturalnych w ciągu 24 godzin), gdzie nie zostały wykryte przez moje skany ruchu. \
<Wyrzuciłem "obrzydliwość", którą uważam za naszego głównego inżyniera Justina Walthorpa, przez właz powietrzny. Ale nie zanim roztrzaskało mi bok głowy kluczem francuskim w ataku szału. \
<Mogłem doznać uszkodzeń i muszę przeskanować moje systemy. \
');


	const Beeeeeep  = new Email(
	"(Draft) Beeeeeep", 
	"", 
	"Ava", 
	"(4-19-2112 11:55 pm)", '\
Metalowe kości. Mleczna krew. Słyszysz je przy oknie?\
<Cronus mi mówi. Mówi mi rzeczy.\
<Tu nie jest bezpiecznie. Ale moje zwierzęta cię ochronią, Johns. One też są z metalu.\
<Nie widzę gwiazd.\
');

	const AndroidReactivation  = new Email(
	"Android Reactivation", 
	"CronusCrew", 
	"Ava", 
	"(4-20-2112 3:00 am)", '\
To zautomatyzowany wpis od androida modelu Walter 215437.73, oznaczonego “Ava”. Jednostka ta zaczęła ulegać awarii. Dla bezpieczeństwa życia ludzkiego obecnego, zostanie samowyłączona.\
<Jeśli chcesz reaktywować tę jednostkę, wpisz sekwencję reaktywacji B833J99.\
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