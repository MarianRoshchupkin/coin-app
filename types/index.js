"use strict";
var MyHomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};
console.log(MyHomeTask);
// // 3
// interface MyArray<T> {
//   [N: number]: T
//
//   map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
//   reduce<U>(fn: (previousValue: T, currentValue: T, index: number, arr: MyArray<T>) => T, initialNumber: number): MyArray<U>
// }
// // 4
// interface IHomeTask {
//   data: string,
//   numbericData: number;
//   date: Date;
//   externalData: {
//     basis: number,
//     value: string
//   }
// }
//
// type MyPartial<T> = {
//   [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
// }
//
// const homeTask: MyPartial<IHomeTask> = {
//   externalData: {
//     value: 'win'
//   }
// }
//# sourceMappingURL=index.js.map