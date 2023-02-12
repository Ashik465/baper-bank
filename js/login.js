document.getElementById('submit-btn').addEventListener('click', function() {
    const email = document.getElementById('email');
   const emailText= email.value;
    const password = document.getElementById('password');
   const passwordText= password.value;

   

   if(emailText=== 'helloashikul@gmail.com' && passwordText === 'ash'){
    window.location.href = 'bank.html';
   }
   else {
     alert('you have entered wrong email or password') ;
   }
    
})