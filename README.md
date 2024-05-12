# MVC-projekt
Platforma do organizowania wydarzeń kulturalnych
Mój projekt pt."Zarzadzanie projektami" składa się z:
Katalogu kontrolera- mam dwa pliki home.js oraz event.js 
Katalog Modelu-  zawiera plik event.js 
Katalog tras- zawiera plik events.js oraz home.js
Katalog widoków- zawiera pliki add-events.ejs, changes.ejs, events.ejs oraz index.ejs
plik app.js

Aplikacja po uruchomieniu wyświetla stronę główną z której można przejść do widoku z wydarzeniami.
Na wstępie są dodane 3 wydarzenia, które można edytować. 
Z tego widoku również można przejść do dodwania nowych wydarzeń, edycji oraz można 
usuwać wydarzenia

Do uruchomienia aplikacji trzeba zainstalować Express.js oraz silnik szabloów:
należy w konsolę wpisać npm init, następnie npm install express, do zainstalowania silnika szablonów nalezy wpisac npm install ejs
Aplikacja działa na porcie 3000

W moim repozytorium są pliki package.json ale nie ma katalogu node_modules ponieważ
przez jego rozmiar nie mogłam go dodać, ale pojawi się po zainstalowaniu Express.js
