var prompt = require("prompt-sync")()
let fruits = ["banana", "apple",  "cherry"]
let newFruit = prompt("Enter a fruit to add:")

if (newFruit !== null) 
{
  if (fruits.includes(newFruit)) 
  {
    console.log(`${newFruit} already exists → Not added`)
  } 
  else 
  {
    fruits.push(newFruit)
  }

  fruits.sort()

  console.log("Sorted Array:", fruits)
  console.log("Array Length:", fruits.length)
}