let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputPassword = document.querySelector('#password')
  
  if(inputPassword.getAttribute('type') == 'password'){
    inputPassword.setAttribute('type', 'text')
  } else {
    inputPassword.setAttribute('type', 'password')
  }
})

function enter(){
  let user = document.querySelector('#user')
  let userLabel = document.querySelector('#userLabel')
  
  let password = document.querySelector('#password')
  let passwordLabel = document.querySelector('#passwordLabel')
  
  let msgError = document.querySelector('#msgError')
  let listUser = []
  
  let userValid = {
    name: null,
    user: null,
    password: null
  }
  
  listUser = JSON.parse(localStorage.getItem('listUser'))
  
  listUser?.forEach((item) => {
    if(user.value == item.userCad && password.value == item.passwordCad){
       
      userValid = {
         name: item.nameCad,
         user: item.userCad,
         password: item.passwordCad
       }
      
    }
  })
   
  if(user.value == userValid.user && password.value == userValid.password){
    window.location.href = '../../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLog', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    user.setAttribute('style', 'border-color: red')
    passwordLabel.setAttribute('style', 'color: red')
    password.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'User or password incorrect!'
    user.focus()
  }
  
}

