function edit(id) {
    let firstName = document.getElementById('edit-firstName'+id).value
    let lastName = document.getElementById('edit-lastName'+id).value
    let age = document.getElementById('edit-age'+id).value
    let email = document.getElementById('edit-email'+id).value
    let password = document.getElementById('edit-password'+id).value

    let select = document.getElementById('edit-role'+id)
    let roles = []
    for (let option of select.options) {
        if (option.selected) {
            roles.push(option)
        }
    }

    let user
    if (roles.length > 1) {
         user = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            password: password,
            roles: [
                {
                    id: parseInt(roles[0].value),
                    name: 'ROLE_' + roles[0].text
                },
                {
                    id: parseInt(roles[1].value),
                    name: 'ROLE_' + roles[1].text
                }
            ]
        }
    } else {
        user = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            password: password,
            roles: [
                {
                    id: parseInt(roles[0].value),
                    name: 'ROLE_' + roles[0].text
                }
            ]
        }
    }
    fetch('http://localhost:8080/admin/users', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            getTableData()
        })
}