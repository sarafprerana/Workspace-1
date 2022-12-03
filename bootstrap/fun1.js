
 const formDetails = document.getElementById("details");
 formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    document.write("First Name=" + fName);
    document.write("Last Name=" + lName);
     
    var gm=document.getElementById("gm").value;
    document.write("gender"+gm);
   
 })
 /*const formDetails = document.getElementById("details");
 formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
      
   var a;
   if(a=MSC)
   {
     document.write(a);
   }
   else{
     document.write("Not available");
   }
  });*/
  

 