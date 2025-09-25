function submitForm(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "dattakatakam21@gmail.com",
    Password : "Datta321@",
    To : 'dattakatakam21@gmail.com',
    From : document.getElementById("email").value,
    Subject : "form data",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
