function post(url, body){
    console.log("Body=", body)
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))

    req.onload = function(){
        console.log(this.responseText)
    }

    return req.responseText
}

function registerEmail (){
    let url = "http://127.0.0.1:5000/emails"
    let email = document.getElementById('email');
    console.log(email.value)

    body = {
        "email": email
    }

    post(url, body)
}