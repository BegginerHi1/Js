function edit(id) {
    let firstName = document.getElementById('admin_edit-firstName' + id).value
    let lastName = document.getElementById('admin_edit-lastName' + id).value
    let age = document.getElementById('admin_edit-age' + id).value
    let email = document.getElementById('admin_edit-email' + id).value

    let password = document.getElementById('admin_edit-password' + id).value
    if (password === '') {
        alert('please, enter password for admin_edit')
        return false
    }

    let select = document.getElementById('admin_edit-role' + id)
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
            document.querySelector('.modal-backdrop').remove()
        })
}