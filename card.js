function renderCard() {
    let dataObj;
    fetch('https://raw.githubusercontent.com/fd-freshjs/serve-json/main/mebel.json')
        .then(response => response.json())
        .then(data => {
            dataObj = data
            render()
        });

    function render() {
        for (let index = 0; index < 8; index++) {

            const card = document.createElement('div');

            card.id = 'card';

            const cardImg = document.createElement('div');

            cardImg.id = 'cardImg';

            document.body.append(card);

            card.append(cardImg);

            const img = document.createElement('img');

            cardImg.append(img);

            img.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${dataObj.data[index].code}.png`;

            const textElem = document.createElement('h3');

            textElem.textContent = 'Мори кровать КРМ 900.1';

            textElem.id = 'textElem';

            card.append(textElem);

            //------------------------------------------------------

            const divSquares = document.createElement('div');

            divSquares.id = 'divSquares';

            card.append(divSquares);

            const square1 = document.createElement('div');

            square1.id = 'square1';

            const square2 = document.createElement('div');

            square2.id = 'square2';

            const square3 = document.createElement('div');

            square3.id = 'square3';

            divSquares.append(square1, square2, square3);

            square1.style.background = `${dataObj.data[index].colors[0]}`;

            square2.style.background = `${dataObj.data[index].colors[1]}`;

            square3.style.background = `${dataObj.data[index].colors[2]}`;

            //----------------------------------------------------------

            function line() {
                const line = document.createElement('div');

                line.id = 'line';

                card.append(line);


                line.style.cssText = `width: 286px; height: 1px; background-color: #E2E2E2; margin-top: 16px; margin-left: 37px`
            }

            line()

            //--------------------------------------------------------

            const priceDiv = document.createElement('div');

            priceDiv.id = 'priceDiv';

            card.append(priceDiv);

            const oldPrice = document.createElement('p');

            oldPrice.id = 'oldPrice';

            oldPrice.textContent = `${dataObj.data[index].price.old} руб.`

            const price = document.createElement('p');

            price.id = 'price'

            price.textContent = `${dataObj.data[index].price.current} руб.`

            priceDiv.append(oldPrice, price);

            line()

            //------------------------------------------------

            const btnsDiv = document.createElement('div');

            btnsDiv.id = 'btnsDiv';

            card.append(btnsDiv);

            function btn() {

                const btn = document.createElement('a');

                btn.id = 'btn';

                btn.textContent = 'КУПИТЬ';

                card.append(btn);

                btn.href = `#`
            }

            btn()

            const heart = document.createElement('div');

            heart.id = 'heart';

            btnsDiv.append(heart);

            heart.innerHTML = `<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.0001 29.0001C16.6794 29.0067 16.3648 28.8765 16.098 28.6268L2.6297 15.2563C-0.87494 11.7697 -0.87494 6.10004 2.6297 2.6008C4.51207 0.842534 6.73304 -0.0650413 8.99399 0.000102855C11.2564 -0.059434 13.4775 0.854815 15.3583 2.61978L17.0001 4.24601L18.6419 2.61978C22.1511 -0.866797 27.8613 -0.866797 31.3705 2.61978C34.8796 6.10637 34.8796 11.7697 31.3705 15.2753L17.9067 28.6268C17.6383 28.8767 17.3222 29.0068 17.0001 29.0001V29.0001ZM8.99399 2.5312C7.37429 2.49618 5.78587 3.15873 4.44292 4.42952C1.93058 6.92264 1.93058 10.9787 4.44292 13.4718L17.0001 25.9438L29.5618 13.4592C32.0696 10.9661 32.0696 6.90999 29.5618 4.41686C27.054 1.92373 22.9675 1.89842 20.4506 4.42952L17.9067 6.96061C17.6378 7.20392 17.3246 7.33332 17.0046 7.33332C16.6846 7.33332 16.3714 7.20392 16.1025 6.96061L13.5315 4.42952C12.1923 3.16282 10.6091 2.50047 8.99399 2.5312V2.5312Z" fill="#E13B3F"/>
    </svg>
    `;

        }
    }
}