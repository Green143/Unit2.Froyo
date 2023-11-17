const flavors = window.prompt("enter some flavors","vanilla,vanilla,vanilla,strawberry,coffee,coffee");
console.log(flavors) // should get back all of the flavors

const flavorsArr = flavors.split(",")
console.log(flavorsArr) //should split up the array for all of the flavors

// write a function to show how many of each flavor is being ordered
function getStats(flavorsArr){
    const stats = {}
    for(let i = 0; i < flavorsArr.length; i++){
      const eachFlavor = flavorsArr[i]
      if((stats)[eachFlavor] === undefined){
        stats[eachFlavor]= 0
      }
      stats[eachFlavor]++
    }
    return stats
  }
  console.log(getStats(flavorsArr))

 