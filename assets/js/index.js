if(localStorage.getItem('token') == null){
    alert('You must be logged in to access the page.')
    window.location.href = './assets/html/signin.html'
}

let userLog = JSON.parse(localStorage.getItem('userLog'));

let logged = document.querySelector('#logged')
logged.innerHTML = `Helo ${userLog.name}`


function exit(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLog')
    window.location.href='./assets/html/signin.html'
}