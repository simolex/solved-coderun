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
    textWrapper.style.display = "inline-block";
    container.appendChild(textWrapper);

    function ContainerSize(container) {
        let width, height;

        const contStyle = container.style;
        const rect = container.getBoundingClientRect();

        if (container.style.boxSizing === "border-box") {
            const borderWidth =
                parseFloat(contStyle.borderRightWidth) || 0 + parseFloat(contStyle.borderLeftWidth) || 0;
            const borderHeight =
                parseFloat(contStyle.borderBottomWidth) || 0 + parseFloat(contStyle.borderTopWidth) || 0;
            const paddingWidth = parseFloat(contStyle.paddingRight) || 0 + parseFloat(contStyle.paddingLeft) || 0;
            const paddingHeight = parseFloat(contStyle.paddingBottom) || 0 + parseFloat(contStyle.paddingTop) || 0;

            const wrapWidthSize = borderWidth + paddingWidth;
            const wrapHeigthSize = borderHeight + paddingHeight;

            width = rect.width - wrapWidthSize;
            height = rect.height - wrapHeigthSize;
        } else {
            width = contStyle.width;
            height = contStyle.height;
        }

        return { getWidth: () => parseFloat(width), getHeight: () => parseFloat(height) };
    }

    const Parent = ContainerSize(container);

    const isInsize = (el) => {
        const rect = el.getBoundingClientRect();

        console.log({ elW: rect.width, pW: Parent.getWidth(), elH: rect.height, pH: Parent.getHeight() });

        if (rect.width <= Parent.getWidth() && rect.height <= Parent.getHeight()) return true;
        return false;
    };
    // console.log((textWrapper.style.fontVariationSettings = `'wdth' ${4}`));
    // isInsize(textWrapper);
    // console.log((textWrapper.style.fontVariationSettings = `'wdth' ${150}`));
    // isInsize(textWrapper);

    let current = max;
    do {
        textWrapper.style.fontVariationSettings = `'wdth' ${current}`;
        current -= 1;
    } while (!isInsize(textWrapper) && current >= min - 1);
    current++;
    return current >= min ? current : false;
}

document.fonts.onloadingdone = () => {
    console.log("Font loading complete");
    console.log(calcFontVariationSettings(document.getElementById("container"), `DEMO DEMO DEMO  DEMO`, 0, 150));
};
