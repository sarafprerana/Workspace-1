// console.log("Hiiiii..........!")
// console.log("Hello..........")

// var moment=require('moment')
// console.log(moment().format());

// import moment from 'moment';//ES6 syntax
//  moment().format();

 //import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';

//  var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

 //var moment=require('moment')
 //console.log(moment().weekday(-7));

//console.log(moment().dayOfYear(115)); // Number

 //console.log(moment().day('sunday'));   //number/string

//console.log(moment().millisecond());  // Number

// console.log(moment().second(150));// Number

// console.log(moment().minute(10));// Number

//console.log(moment().hours(20));// Number

//console.log(moment().date());// Number

//console.log(moment().week(4));

//console.log(moment().month())

// var uppercase=require('uppercase')
// console.log(uppercase().('fhgh'));

//console.log(moment().set({'year': 2013, 'months': 5, 'dates': 5}));


/*var http = require('http');  
var uc = require('uppercase'); 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("hello world!")); 
    res.end();
}).listen(5000); */

/*const up = require('upper-case')
console.log(up.upperCase('hello world'))
console.log(up.upperCase('welcome to js'))*/


/*var animal = arr.sort((dog,car) => {

    if (a.dog< b.car) {
  
      return -1;
  
    }
  
    return 0;
  
  });
  
  console.log("Sorted  ",animal)*/




  var array = [{    
    "EmployeeName": "John",    
    "Experience": "12",    
    "Technology": "SharePoint"    
}, {    
    "EmployeeName": "Charles",    
    "Experience": "9",    
    "Technology": "ASP.NET"    
}, {    
    "EmployeeName": "Jo",    
    "Experience": "3",    
    "Technology": "JAVA"    
}, {    
    "EmployeeName": "Daine",    
    "Experience": "7",    
    "Technology": "Sql Server"    
}, {    
    "EmployeeName": "Zain",    
    "Experience": "6",    
    "Technology": "C#"    
}];    
//Comparer Function    
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
    
array.sort(GetSortOrder("EmployeeName")); //Pass the attribute to be sorted on    
document.write("Sorted Employee Names : ");    
// for (var item in array) {    
//     document.write("<br>" + array[item].EmployeeName);    
// }    
    
// array.sort(GetSortOrder("Technology")); //Pass the attribute to be sorted on    
// document.write("<br><br> Sorted Technology Names : ");    
// for (var item in array) {    
//     document.write("<br>" + array[item].Technology);    
// }   