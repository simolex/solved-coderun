// type Video = {
//     width: number, // Ширина видео в пикселях
//     height: number, // Высота видео в пикселях
//     x: number, // Положение левого верхнего угла видео по x относительно верхнего левого угла экрана
//     y: number // Положение левого верхнего угла видео по y относительно верхнего левого угла экрана
// };

/**
 * @param n - количество участников
 * @param width - ширина экрана каждого участника в пикселях
 * @param height - высота экрана каждого участника в пикселях
 */
// module.exports = function (n: number, width: number, height: number): Frame[] {};

module.exports = function (n, width, height) {
    const columnCount = Math.ceil(Math.sqrt(n));
    const rowCount = Math.ceil(n / columnCount);

    const frameWidth = Math.round(width / columnCount);
    const frameHeight = Math.round((frameWidth * height) / width);

    const paddingTop = Math.round((height - frameHeight * rowCount) / 2);
    const partialFrameInLine = n % columnCount;
    const marginLeft = Math.round((width - frameWidth * partialFrameInLine) / 2);

    const frames = [];

    const addFrame = (x, y, width, height) => frames.push({ x, y, width, height });

    for (let i = 0; i < rowCount; i++) {
        const k = partialFrameInLine > 0 && i == 0 ? partialFrameInLine : columnCount;
        for (let j = 0; j < k; j++) {
            let x = (partialFrameInLine > 0 && i == 0 ? marginLeft : 0) + j * frameWidth;
            let y = paddingTop + i * frameHeight;

            addFrame(x, y, frameWidth, frameHeight);
        }
    }
    return frames;
};
