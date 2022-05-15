// // var firstName = 'Mohamad';

// // const firstName = 'Mohamad';

// // if(true) {
// //     const firstName = 'Mohamad';
// // }

// // let firstName = 'Ahmad';

// // console.log(firstName);

// // const userNames = ['Shahin', 'Mohamad'];

// // const person = {
// //     firstName: 'Mohamad',
// //     lastName: 'Kazemiraz',
// //     sayHi: age => {
// //         console.log(`Hi ${person.firstName}. You are ${age}.`);
// //     }
// // }

// // function sayHi(firstName) {
// //     console.log(`Hi ${firstName}.`);
// // }

// // userNames.push('Omid');

// // person.age = 30;

// // console.log(person);

// // person.sayHi(30);

// // sayHi('Mohamad');



// // const userNamesCopy = userNames;


// // userNames.push('Ali');

// // ...

// // console.log(userNamesCopy);

// // const userNames = ['Mohamad', 'Shahin'];

// // const userNamesCopy = [...userNames];

// // userNames.push('Ali');

// // console.log(userNamesCopy);
// // console.log(userNames);

// // const person = {
// //     firstName: 'Mohamad',
// //     lastName: 'Kazemiraz',
// //     age: 30
// // };

// // const {age, firstName} = person;

// // console.log(firstName);
// // console.log(age);


// // const arr = [1, 2, 3, 4, 5, 6];


// // const [b, a, ...c, d] = arr;

// // console.log(c);


// // function sum(...nums) {
// //     console.log(nums);
// //     // .reduce
// // }

// // sum(10, 20, 30, 40);

// // const arr = [1, 2, 3];

// // const arrCopy = arr.map(element => {
// //     return element * 2;
// // });

// // console.log(arrCopy);


// // const persons = [
// //     {firstName: 'Mohamad', age: 30},
// //     {firstName: 'Shahin', age: 31},
// //     {firstName: 'Amiros', age: 29},
// //     {firstName: 'Ali', age: 28},
// //     {firstName: 'Arsham', age: 32},
// // ];


// // const userNames = persons.map(element => {
// //     let userName = `Mr. ${element.firstName}`;
// //     return userName;
// // });

// // console.log(userNames);





// class Person {
//     constructor(name, age) {
//         this.firstName = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Hi ${this.firstName}`);
//     }
// };

// class Developer extends Person {
//     constructor(name, age, skill) {
//         super(name, age);
//         this.skill = skill;
//     }

//     printSkill() {
//         console.log(this.skill);
//     }
// }

// // const person1 = new Person('Mohamad', 30);
// // const person2 = new Person('Ali', 29);

// // // console.log(person1);

// // person1.sayHi();

// // person2.sayHi();

// const developer1 = new Developer('Mohamad', 30, 'JS');

// // console.log(developer1);

// // developer1.printSkill();
// developer1.sayHi();


// setTimeout(() => {
//     console.log('Ali');
// }, 3000);


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Failed.');
//     }, 3000);
// });


// promise.then(data => {
//     console.log(data);
//     console.log('Mohamad');
// }).catch(err => {
//     console.log(err);
// });




// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({firstName: 'Mohamad', age: 17});
//         }, 3000);
//     });
// }

// async function init() {
//     const user = await getUser();
//     // console.log(user.firstName);
//     // console.log(user.age);
//     if(user.age > 18) {
//         console.log('Welcome.');
//     } else {
//         console.log('Access Denied.');
//     }
// }


// init();




























// const arr = [1, 2, 3];

// const newArray = arr.map(item => item * 3);

// console.log(newArray);



const arr = [1, 2, 3, 4, 5, 6];


// [7, 8, 1, 2, 3, 4, 5, 6];


// const newArray = [7, 8, ...arr];

// console.log(newArray);


console.log(arr.filter(item => item > 4));






















