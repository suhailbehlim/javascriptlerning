// // DOM METHOD
// let name ="Lets Practice Javascript!";
// document.querySelector("h1").innerHTML=name;


// //SCOPE
// let admin = "javascript developer"; //block scope
// let Admin="suhail";
// const add =admin +" "+ Admin; // block scope 
// console.log(add);



// // FUNCTIONS

// let num = 5;
// function multiply(n){
//     let result =n*n;
//     return result;
// }

// let multiplyof5 = multiply(5);
// console.log(multiplyof5); 
// let multiplyofnum = multiply(num);
// console.log(multiplyofnum);

// //ARRAY METHOD 

// let arr=['suhail', 'ahmad','behlim'];
// let arr2 =['is','a','self-depended','man'];
// let resultarr=arr.concat(arr2);
// console.log(resultarr);
// let stringma = resultarr.toString();
// console.log(stringma);



// //OBJECTS WITHIN OBJECT;
// const person={
//     Name:"suhail",
//     Age:22,
//     color:"white",
//     Gender:"male",
// details:function() {
//     return this.Name +" "+this.Age +" " +this.color+" "+this.Gender;
// }
// };
// let fulldetails = person.details();
// console.log(fulldetails);

// //SECOND EXAMPLE
// const car={
//     Model:"ferrari",
//     Color:"red",
//     maxspeed:2000,
//     minspeed:1000,

//     data:function(){
// return this.Model + " "+ this.Color + " AND THE CAR MAXSPEED IS:"+ this.maxspeed;
//     }

// };
// const alldata = car.data();
// console.log(alldata);




// // hoisting
// let zigzag =8;

// function getname(){
// return "hello suhail";
// }
// // getname()
// console.log(getname());
// console.log(zigzag);



// function myfunction(){
//     console.log("first function syntax");
// }


// // SO GUYS HERE IS THE FIRST PROJECT IN JAVASCRIPT WHICH IS A CLOCK

// function currentTime(){
//     let date = new Date();
//     let  hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";
// //this is for 12 hours-
//     if (hh==0){
//         hh=12;
//     }
//     if(hh>12){
//         hh = hh-12;
//         session ="PM";
    
//     }

//     // this is for 24 hours-
//     // if(hh>12){
//     //     session="PM";
//     // }


//     hh = (hh<10)? "0"+ hh : hh ;
//     mm = (mm<10)? "0"+ mm : mm ;
//     ss = (ss<10)? "0"+ ss : ss ;

//     let time = hh + ":" + mm + ":" + ss + ":" + session;
//     // console.log(time);
//     document.getElementById("time").innerHTML=time;
//     let t = setTimeout(function(){ currentTime() }, 1000);
 
// }
// currentTime();


// //CLOUSERS

// function myfunction(){
// let a = 5;
// function yourfunction(){
//     console.log(a
//         );
// }

// yourfunction();
// }
// myfunction();

// // function whithin two function this is what clouser work

// function init(){
//     let suhail="name hi kaafi he!";
//     function secondinit(){
//         console.log(suhail);
//         function thirdinit(){
//             console.log("this is three init");
//         }
//         thirdinit();
//     }
//     secondinit();
// }
// init();


// // javascript exercises
// const marksMass =78;
// const MarksHeight = 1.69;
// const johnsMass =92;
// const johnsHeight = 1.95;

// const BMIMark = marksMass/MarksHeight ** 2;
// const BMIjohn = johnsMass/johnsHeight ** 2;

// const heightHigh = BMIMark>BMIjohn;
// console.log(BMIMark,BMIjohn);
// console.log(heightHigh);


// //strings 
// const person ="suhail";
// const job ="Developer";
// const BirthYear = 2000;
// const currentYear =2022;

// const detailsAll ="I am"+" "+ person+ " " + "and i am a "+ job + " "+"and my age is" + " "+(currentYear-BirthYear);
// //we can also done it by literles-
// const detailsAllagain =`I am ${person} and i am a ${job} and my age is ${(currentYear-BirthYear)}`;
// console.log(detailsAll);
// console.log(detailsAllagain);

// console.log(`this is \n multiline \n practices`);

//using prompt box
//  const luckynumber = Number(prompt("what is your lucky number?"));
//  console.log(luckynumber);
//  console.log(typeof luckynumber);

//  if (luckynumber===7){
//     console.log("this is the bestest number ever");
//  }
//  else{
//     console.log("choose the amazing number birather");
//  }


//  //switch cases-
 
//  const day ="sunday";

//  switch(day){
//   case  'sunday' :
//     console.log("happy leave today");
//     break;
//     case'monday':
//     console.log("Go to the work Bro");
//     break;
//     default:
//         console.log("hota he chalta he keep working");
//  }

//  'use strict';
//  let hasDriversLicense = false;
//  const passTest =true;
 
//  if (passTest) hasDriversLicense= true;
//  if (hasDriversLicense) console.log("i can drive"); 


// //function with capturing a value in variable
// function fruitprocessor(apple,orange){
//    console.log(apple ,orange);
//    const juice =`the juice of ${apple} apple and ${orange} oranges`;
//    return juice;
// }
// const alljuice =fruitprocessor(5,8);   //here we capture the value 
// console.log(alljuice);

// const againalljuice = fruitprocessor(10,15);
// console.log(againalljuice);


// //practice 
//  const calcAge = function (birthdate){
//    return 2037-birthdate;
//    const myBirthdate = `Age: ${birthdate} is `
//  }

//  const Age=calcAge(20);
//  console.log(Age);



//Arrow function

const calAverage =(a,b,c)=> (a+ b+ c)/3;
console.log(calAverage(3, 4 , 5));

// test1
const suhailAverage = calAverage(20,50,7);
const developer = calAverage(7,80,80);

console.log(suhailAverage, developer);