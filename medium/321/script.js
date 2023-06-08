/***
 * @param container {Node} ссылка на DOM-node, в которую нужно вписать строку `str`
 * @param str {string} строка, которую необходимо вписать. Максимальная длина равняется 100 символам
 * @param min {number} минимальное значение `font-variation-settings` (целое число)
 * @param max {number} максимальное значение `font-variation-settings` (целое число)
 * @return {number | null} искомое значение `font-variation-settings` (целое число) или null, если текст вписать нельзя
 */
function calcFontVariationSettings(container, str, min, max) {
    const textWrapper = document.createElement("span");
    textWrapper.innerHTML = str;
    textWrapper.style.fontVariationSettings = `'wdth' ${max}`;
    textWrapper.style.display = "block";
    // textWrapper.style.width = "auto";
    container.style.overflow = "auto";
    container.style.display = "block";
    container.appendChild(textWrapper);

    let observer = new IntersectionObserver((entries) => {
        console.log(entries);
        // console.log(entries[0].target);
        // console.log(entries[0].time);
        if (entries[0].boundingClientRect) {
            console.log("Прокручено 100px");
        } else {
            console.log("Прокручено менее 100px");
        }
    });
    observer.observe(textWrapper, { root: container, threshold: 1.0 });
}

document.fonts.onloadingdone = () => {
    console.log("Font loading complete");
    calcFontVariationSettings(document.getElementById("container"), `DEMO`, 0, 149);
};
