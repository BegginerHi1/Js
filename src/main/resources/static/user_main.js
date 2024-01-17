let id = parseInt(document.getElementById('span2').textContent)

function getTableDataForAuthUser() {
    fetch('http://localhost:8080/user/' + id)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let text2 = ''
            text2 += '<tr>'
            text2 += '<td>' + json.id + '</td>'
            text2 += '<td>' + json.firstName + '</td>'
            text2 += '<td>' + json.lastName + '</td>'
            text2 += '<td>' + json.age + '</td>'
            text2 += '<td>' + json.email + '</td>'
            if (json.roles.length > 1) {
                text2 += '<td>' + json.roles[0].name.substring(5) + ' ' + json.roles[1].name.substring(5) + '</td>'
            } else {
                text2 += '<td>' + json.roles[0].name.substring(5) + '</td>'
            }
            text2 += '</tr>'
            document.querySelector('tbody').innerHTML = text2
        })
}

getTableDataForAuthUser()