const cardContainter = document.querySelector('.card-section-container');

function createCard(cardSection, imgSrc) {
    //Card parent container
    const card = document.createElement('div');
    card.classList.add(`card`);
    card.classList.add(`${cardSection}`);

    //Card top content starts 

    //Wrapper for top contents (image and hide result button)
    const topContentWrapper = document.createElement('div');
    topContentWrapper.classList.add('card-top-content');
    topContentWrapper.style.visibility = 'hidden';
    
    //Top content image
    const topContentImage = document.createElement('div');
    topContentImage.classList.add('image');
    topContentImage.style.background = `url(${imgSrc}) no-repeat`;
    topContentImage.style.backgroundSize = 'cover';
    topContentWrapper.appendChild(topContentImage);
    
    //Wrapper for hide result button
    const topHideContentWrapper = document.createElement('div');
    topHideContentWrapper.classList.add('hide-content-wrapper');
    topContentWrapper.appendChild(topHideContentWrapper);
    
    //Hide result button
    const hideResultButton = document.createElement('button');
    hideResultButton.classList.add('hide-result-btn');
    hideResultButton.innerText = 'Hide Result'
    
    hideResultButton.addEventListener('click', () => {
        topContentWrapper.style.visibility = 'hidden'
    });

    topHideContentWrapper.appendChild(hideResultButton);

    //Card top content ends 

    //Card bottom content starts 
    const bottomContent = document.createElement('div');
    bottomContent.classList.add('card-bottom-content');
    bottomContent.innerText = `${cardSection}`;

    bottomContent.addEventListener('click', () => {
        topContentWrapper.style.visibility = 'visible';
    })

    //Card bottom content starts ends

    card.appendChild(topContentWrapper);
    card.appendChild(bottomContent);

    return card;
}

const cardA = createCard('A', './assets/css-letter-a.png');
const cardB = createCard('B', './assets/css-letter-b.png');
const cardC =createCard('C', './assets/css-letter-c.png');

cardContainter.appendChild(cardA);
cardContainter.appendChild(cardB);
cardContainter.appendChild(cardC);

