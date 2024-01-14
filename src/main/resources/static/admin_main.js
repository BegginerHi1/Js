function getTableData() {
    fetch('http://localhost:8080/admin/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let text = ''
            json.forEach(user => {
                text += '<tr>'
                text += '<td>'+user.id+'</td>'
                text += '<td>'+user.firstName+'</td>'
                text += '<td>'+user.lastName+'</td>'
                text += '<td>'+user.age+'</td>'
                text += '<td>'+user.email+'</td>'
                if (user.roles.length > 1) {
                    text += '<td>'+user.roles[0].name.substring(5)+' '+user.roles[1].name.substring(5)+'</td>'
                } else {
                    text += '<td>'+user.roles[0].name.substring(5)+'</td>'
                }
                //////////////////////////////             Edit Td With Edit Modal                //////////////////////
                text += '<td>'
                text += '<button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit'+user.id+'">Edit</button>'
                text += '<div class="modal fade" id="edit'+user.id+'" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">'
                text += '<div class="modal-dialog">'
                text += '<div class="modal-content">'
                text += '<div class="modal-header">'
                text += '<h1 class="modal-title fs-5" id="editModalLabel">Edit user</h1>'
                text += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
                text += '</div>'
                text += '<div class="modal-body text-center">'
                text += '<div class="mb-3">'
                text += '<label for="edit-id" class="col-form-label"><strong>ID</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="edit-id'+user.id+'" readonly value="'+user.id+'">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="edit-firstName'+user.id+'" class="col-form-label"><strong>First Name</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="edit-firstName'+user.id+'" value="'+user.firstName+'">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="edit-lastName'+user.id+'" class="col-form-label"><strong>Last Name</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="edit-lastName'+user.id+'" value="'+user.lastName+'">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="edit-age'+user.id+'" class="col-form-label"><strong>Age</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="edit-age'+user.id+'" value="'+user.age+'">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="edit-email'+user.id+'" class="col-form-label"><strong>Email</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="text" class="form-control" id="edit-email'+user.id+'" value="'+user.email+'">'
                text += '</div>'
                text += '<div class="mb-3">'
                text += '<label for="edit-password'+user.id+'" class="col-form-label"><strong>Password</strong></label>'
                text += '<input style="height: 30px; width: 300px; margin: 0 auto" type="password" class="form-control" id="edit-password'+user.id+'">'
                text += '</div>'
                text += '<div class="mb3">'
                text += '<label for="edit-role'+user.id+'"><strong>Role</strong></label>'
                text += '<select style="height: 60px; width: 300px; margin: 0 auto" class="form-select text-center" multiple id="edit-role'+user.id+'">'
                if (user.roles.length > 1) {
                    text += '<option selected value="'+user.roles[0].id+'">'+user.roles[0].name.substring(5)+'</option>'
                    text += '<option selected value="'+user.roles[1].id+'">'+user.roles[1].name.substring(5)+'</option>'
                } else {
                    if (user.roles[0].id === 1) {
                        text += '<option selected value="'+user.roles[0].id+'">'+user.roles[0].name.substring(5)+'</option>'
                        text += '<option value="2">USER</option>'
                    } else {
                        text += '<option selected value="'+user.roles[0].id+'">'+user.roles[0].name.substring(5)+'</option>'
                        text += '<option value="1">ADMIN</option>'
                    }
                }
                text += '</select>'
                text += '</div>'
                text += '<div class="modal-footer">'
                text += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'
                text += '<button type="submit" class="btn btn-primary" onclick="edit('+user.id+')">edit</button>'
                text += '</div>'
                text += '</td>'
                //////////////////////////////            Remove Td With Remove Modal             //////////////////////////////
                text += '<td><button class="btn btn-danger" onclick="admin_remove('+user.id+')">Delete</button></td>'
                text += '</tr>'
            })
            document.getElementById('tbody1').innerHTML = text
        })
}
getTableData()