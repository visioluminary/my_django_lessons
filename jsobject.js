
var object = {make: "Merc", year: 1998, model: "Camry79"}




make: "Merc"model: "Camry79"year: 1998__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
console.dir(object);
VM881:1 Objectmake: "Merc"model: "Camry79"year: 1998__proto__: Object
undefined
for (key in object){
	console.log(key);
}
VM941:2 make
VM941:2 year
VM941:2 model
undefined
for (key in object){
	console.log(key);
	console.log(object[key]);
}
VM1017:2 make
VM1017:3 Merc
VM1017:2 year
VM1017:3 1998
VM1017:2 model
VM1017:3 Camry79
undefined