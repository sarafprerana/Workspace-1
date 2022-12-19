//var _ = require('lodash');
/*var array =[
 {    
  "EmployeeName": "Prerana",    
  "Experience": 12,    
  "Technology": "JAVA"    
}, {    
  "EmployeeName": "Shrikant",    
  "Experience": 9,    
  "Technology": "C#"    
}, {    
  "EmployeeName": "Ovi",    
  "Experience": 3,    
  "Technology": "JAVA"    
}, {    
  "EmployeeName": "Aarohi",    
  "Experience": 7,    
  "Technology": "Sql Server"    
}, {    
  "EmployeeName": "Yash",    
  "Experience": 6,    
  "Technology": "C#"}];  
console.log(array);  
//Comparer Function    
function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] <b[prop]) {    
          return -1;    
      } 
      else   
      return 0;    
  }    
}    
 array.sort(GetSortOrder("EmployeeName")); //Pass the attribute to be sorted on    
 console.log("---------Sorted Employee Names : ----------");    
 for (var item in array) {    
   console.log( array[item].EmployeeName);    
 }    
 array.sort(GetSortOrder("Technology")); //Pass the attribute to be sorted on    
 console.log("------------Sorted Technology Names :------------ ");    
 for (var item in array) {    
   console.log(array[item].Technology);    
 } 
 array.sort(GetSortOrder("Experience")); //Pass the attribute to be sorted on    
 console.log("--------------Sorted Experience :-----------");    
 for (var item in array) {    
   console.log(array[item].Experience);    
 }   
*/

var array = [{    
  "EmployeeName": "John",    
  "Experience": 12,    
  "Technology": "SharePoint"    
}, {    
  "EmployeeName": "Charles",    
  "Experience": 9,    
  "Technology": "ASP.NET"    
}, {    
  "EmployeeName": "Jo",    
  "Experience": 3,    
  "Technology": "JAVA"    
}, {    
  "EmployeeName": "Daine",    
  "Experience": 7,    
  "Technology": "Sql Server"    
}, {    
  "EmployeeName": "Zain",    
  "Experience": 6,    
  "Technology": "C#"    
}];    
//Comparer Function    
function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] < b[prop]) {    
          return 1;    
      } else if (a[prop] > b[prop]) {    
          return -1;    
      }
      else  
      return 0;    
  }    
} 
 array.sort(GetSortOrder("EmployeeName")); //Pass the attribute to be sorted on    
 console.log("---------Sorted Employee Names : ----------");    
 for (var item in array) {    
 console.log( array[item].EmployeeName);    
 }    
 array.sort(GetSortOrder("Technology")); //Pass the attribute to be sorted on    
 console.log("------------Sorted Technology Names :------------ ");    
 for (var item in array) {    
 console.log(array[item].Technology);    
 }
 array.sort(GetSortOrder("Experience")); //Pass the attribute to be sorted on    
 console.log("--------------Sorted Experience :-----------");    
 for (var item in array) {    
 console.log(array[item].Experience);    
 }  











 

