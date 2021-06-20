
/*


Dont code in hurry...
It harder even to make a code run successfully. once the code runs and gives your desired result after long time  . 
Take equal time it took you to make it run successfully for cleaning that code.
Make it Clean and Bug free  .

*/

// REMEMBER IF YOU CREATE A MESS  , You will go slow.
// If you go slow and clean , You will go fast for long run .


// *********************************************************************************************

// MAKE YOU CODE SO EASY AND SIMPLE AND SELF DESCRIPTIVE THAT ,EVEN A CAVE MAN CAN READ IT
// IT IS MORE IMPORTANT THAT YOUR PEERS COULD UNDERSTAND THE CODE , Rather then the computers.

// ***********************************************************************************************




// "clean code reads like well-written prose."
// Clean code never abscures the designer's intent but rather is full
// of crisp abstractions and straightforward lines of AbortController." -Robert C. Martin

// *************************************Rule one*****************************************
// Rule for Magic-Number: MagicNumber means that we are assigning a number with no clear meaning.
// So, It's better to replace the Magic-Number with a Name-Constant


// BAD PRACTICE

for (let i = 0; i<86400; i+= 1 ){

};

// GOOD PRACTICE
const SecondsInADay = 86400;
for (let i = 0; i< SecondsInADay; i+= 1 ){
// .........
};



// *************************************Rule two*****************************************
// Make you code self explanatory and code must speak for itself... make it most simpler.




// *************************************Rule three*****************************************
// Avoid large functions


// BAD PRACTICE
const addMultiplySubtract=(a,b,c)=>{
    // addition
    const addition = a+b+c;
    // multiplication
    const multiplication = a*b*c;
    // subtraction
    const subtraction = a-b-c;

    // return a string (addition,multiplication,subtraction)
    return `${addition} ${multiplication} ${subtraction}`
};




// GOOD PRACTICE
const addition = (a,b,c) =>    a+b+c ;
const multiplication = (a,b,c) =>    a*b*c ;
const subtraction = (a,b,c) =>    a-b-c ;










// *************************************Rule four*****************************************
// Avoid Repetation of code


// BAD PRACTICE
const getUserCredentials = (user) => {
    const name = user.name;
    const surname = user.surname;
    const password = user.password;
    const email = user.email;
}


// GOOD PRACTICE
const getUserCredentials = (user) => {
    const {name,surname,password,email} = user;
}








// *************************************Rule  five*****************************************
// Variable Naming   Commonly  2 - 3 words used.  Use more if necessary to make concise

// BAD PRACTICE
const variable_name = "John"


// Good Practice
const variableName = "John"





// *************************************Rule  six*****************************************
// Use meaningful names for variables name


// GOOD PRACTICE
getUserData;
getUserInfo;
getUserPosts;




// *************************************Rule  seven*****************************************
//Use long concise name only when two or three word for variable is not descriptive

// GOODPRACTIVE use this way if necessary only when it gets harder to make var. names descriptive 
getUserFromDatabase;
findUserByNameOrEmail;



// *************************************Rule  eight*****************************************
//Use you standard verb standard everywhere in naming

// BAD PRACTICE (all names means same but with different verbs - get,return,retrieve)
getQuestions;
returnQuestions;
retrieveQuestions;

// GOOD PRACTICE (here only single verb is used everywhere for giving same meaning)
getQuestion;
getPosts;
getApi;
deleteUsers;
deletePosts;


// *************************************Rule  nine*****************************************
// make booleans that read well in if-then statements
let Car = {};

isSedan,isSold,isGreen,hasAirbag

car.isSedan; car.isSold; car.isGreen; car.hasAirbag;





// *************************************Rule  ten*****************************************
// Use PascalCase for classNames 
// By using PascalCase for classNames ,we dont get confused whether it is variable / object or ClassNames in js



// class ClassNameOne = {}







// *************************************Rule  eveven*****************************************
// USE SNAKE_UPPER_CASE for constant values
const SECOND_IN_A_DAY = 86400;








//-------------------------------------TIPS: Use nouns for naming class-names








