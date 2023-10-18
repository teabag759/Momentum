const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date() // 새로운 Date 객체 생성 
    const hours = String(date.getHours()).padStart(2, '0');
        // getHours()는 number을 반환하므로 padStart()을 사용할 수 없음
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);    
}

getClock()
// setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);