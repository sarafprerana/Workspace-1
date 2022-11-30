
const formDetails = document.getElementById("details");
formDetails.addEventListener("submit", async (ev) => {
   ev.preventDefault();
   var fName = document.getElementById("fname").value;
   var lName = document.getElementById("lname").value;
   var h =document.getElementById("hobbies").value;
   var h1=document.getElementById("hobbies1").value;
   var male=document.getElementById("gm").value;
   var female =document.getElementById("gf").value;
   document.write("First Name=" + fName);
   document.write("Last Name=" + lName);
   document.write("Hobbies="+h);
   document.write("Hobbies="+h1);
   document.write("Gender="+male);
   document.write("Gender="+female);
})