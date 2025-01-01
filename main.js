// const sr = ScrollReveal ({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true
// })

// sr.reveal('.text',{delay:200, origin: 'top'})
// sr.reveal('.form-container form',{delay:800, origin: 'left'})
// sr.reveal('.heading',{delay:800, origin: 'top'})
// sr.reveal('.ride-container .box',{delay:600, origin: 'top'})
// sr.reveal('.services-container .box',{delay:600, origin: 'top'})
// sr.reveal('.about-container .box',{delay:600, origin: 'top'})
// sr.reveal('.reviews-container',{delay:400, origin: 'top'})
// sr.reveal('.newsletter .box',{delay:400, origin: 'bottom'})


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.reg-link')
const signIn = document.querySelector('.sign-in')
const close = document.querySelector('.icon-close')
const login = document.querySelector('.login-btn')
const register = document.querySelector('.register-btn')
const email = document.querySelector('.email')
const passward = document.querySelector('.passward')



registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

signIn.addEventListener('click',()=>{
    wrapper.classList.add('active-btn');
});

close.addEventListener('click',()=>{
    wrapper.classList.remove('active-btn');
});

login.addEventListener('click',()=>{
    alert("Login Successful");
});

register.addEventListener('click',()=>{
    alert("Register Successful")
})

// if(email==='this.is.onlyyuvraj@gmail.com'){
//     login.addEventListener('click',()=>{
//         alert("Login Successful");
//     });
// }else{
//     login.addEventListener('click',()=>{
//     alert("Login UnSuccessful")
//     });
// }
