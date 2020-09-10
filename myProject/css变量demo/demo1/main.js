const box = document.querySelector('.box');
const boxStyles = getComputedStyle(box);
// console.log(boxStyles)
const boxBorderColor = boxStyles.getPropertyValue('--box-border-color');
// console.log(boxBorderColor)

const header = document.querySelector('#main-header');
header.style.setProperty('--header-bg-color',boxBorderColor);
