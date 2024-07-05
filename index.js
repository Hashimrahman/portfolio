function sendMail() {
    if (document.getElementById("name1").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("message").value.length > 0
    ){
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
    else if(document.getElementById("name1").value.length == 0){
        alert("Name cant be empty");
    }
    else if(document.getElementById("email").value.length == 0){
        alert("Email cant be empty");
    }
    else if(document.getElementById("message").value.length == 0){
        alert("Message cant be empty");
    }
    
}

