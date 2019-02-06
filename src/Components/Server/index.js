const api = (productID, method, body) => {
    let options = {
        method: 'GET'
    }

    if(method) {
        options.method = method
    }

    if(body) {
        options.body = JSON.stringify(body)
        options.headers = {
            'Content-Type': 'application/json'
        }
    }

    return fetch(`http://smktesting.herokuapp.com/${productID? `/${productID}` : ''}`, options)
        .then(res => {
            return res.json()
        })
}
export default api