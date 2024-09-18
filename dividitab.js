export default function groupTabsByDomain() {
    chrome.tabs.query({}, (tabs) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }

        const tabsByDomain = {};

        // Raggruppa le schede per dominio
        tabs.forEach((tab) => {
            if (tab.url) { // Assicurati che l'URL non sia undefined
                const url = new URL(tab.url);
                const domain = url.hostname.replace(/^www\./, ''); // Rimuove 'www.' all'inizio

                if (!tabsByDomain[domain]) {
                    tabsByDomain[domain] = [];
                }

                tabsByDomain[domain].push(tab.id);
            }
        });

        // Crea i gruppi per ogni dominio
        for (const domain in tabsByDomain) {
            const tabIds = tabsByDomain[domain];
            chrome.tabs.group({ tabIds: tabIds }, (groupId) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    return;
                }
                chrome.tabGroups.update(groupId, { title: domain });
            });
        }
    });
}