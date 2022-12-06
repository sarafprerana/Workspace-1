
 const formDetails = document.getElementById("details");
 formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    document.write("First Name=" + fName);
    document.write("Last Name=" + lName);
     
    var date=document.getElementById('dob').value;
    document.write("Date="+date);
   
 })
 /*const formDetails = document.getElementById("details");
 formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
      
   var a=MSC;
   var b=BSc
   if(a=MSC)
   {
     document.write(a);
   }
   else{
     document.write("Not available");
   }
  });
  

 var form= document.getElementById('form')

 form.addEventListener('submit',function(event){

  event.preventDefault() //autosubmitting

  var fName=document.getElementById('fname').value;

  document.write("First Name="+fName);

  var lName=document.getElementById('lname').value;

  document.write("Last Name="+lName);
 })*/