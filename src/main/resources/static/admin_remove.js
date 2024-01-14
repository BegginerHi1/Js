function remove(id) {
    fetch('http://localhost:8080/admin/users/'+id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            getTableData()
            document.querySelector('.modal-backdrop').remove()
        })
}