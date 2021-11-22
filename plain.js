const colors =['green','red','tomato','skyblue','gold','pink','green','red','yellow','purple','gold','pink','greenyellow']
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    // get number from 0-3 as colors is an array of 4
    function getRandomNumber(){
        return Math.floor(Math.random()*colors.length);
    }
    const randomNumber =getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors [randomNumber];
})
