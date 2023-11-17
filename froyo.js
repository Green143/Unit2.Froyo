const flavors = window.prompt("enter some flavors","vanilla, vanilla, vanilla, strawberry,coffee,coffee") 
console.log(flavors) // should get back all of the flavors
const flavorsArr = flavors.split(`,`)
console.log(flavorsArr) //should get an array for all of the flavors