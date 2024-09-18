document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dividitab').addEventListener('click', () => {
        // Carica e esegui dividitab.js
        import('./dividitab.js')
            .then(module => {
                module.default(); // Assicurati che la funzione di default sia esposta in dividitab.js
            })
            .catch(err => console.error('Errore nel caricamento di dividitab.js:', err));
    });

    document.getElementById('ragruppatab').addEventListener('click', () => {
        // Carica e esegui ragruppatab.js
        import('./ragruppatab.js')
            .then(module => {
                module.default(); // Assicurati che la funzione di default sia esposta in ragruppatab.js
            })
            .catch(err => console.error('Errore nel caricamento di ragruppatab.js:', err));
    });
});