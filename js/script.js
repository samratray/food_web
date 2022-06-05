let searchForm = document.querySelector('.search-form-container');

if(typeof(window)!==undefined){
let user=[{
    email:"samratray@gmail.com",
    password:"samratray",
    name:"Samrat Ray",
    phone:"9876543210"
},
{
    email:"sohammitra@gmail.com",
    password:"sohammitra",
    name:"Soham Mitra",
    phone:"9876543210"
},
{
    email:"souvikmaiti@gmail.com",
    password:"souvikmaiti",
    name:"Souvik Maiti",
    phone:"9876543210"
},
{
    email:"pranshumajumder@gmail.com",
    password:"pranshumajumder",
    name:"Pranshu Majumder",
    phone:"9876543210"
}]
if(!localStorage.getItem("user")){
    localStorage.setItem("user",JSON.stringify(user));
}

}


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}   

document.querySelector('#loginbtn').onclick = (e) => {
    e.preventDefault()
    const users=JSON.parse(localStorage.getItem("user"))
    const email=document.querySelector('#email').value
    const password=document.querySelector('#password').value
    users.map((user)=>{
        if(email===user.email && password===user.password){
            delete user.password
            localStorage.setItem("auth",JSON.stringify(user))
            location.reload()
        }
    })
    
}

document.querySelector('.logoutbtn').onclick = (e) => {
    location.reload()
    e.preventDefault()
    localStorage.removeItem("auth")  
}
if(typeof(window)!==undefined){
    if(localStorage.getItem("auth")){
        const auth=JSON.parse(localStorage.getItem("auth"))
        document.querySelector(".logoutbtn").style.display="block";
        document.querySelector("#login-btn").style.display="none";
        document.querySelector("#username").style.display="block";
        document.querySelector("#username").innerHTML=auth.name;
        document.querySelector("#welcome").innerHTML=`Welcome ${auth.name}`;
    }
    }