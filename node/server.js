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







//  var _ = require('lodash');
//  console.log("------------GroupeBy Technology------------")
//  result = _.groupBy(['Java', 'ASP.NET', 'Sql server','C#','C#'], 'technology');
//  console.log(result);
 

//  console.log("------------GroupeBy Empluyee Name------------")
//  result = _.groupBy(['Ovi','Arohi','kanchan','gayatri','aarti'], 'length');
//  console.log(result);



 //result = _.groupBy(['one', 'two', 'three'], 'length');
 //console.log(result);

 
// function myCallback({ quantity }) {
//   return quantity > 5 ? "ok" : "restock";
// }

// const result2 = inventory.group(myCallback);


// const employee = [
//   { name: 'shrikant', technology: 'java',age:'28' },
//   { name: 'prerana', technology: 'java',age:'27'},
//   { name: 'ovi', technology: 'html' ,age:'6'},
//   {name:'aarohi',technology:'css',age:'8'}
// ];
// const groupByCategory = {
//   'fruits': [
//     { name: 'apples', category: 'fruits' }, 
//     { name: 'oranges', category: 'fruits' },
//   ],
//   'vegetables': [
//     { name: 'potatoes', category: 'vegetables' }
//   ]
// };

// const group = employee.reduce((group, employee) => {
//   const { technology } = employee;
//   group[technology] = group[technology] ?? [];
//   group[technology].push(employee);
//   return group;
// }, {});
// console.log(group);



 

