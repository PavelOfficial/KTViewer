
type isItObjectSubtype = String extends object ? true : false;


type TX = string | number;
type TY = string;

type value = TY extends TX ? true : false;

declare const x: TY;

const ty: TX = x;

console.log(ty);

/*

let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });


x = y; // OK
y = x; // Error, because x() lacks a location property

 */
