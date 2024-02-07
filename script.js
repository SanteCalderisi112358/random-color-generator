const containerColorEls = document.querySelectorAll('.container-color')
const h1el = document.getElementById('title')
const colorCodeRandom = ()=>{
    let colorCode = '';
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    colorCode = `rgba(${red},${green},${blue})`
    return colorCode;
}

console.log(colorCodeRandom())

containerColorEls.forEach(containerColor =>{
    containerColor.style.backgroundColor = colorCodeRandom();
    containerColor.innerHTML = `${colorCodeRandom()}`
})

h1el.style.backgroundColor = colorCodeRandom()
