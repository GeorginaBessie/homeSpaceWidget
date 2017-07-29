document.body.style.backgroundColor = 'red';

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://home-space.s3.amazonaws.com/data.json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var properties = JSON.parse(xhr.responseText);
    }
};
xhr.send();