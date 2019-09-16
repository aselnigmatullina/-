//Домашнее задание: расчет рулонов
//Вычисляем периметр комнаты
let roomWidth = 5;
let roomLenght = 6;
let perimetr = (roomLenght+roomWidth)*2;
console.log(perimetr + "м");

//сколько полотнищ понадобится для оклеивания комнаты?
let wallpaperWidth = 1.06;
let wallpaperAmount=Math.round(perimetr/wallpaperWidth);

console.log(wallpaperAmount);

//На сколько полотнищ хватит одного рулона?
let rollLength = 10;
let roomHeight = 2.75;
let roomHeightMore = 0.1;
let roomHeightFinish=(roomHeight+roomHeightMore);
let wallpaperInRoll=Math.floor(rollLength/roomHeightFinish);
console.log(wallpaperInRoll);

//Сколько рулонов обоев понадобится?
let rollAmount=Math.floor(wallpaperAmount/wallpaperInRoll);
console.log(rollAmount);


