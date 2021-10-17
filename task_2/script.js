//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const btnNode = document.querySelector('.j-click');

btnNode.addEventListener('click', () => {
alert(`Ширина экрана ${window.screen.width} пикселей, высота - ${window.screen.height} пикселей`);
});