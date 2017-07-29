var messagePort;
chrome.runtime.onConnect.addListener(function(port) {
    messagePort = port;
    messagePort.onMessage.addListener(messageFromSearchReceived);
});

function messageFromSearchReceived(message) {
    if (message === 'GET_TABLE_HTML') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = tableHtmlLoaded;
        xhr.open("GET", chrome.extension.getURL('table.html'), true);
        xhr.send();
    }
}

function tableHtmlLoaded(event) {
    if (event.target.readyState === 4) {
        messagePort.postMessage(event.target.responseText);
    }
}