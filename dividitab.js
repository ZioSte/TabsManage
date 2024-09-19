export default function() {
    chrome.tabs.query({}, (tabs) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }

        tabs.forEach((tab) => {
            // alert(`gruppo id: ${tab.groupId}`)
            if (tab.groupId !== -1) { // Verifica se la scheda è parte di un gruppo
                chrome.tabs.ungroup(tab.id);
            }
        });
    });
}
