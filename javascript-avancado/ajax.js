/**
 * AJAX: Asynchronous Javascript And XML
 * Connect browser to server
 */

const loadData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/eliasinacio')
    xhr.send()
    xhr.onreadystatechange = () => {
        console.log(JSON.stringify(xhr.responseText))
    }
}

loadData()