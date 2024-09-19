export default function groupTabsByDomain() {

    const getTabName = url => (new URL(url || '')).hostname.replace(/^www\./, ''); // Rimuove 'www.' all'inizio

    // https://github.com/GoogleChrome/chrome-extensions-samples/tree/main
    chrome.tabs.query({}, tabs => {

        if (chrome.runtime.lastError)
            return console.error(chrome.runtime.lastError);

        const tabsByDomain = {};

        // Raggruppa le schede per dominio
        tabs.forEach(tab => {
            const tab_name = getTabName(tab.url);
            if (tab_name === '') return;
            tabsByDomain[tab_name] ??= []
            tabsByDomain[tab_name].push(tab.id);
        });

        // Crea i gruppi per ogni dominio
        for (const domain in tabsByDomain) {
            chrome.tabs.group({ tabIds: tabsByDomain[domain] }, groupId => {

                if (chrome.runtime.lastError)
                    return console.error(chrome.runtime.lastError)

                // https://developer.chrome.com/docs/extensions/reference/api/tabGroups
                chrome.tabGroups.update(groupId, { title: domain, collapsed: false })
            });
        }
    });

    // chrome.tabs.onCreated.addEventListener(groupTabsByDomain)
}


