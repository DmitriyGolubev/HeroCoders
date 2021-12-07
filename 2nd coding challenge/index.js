var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var baseUrl ='https://herocoders.atlassian.net/rest/api/3/project/IC/components';

function get(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', ()=> {
        callback(JSON.parse(xhr.responseText));
    });

    xhr.open('GET', url, true);
    xhr.send();
}

get(baseUrl, function (res){
    var data = [];
    res.forEach(function (component) {
        if (component.lead === undefined) {
            load(component, data, 0)
        }
    });
});


function load(component, data, startAt) {
    get('https://herocoders.atlassian.net/rest/api/3/search?jql=project = IC AND component ="' + component.name + '"&startAt=' + startAt, function(d) {
        if (data[component.name]) {
            data[component.name] += d.issues.length;
        } else {
            data[component.name] = d.issues.length;
        }

        if (d.issues.length == 50) {
            load(component, data, startAt + 50);
        } else {
            console.log(data);
        }
    })
}
