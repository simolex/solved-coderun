/**
 * Сюда необходимо вставить разметку, которая будет находиться внутри тега <body>
 * ВАЖНО! тег <body> вставлять не надо, только то, что будет внутри (включая стили)
 */
const htmlFragment = `<style>
            * {
                box-sizing: border-box;
            }
            .card-section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 16px;
                gap: 16px;
                position: relative;
                width: 607px;
                height: 291px;
                background: #ffffff;
            }
            .title {
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 1.22;
                margin: 0;
            }
            .cards {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 0px;
                gap: 16px;

                width: 575px;
                height: 221px;
            }
            .card {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 16px;
                gap: 16px;
                width: 181px;
                height: 221px;
                background: #f8f8f8;
                border-radius: 24px;
            }
            .image {
                background: #c4c4c4;
                border-radius: 16px;
                width: 149px;
                height: 138px;
            }
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                gap: 10px;

                width: 149px;
                height: 35px;

                background: #ffffff;
                border-radius: 10px;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 1.25;
            }
        </style>
        <section class="card-section">
            <h1 class="title">Список товаров</h1>
            <div class="cards">
                <div class="card">
                    <div class="image"></div>
                    <button class="button">Купить</button>
                </div>
                <div class="card">
                    <div class="image"></div>
                    <button class="button">Купить</button>
                </div>
                <div class="card">
                    <div class="image"></div>
                    <button class="button">Купить</button>
                </div>
            </div>
        </section>`;

module.exports = function () {
    return htmlFragment;
};
