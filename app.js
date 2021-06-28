const colors=["green", "Red", "rgba(133,122,200)","#f15025", "blue", "orange"];

const btn = document.getElementById("btn");
//아이디로 버튼을 가져온다

const color = document.querySelector(".color");
//color class의 span 태그를 가져온다

//버튼에 이벤트를 걸어준다

btn.addEventListener('click', function() {
    const randomNumber = getRendomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRendomNumber () {
    return Math.floor(Math.random() * colors.length);
} 
//Math.floor로 반올림하지 않은 정수값을 만든다