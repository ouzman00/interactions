// Initialisation de la carte
        var map = L.map("map").setView([14.38115, -16.945753], 13); // Coordonnées de Dakar, zoom 13

        // Ajouter un calque de tuiles (par exemple, OpenStreetMap)
        L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", {
          attribution:
            '&copy; <a href="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}">Google satellite hybride</a> contributors',
        }).addTo(map);

        // Ajouter un marqueur
        var marker = L.marker([14.38115, -16.945753]).addTo(map);

        // Ajouter une popup au marqueur
        marker.bindPopup('<b>Bienvenue à Mballing!</b><br>.').openPopup();

        // Afficher la fenêtre de bienvenue après 1 seconde
        setTimeout(function() {
            document.getElementById("welcome-window").style.display = "block";
        }, 1000);

        // Fonction pour fermer la fenêtre de bienvenue
        function closeWelcomeWindow() {
            document.getElementById("welcome-window").style.display = "none"};