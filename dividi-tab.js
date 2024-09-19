export default function () {
    chrome.tabs.query({}, tabs => {

        if (chrome.runtime.lastError)
            return console.error(chrome.runtime.lastError);

        // Verifica se la scheda è parte di un gruppo
        tabs.forEach(tab => tab.groupId !== -1 ? chrome.tabs.ungroup(tab.id) : console.error(tab));
    });
}
