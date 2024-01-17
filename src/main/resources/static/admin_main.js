function getTableData() {
    fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let text = ''
            json.forEach(user => {
                let roles2 = []
                user.roles.forEach(role => {
                    roles2.push(role)
                })
                text += '<tr>'
                text += '<td>' + user.id + '</td>'
                text += '<td>' + user.firstName + '</td>'
                text += '<td>' + user.lastName + '</td>'
                text += '<td>' + user.age + '</td>'
                text += '<td>' + user.email + '</td>'
                if (user.roles.length > 1) {
                    text += '<td>' + user.roles[0].name.substring(5) + ' ' + user.roles[1].name.substring(5) + '</td>'
                } else {
                    text += '<td>' + user.roles[0].name.substring(5) + '</td>'
                }
                //////////////////////////////             Edit Td With Edit Modal                //////////////////////
                text += '<td>'
                text += '<button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit' + user.id + '">edit</button>'
                text += '<div class="modal fade" id="edit' + user.id + '" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">'
                text += '<div class="modal-dialog">'
                text += '<div class="modal-content">'
                text += '<div class="modal-header">'
                text += '<h1 class="modal-title fs-5" id="editModalLabel">Edit user</h1>'
                text += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
                text += '</div>'
                text += '<div class="modal-body text-center">'
                text += '<div class="mb-3">'
                text += '<label for="admin_edit-id" class="col-form-label"><strong>ID</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="admin_edit-id' + user.id + '" disabled value="' + user.id + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="admin_edit-firstName' + user.id + '" class="col-form-label"><strong>First Name</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="admin_edit-firstName' + user.id + '" value="' + user.firstName + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="admin_edit-lastName' + user.id + '" class="col-form-label"><strong>Last Name</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="admin_edit-lastName' + user.id + '" value="' + user.lastName + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="admin_edit-age' + user.id + '" class="col-form-label"><strong>Age</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="admin_edit-age' + user.id + '" value="' + user.age + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="admin_edit-email' + user.id + '" class="col-form-label"><strong>Email</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="admin_edit-email' + user.id + '" value="' + user.email + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="admin_edit-password' + user.id + '" class="col-form-label"><strong>Password</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="password" class="form-control" id="admin_edit-password' + user.id + '">'
                text += '</div>'
                text += '<div class="mb3">'
                text += '<label for="admin_edit-role' + user.id + '"><strong>Role</strong></label>'
                text += '<select style="height: 60px; width: 300px; margin: 0 auto" class="form-select text-center" multiple id="admin_edit-role' + user.id + '">'
                if (user.roles.length > 1) {
                    text += '<option selected value="' + user.roles[0].id + '">' + user.roles[0].name.substring(5) + '</option>'
                    text += '<option selected value="' + user.roles[1].id + '">' + user.roles[1].name.substring(5) + '</option>'
                } else {
                    if (user.roles[0].id === 1) {
                        text += '<option selected value="' + user.roles[0].id + '">' + user.roles[0].name.substring(5) + '</option>'
                        text += '<option value="2">USER</option>'
                    } else {
                        text += '<option selected value="' + user.roles[0].id + '">' + user.roles[0].name.substring(5) + '</option>'
                        text += '<option value="1">ADMIN</option>'
                    }
                }
                text += '</select>'
                text += '</div>'
                text += '<div class="modal-footer">'
                text += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'
                text += '<button type="submit" class="btn btn-primary" onclick="edit(' + user.id + ')">Edit</button>'
                text += '</div>'
                text += '</td>'
                //////////////////////////////            Remove Td With Remove Modal             //////////////////////////////
                text += '<td>'
                text += '<button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#admin_remove' + user.id + '">delete</button>'
                text += '<div class="modal fade" id="admin_remove' + user.id + '" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">'
                text += '<div class="modal-dialog">'
                text += '<div class="modal-content">'
                text += '<div class="modal-header">'
                text += '<h1 class="modal-title fs-5" id="deleteModalLabel">Delete user</h1>'
                text += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
                text += '</div>'
                text += '<div class="modal-body text-center">'
                text += '<div class="mb-3">'
                text += '<label for="delete-id' + user.id + '" class="col-form-label"><strong>ID</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="delete-id' + user.id + '" disabled value="' + user.id + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="delete-firstName' + user.id + '" class="col-form-label"><strong>First Name</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="delete-firstName' + user.id + '" disabled value="' + user.firstName + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="delete-lastName' + user.id + '" class="col-form-label"><strong>Last Name</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="delete-lastName' + user.id + '" disabled value="' + user.lastName + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="delete-age' + user.id + '" class="col-form-label"><strong>Age</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="delete-age' + user.id + '" disabled value="' + user.age + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="delete-email' + user.id + '" class="col-form-label"><strong>Email</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="delete-email' + user.id + '" disabled value="' + user.email + '">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="delete-password' + user.id + '" class="col-form-label"><strong>Password</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="password" class="form-control" id="delete-password' + user.id + '" disabled value="' + user.password + '">'
                text += '</div>'
                text += '<div class="mb3">'
                text += '<label for="delete-role' + user.id + '"><strong>Role</strong></label>'
                text += '<select style="height: 60px; width: 300px; margin: 0 auto" class="form-select text-center" multiple id="delete-role' + user.id + '">'
                if (roles2.length > 1) {
                    text += '<option selected value="' + roles2[0].id + '">' + roles2[0].name.substring(5) + '</option>'
                    text += '<option selected value="' + user.roles[1].id + '">' + user.roles[1].name.substring(5) + '</option>'
                } else {
                    if (roles2[0].id === 1) {
                        text += '<option selected value="' + roles2[0].id + '">' + roles2[0].name.substring(5) + '</option>'
                        text += '<option value="2">USER</option>'
                    } else {
                        text += '<option selected value="' + roles2[0].id + '">' + roles2[0].name.substring(5) + '</option>'
                        text += '<option value="1">ADMIN</option>'
                    }
                }
                text += '</select>'
                text += '</div>'
                text += '<div class="modal-footer">'
                text += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'
                text += '<button type="submit" class="btn btn-danger" onclick="remove(' + user.id + ')">Delete</button>'
                text += '</div>'
                text += '</td>'
                text += '</tr>'
            })
            document.getElementById('tbody1').innerHTML = text
        })
}

getTableData()