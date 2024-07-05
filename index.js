function sendMail() {
    var params = {
      name: document.getElementById("name1").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };


 const serviceID = "service_angphgq";
 const templateID = "template_3ewgt3i";
 emailjs
   .send(serviceID, templateID, params)
   .then((res) => {
     document.getElementById("name1").value = "";
     document.getElementById("email").value = "";
     document.getElementById("message").value = "";
     console.log(res);
     alert("your message sent successfully");
   })
   .catch((err) => console.log(err));

}