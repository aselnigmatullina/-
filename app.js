//Home work: calculation of rolls
//Calculate the perimeter of the room
const roomWidth = 5;
const roomLength = 6;
const perimetr = (roomLength+roomWidth)*2;
console.log(perimetr + "м");

//The amount of wallpapers required for pasting the room
const wallpaperWidth = 1.06;
const wallpaperAmount=Math.round(perimetr/wallpaperWidth);
console.log(wallpaperAmount);

//How many sheets will one roll have?
const rollLength = 10;
const roomHeight = 2.75;
const roomHeightMore = 0.1;
const roomHeightFinish=(roomHeight+roomHeightMore);
const wallpaperInRoll=Math.floor(rollLength/roomHeightFinish);
console.log(wallpaperInRoll);

//How many rolls of wallpaper will you need?
const rollAmount=Math.floor(wallpaperAmount/wallpaperInRoll);
console.log(rollAmount);


