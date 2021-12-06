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
            get('https://herocoders.atlassian.net/rest/api/3/search?jql=project = IC AND component ="' + component.name + '"', function(d) {
                data.push(component.name);
                data.push(d.issues.length);

                console.log(data);
            })
        }
    });
});