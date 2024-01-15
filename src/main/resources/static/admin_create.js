function create() {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let age = document.getElementById('age').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let role = document.getElementById('role')
    let roles = []
    for (let option of role.options) {
        if (option.selected) {
            roles.push(option)
        }
    }
    let user
    if (roles.length > 1) {
        user = {
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
        .then(response => response.json)
        .then(json => {
            getTableData()
            document.getElementById('firstName').value = ''
            document.getElementById('lastName').value = ''
            document.getElementById('age').value = ''
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
            document.getElementById('role').value = ''
            document.getElementById('nav-home-tab').className = 'nav-link active'
            document.getElementById('nav-profile-tab').className = 'nav-link'
            document.getElementById('nav-home').className = 'tab-pane fade active show'
            document.getElementById('nav-profile').className = 'tab-pane fade'
        })
}