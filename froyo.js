const flavors = window.prompt("enter some flavors","vanilla,vanilla,vanilla,strawberry,coffee,coffee");
console.log(flavors) // should get back all of the flavors

const flavorsArr = flavors.split(",")
console.log(flavorsArr) //should get an array for all of the flavors


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

  /*const arr2 = "vanilla, vanilla, vanilla, strawberry,coffee,coffee"
  const stats = getStats(arr2)
  console.log(stats)

  /*const str2 = "This is a sentence!"
  const stats = getStats(str2)
  console.log(stats)


/*function getSum(obj) {
    let sum =0;
    for(let key in obj){
    sum += obj[key]
}
    return sum
}
console.log(getSum(flavorType)*/