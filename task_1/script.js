//Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео).
//При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
    function btn() {
        icon1.classList.toggle("hide");
        icon2.classList.toggle("hide");
    }