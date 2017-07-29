function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function () {
    $.get("https://home-space.s3.amazonaws.com/data.json", function (data) {
        var properties = JSON.parse(data);
        console.log('Data: ' + properties);
    });
});
