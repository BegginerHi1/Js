function admin_remove(id) {
    fetch('http://localhost:8080/admin/users/'+id+'', {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(json => {
            getTableData()
        })
}