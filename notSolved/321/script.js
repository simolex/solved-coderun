/***
 * @param container {Node} ссылка на DOM-node, в которую нужно вписать строку `str`
 * @param str {string} строка, которую необходимо вписать. Максимальная длина равняется 100 символам
 * @param min {number} минимальное значение `font-variation-settings` (целое число)
 * @param max {number} максимальное значение `font-variation-settings` (целое число)
 * @return {number | null} искомое значение `font-variation-settings` (целое число) или null, если текст вписать нельзя
 */
function calcFontVariationSettings(container, str, min, max) {
    if (max === undefined || min === undefined || str === undefined) return null;

    min = +min;
    max = +max;
    if (max < 1 || str.length === 0 || !container) return null;
    const textWrapper = document.createElement("span");
    textWrapper.textContent = str;
    textWrapper.style.display = "block";
    textWrapper.style.width = "fit-content";

    // textWrapper.visibility = "hidden";
    // textWrapper.style.whiteSpace = "nowrap";
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
        let wdth = rect.width - Parent.getWidth();
        let hght = rect.height <= Parent.getHeight();

        return { wdth, hght };
    };

    if (min < 1) min = 1;
    if (max > 150) max = 150;
    let minInsize, maxInsize;

    textWrapper.style.fontVariationSettings = `'wdth' ${min}`;
    minInsize = isInsize(textWrapper);

    if (!minInsize.hght) {
        container.removeChild(textWrapper);
        return null;
    }
    if (minInsize.wdth > 0) {
        container.removeChild(textWrapper);
        return null;
    }

    textWrapper.style.fontVariationSettings = `'wdth' ${max}`;
    maxInsize = isInsize(textWrapper);

    if (maxInsize.wdth < -0.2) {
        container.removeChild(textWrapper);
        return null;
    }

    // console.log(minInsize, maxInsize);

    let current = max;
    let currentMin = min;
    let currentMax = max;
    do {
        current = currentMin + Math.floor((currentMax - currentMin) / 1.99);
        textWrapper.style.fontVariationSettings = `'wdth' ${current}`;

        currentInsize = isInsize(textWrapper);
        if (currentInsize.wdth < 0) {
            minInsize = currentInsize;
            currentMin = current;
        } else {
            maxInsize = currentInsize;
            currentMax = current;
        }
    } while (
        Math.abs(Math.abs(minInsize.wdth) + Math.abs(maxInsize.wdth)) > 0.1 &&
        Math.floor((currentMax - currentMin) / 1.99) !== 0
    );

    container.removeChild(textWrapper);
    container.appendChild(document.createTextNode(str));
    container.style.fontVariationSettings = `'wdth' ${current}`;

    return current;
}

document.fonts.onloadingdone = () => {
    console.log("Font loading complete");
    console.log(calcFontVariationSettings(document.getElementById("container"), `DEMO`, 0, 150));
};
