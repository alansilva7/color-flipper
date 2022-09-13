const hex:Array<string | number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn:HTMLElement | null = document.getElementById('btn')
const color:HTMLElement | null = document.getElementById("color")


btn?.addEventListener('click', function () {
  let hexColor:string = "#"
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    // console.log(hexColor);
  }
    color?.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
