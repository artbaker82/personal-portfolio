const container = document.getElementById("border-wrapper");

//generate array of squares containing url, x and y positioning

const configArr = Array.from({ length: 50 })
  .fill({})
  .map((item) => {
    return {
      ...item,
      src: "/media/roundedPrimarySquare.svg",
      x: 0,
      y: 0,
    };
  });

console.log(configArr);
//map them to the dom
const nodes = configArr.forEach(() => {
  return container.appendChild(document.createElement("div")).classList.add("rounded-square");
});
console.log(container);

// const newSquares = squares.forEach((square) => {
//   console.log(square);
//   square.appendChild(img);
// });

// const fillElement = () => {
//     configArr.forEach(element => {
//         container.appendChild()
//     })
// }
