let btn = document.querySelector('#seePassword')
let btnConfirm = document.querySelector('#seeConfirmPassword')


let nome = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validName = false

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelName.setAttribute('style', 'color: red')
    labelName.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validName = false
  } else {
    labelName.setAttribute('style', 'color: green')
    labelName.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validName = true
  }
})

user.addEventListener('keyup', () => {
  if(user.value.length <= 4){
    labelUser.setAttribute('style', 'color: red')
    labelUser.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    user.setAttribute('style', 'border-color: red')
    validUser = false
  } else {
    labelUser.setAttribute('style', 'color: green')
    labelUser.innerHTML = 'Usuário'
    user.setAttribute('style', 'border-color: green')
    validUser = true
  }
})

password.addEventListener('keyup', () => {
  if(password.value.length <= 5){
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    password.setAttribute('style', 'border-color: red')
    validPassword = false
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Senha'
    password.setAttribute('style', 'border-color: green')
    validPassword = true
  }
})

confirmPassword.addEventListener('keyup', () => {
  if(password.value != confirmPassword.value){
    labelConfirmPassword.setAttribute('style', 'color: red')
    labelConfirmPassword.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmPassword.setAttribute('style', 'border-color: red')
    validConfirmPassword = false
  } else {
    labelConfirmPassword.setAttribute('style', 'color: green')
    labelConfirmPassword.innerHTML = 'Confirmar Senha'
    confirmPassword.setAttribute('style', 'border-color: green')
    validConfirmPassword = true
  }
})

function signup(){
  if(validName && validUser && validPassword && validConfirmPassword){
    let listaUser = JSON.parse(localStorage.getItem('listUser') || '[]')
    
    listaUser.push(
    {
      nameCad: nome.value,
      userCad: user.value,
      passwordCad: password.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Signing up user...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../html/signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Please fill in all fields correctly before registering.</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputPassword = document.querySelector('#password')
  
  if(inputPassword.getAttribute('type') == 'password'){
    inputPassword.setAttribute('type', 'text')
  } else {
    inputPassword.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmPassword = document.querySelector('#confirmPassword')
  
  if(inputConfirmPassword.getAttribute('type') == 'password'){
    inputConfirmPassword.setAttribute('type', 'text')
  } else {
    inputConfirmPassword.setAttribute('type', 'password')
  }
})



  
  