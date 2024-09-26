document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('dividi-tab').addEventListener('click', () => {
        // Carica e esegui dividitab.js
        import('./dividi-tab.js')
            .then(module => module.default()) // Assicurati che la funzione di default sia esposta in dividitab.js
            .catch(err => console.error('Errore nel caricamento di dividi-tab.js:', err));
    });

    document.getElementById('ragruppa-tab').addEventListener('click', () => {
        // Carica e esegui ragruppatab.js
        import('./ragruppa-tab.js')
            .then(module => module.default()) // Assicurati che la funzione di default sia esposta in ragruppatab.js
            .catch(err => console.error('Errore nel caricamento di ragruppa-tab.js:', err));
    });
});
