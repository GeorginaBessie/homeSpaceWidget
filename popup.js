function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function () {
    // $.get("https://home-space.s3.amazonaws.com/data.json", function (data) {
    //     var properties = JSON.parse(data);
    //     console.log('Data: ' + properties);
    // });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            console.log('Data: ' + data);
        }
    };
    xhr.open("GET", chrome.extension.getURL('data.json'), true);
    xhr.send();
});
