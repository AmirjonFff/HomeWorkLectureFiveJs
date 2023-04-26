// this 1.

// console.log(this);

// this 2.

// let obj = {
//     name: "Amirjon",
//     age: 21,
//     getAge: function() {
//         return this;
//     }
// }

// console.log(obj.getAge());

// this 3.

// function get() {
//     return this;
// }

// console.log(get());

// this 4.

// 'use strict'

// function get() {
//     return this;
// }

// console.log(get());

// new Date()

// let newDate1 = new Date();
// console.log(newDate1);

// let newDate2 = new Date(0);
// console.log(newDate2);

// let newDate3 = new Date(1700000000000);
// console.log(newDate3);

// new Date(milliseconds)

// let newDate1 = new Date();
// console.log(newDate1);

// let newDate2 = new Date(0);
// console.log(newDate2);

// let newDate3 = new Date(1682483416807);
// console.log(newDate3);



// new Date(data string)

// let newDate1 = new Date("2023-04-26");
// console.log(newDate1);

// let newDate2 = new Date("2023-04");
// console.log(newDate2);

// let newDate3 = new Date("2023");
// console.log(newDate3);

// let newDate4 = new Date("2023-04-09T11:00:00Z");
// console.log(newDate4);




// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// let newDate1 = new Date(2023, 3, 26, 9, 22, 30, 0);
// console.log(newDate1);

// let newDate2 = new Date(2023, 3, 26);
// console.log(newDate2);

// let newDate3 = new Date(2023, 3);
// console.log(newDate3);

// new Date()

// let newDate1 = new Date(2023, 3, 26, 9, 22, 30, 0);
// console.log(newDate1);

// let newDate2 = new Date(2023, 3, 26);
// console.log(newDate2);

// let newDate3 = new Date(2023, 3);
// console.log(newDate3);

// // now()

// let n = Date.now();
// console.log(n);

// // getFullYear()

// let t = new Date();
// console.log(t.getFullYear());

// // getMonth()

// let m = new Date();
// console.log(m.getMonth());

// // getDate()

// let d = new Date();
// console.log(d.getDate());

// // getDay()

// let day = new Date();
// console.log(day.getDay());

// // getHours()

// let h = new Date();
// console.log(h.getHours());

// // getMinutes()

// let minutes = new Date();
// console.log(minutes.getMinutes());
// let minutes2 = new Date("1983 01:17:00");
// console.log(minutes2.getMinutes());

// setDate()

let sd = new Date();
console.log(sd.setDate(26));

let a = new Date(sd);
console.log(a.toString());

// setMonth

let sm = new Date();
console.log(sm.setMonth(3));

let am = new Date(sm);
console.log(am.toString());

// setFullYear()

let sy = new Date();
console.log(sy.setFullYear(2002));

let ay = new Date(sy);
console.log(ay.toString());

let ay2 = new Date();
ay2.setFullYear(ay2.getFullYear() - 1, ay2.getMonth() - 4);
console.log(ay2);



