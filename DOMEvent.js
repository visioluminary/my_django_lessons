console.log('Connected!');






var headOne = document.querySelector("#one")
headOne.addEventListener('mouseover',function(){
    headOne.textContent = "JUST BEING HOVERED OVER";
    headOne.style.color = "red";
});


headOne.addEventListener('mousenot',function() {
    headOne.textContent = "Mouse over me";
    headOne.style.color = "BLUE"
});
var headTwo = document.querySelector("#two");
headTwo.addEventListener('click',function() {
    headTwo.textContent = 'I am Clicked';
    headTwo.style.color = 'red'
});

var headThree = document.querySelector("#three");
headThree.addEventListener('dblclick',function() {
    headThree.textContent = 'I AM DOUBLE CLICKED';
    headThree.style.color = 'red'
})
