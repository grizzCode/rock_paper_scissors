let arr = ["Rock", "Paper", "Scissors"];
let x

  document.getElementById("rock").onclick = function() {rockFn()};
  document.getElementById("paper").onclick = function() {paperFn()};
  document.getElementById("scissors").onclick = function() {scissorsFn()};


function rockFn() {
  console.log(arr[0])
  x = arr[0]
  return 0
}
function paperFn() {
  console.log(arr[1])
  x = arr[1]
  return 1
}
function scissorsFn() {
  console.log(arr[2])
  x = arr[2]
  return 2
}

console.log(x)

let computer = arr[Math.floor(Math.random()*arr.length)];
document.getElementById('computer').innerHTML = `Computer: ${computer}`



