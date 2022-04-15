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

            textElem.textContent = `${dataObj.data[index].name}`;

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

            const favIcon = document.createElement('div');

            favIcon.id = 'favIcon';

            btnsDiv.append(favIcon);

            favIcon.innerHTML = `<svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92153e-05C11.2564 -0.0595561 13.4775 0.854693 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29ZM8.99399 2.53107C7.37429 2.49605 5.78587 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L17.0001 25.9437L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107Z" fill="#E13B3F"/>
            `;

        }
    }
}