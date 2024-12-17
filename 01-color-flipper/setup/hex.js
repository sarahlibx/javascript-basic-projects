const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex color = 6 values of # 0-9 into letters ex: #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//set up loop to generate hex color to generate 6 values
btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//function to generate random hex color
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}