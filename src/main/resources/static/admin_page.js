let id = document.getElementById('mySpan2').textContent

function getTableDataForAuthAdmin() {
    fetch('http://localhost:8080/api/users/' + id)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let text1 = ''
            text1 += '<tr>'
            text1 += '<td>' + json.id + '</td>'
            text1 += '<td>' + json.firstName + '</td>'
            text1 += '<td>' + json.lastName + '</td>'
            text1 += '<td>' + json.age + '</td>'
            text1 += '<td>' + json.email + '</td>'
            if (json.roles.length > 1) {
                text1 += '<td>' + json.roles[0].name.substring(5) + ' ' + json.roles[1].name.substring(5) + '</td>'
            } else {
                text1 += '<td>' + json.roles[0].name.substring(5) + '</td>'
            }
            text1 += '</tr>'
            document.getElementById('tbody2').innerHTML = text1
        })
}

getTableDataForAuthAdmin()