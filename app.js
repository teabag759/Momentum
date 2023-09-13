const player = {
    name : "soy",
    points : 1234,
    fat : true
};

console.log(player);
console.log(player.name);
// player -> object, name -> player 안 요소 
// console -> object, log -> console 안에 존재하는 요소 

console.log(player["name"]);

player.name = "Nico";
console.log(player.name); // Nico로 출력 -> const(player)를 변경한 것이 아니라, object(const) 안 요소의 값을 변경한 것임

//player = false; // const를 하나의 값으로 취급할 경우에 오류 발생 (player를 boolean 값으로 취급)

player.lastName = "Lee";// object에 값 추가 
console.log(player);

player.points = player.points + 15; // points 값 update
console.log(player.points);