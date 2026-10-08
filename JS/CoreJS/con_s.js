// conditionalstatements - if , else if, else, switch, ternary operator

// var age = -10;

// if(age >= 18){
//     console.log("You are eligible for voting");
// } else if(age < 18 && age > 0){
//     console.log("You are not eligible for voting");
// } else if (age < 0){
//     console.log("Invalid age entered with minus value");
// }


// // time calculation using if else if else

// var time = 20;

// if(time < 12){
//     console.log("Good Morning");
// } else if(time < 18){
//     console.log("Good Afternoon");
// } else if(time < 21){
//     console.log("Good Evening");
// }else if(time < 24){
//     console.log("Good Night");
// }else{
//     console.log("Invalid time entered");
// }

// // nested if else - Requirement - Need to collect a contestend data (18 Age and above) and also need to check the gender of the contestant (male or female) and based on that we will provide a message to the user.

// var name = "John"; //Non Mandatory

// var age = 25; // Mandatory
// var gender = "male";   
// var age = 20;
// var gender = "female";
// var phone_number = 1234567890; // Non Mandatory
// var email = "teste@test.com"; // Non Mandatory

// var age = -9;
// var bodytype = "fit"; // male, female, transgender





// if(age>=25){
//     console.log("Please allow this person to participate in the Adult contest");

//     if(gender === "male"){
//         console.log("This is a male participant. Please send him to tnagar branch");

//         if(bodytype === "fit"){
//             console.log("This is a fit male participant");
//         } else if(bodytype === "fat"){
//             console.log("This is a fat male participant");
//         } else if(bodytype === "skinny"){
//             console.log("This is a skinny male participant");
//         }else {
//             console.log("This is a male participant with an unknown body type");
//         }

//     } else if(gender === "female"){
//         console.log("This is a female participant. Please send her to tnagar branch");
//         if(bodytype === "fit"){
//             console.log("This is a fit female participant");
//         } else if(bodytype === "fat"){
//             console.log("This is a fat female participant");
//         } else if(bodytype === "skinny"){
//             console.log("This is a skinny female participant");
//         }else {
//             console.log("This is a female participant with an unknown body type");
//         }   
//     }




// } else if(age>=18 && age<=24){
//     console.log("Please allow this person to participate in the Youth contest");


// }else if(age<18 && age>0){
//     console.log("Please allow this person to participate in the Teen contest");


// }else {

//     console.log("Please do not allow this person to participate in the contest");
// }




// if((age >= 18)){

//     if(gender === "male"){

//         console.log("You are eligible for voting and you are a male");

//     } else if(gender === "female"){

//         console.log("You are eligible for voting and you are a female");

//     } else{
//         console.log("You are eligible for voting and your gender is not specified");

//     }
// } else{
//     console.log("You are not eligible for voting");
// }

// ** Ternary Operator **

var age = 20;
var result = (age >= 18) ? "You are eligible for voting" : "You are not eligible for voting";
console.log(result);

// * switch statement *

var day = 1;
switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
}

var browser = "chrome";
var env = "production";

switch(env){

    case "production":
        console.log("You are in the production environment");

    switch(browser){
        case "chrome":
            console.log("You are using Chrome browser");
            break;
        case "firefox":
            console.log("You are using Firefox browser");
            break;
        case "safari":
            console.log("You are using Safari browser");
            break;
        default:
            console.log("You are using an unknown browser");    
        }
            break;

    case "development":

        console.log("You are in the development environment");

    switch(browser){
        case "chrome":
            console.log("You are using Chrome browser");
            break;
        case "firefox":
            console.log("You are using Firefox browser");
            break;
        case "safari":
            console.log("You are using Safari browser");
            break;
        default:
            console.log("You are using an unknown browser");
        }
            break;

    default:
        console.log("You are in an unknown environment");
}
