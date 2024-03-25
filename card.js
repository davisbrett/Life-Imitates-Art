function toggleCards() {

    var vwEquivalent = window.innerWidth;
    console.log(vwEquivalent)
    if (window.scrollY > 500) {
        document.getElementById('scrollToDiscover').classList.add('invisible');
    } else {
        document.getElementById('scrollToDiscover').classList.remove('invisible');
    }

}

window.addEventListener('scroll', toggleCards);


function handleCardVisibility(imageId, cardId) {
    var viewportWidth = window.innerWidth;
    var image = document.getElementById(imageId);
    var card = document.getElementById(cardId);

    var rect = image.getBoundingClientRect();
    var leftX = rect.left;
    var rightX = rect.right;

    var threshold = viewportWidth / 2;

    if (leftX < threshold && rightX > threshold) {
        card.classList.add('visible');
    } else {
        card.classList.remove('visible');
    }
}

window.addEventListener('scroll', function () {
    handleCardVisibility('footbridge-life', 'footbridgeCard');
    handleCardVisibility('cafe-life', 'cafeCard');
    handleCardVisibility('horse-life', 'horseCard');
    handleCardVisibility('fruit-life', 'fruitCard');
    handleCardVisibility('koi-life', 'koiCard');
    handleCardVisibility('couple-life', 'coupleCard');
    handleCardVisibility('americangothic-life', 'americangothicCard');
    handleCardVisibility('bathingman-life', 'bathingmanCard');
    handleCardVisibility('puppy-life', 'puppyCard');
    handleCardVisibility('head-life', 'headCard');
    handleCardVisibility('twowoman-life', 'twowomanCard');
    handleCardVisibility('tebow-life', 'tebowCard');
    handleCardVisibility('sailboat-life', 'sailboatCard');
    handleCardVisibility('vangoghmother-life', 'vangoghmotherCard');
    handleCardVisibility('tightrope-life', 'tightropeCard');
    handleCardVisibility('voldemort-life', 'voldemortCard');
    handleCardVisibility('wave-life', 'waveCard');
    handleCardVisibility('woman-life', 'womanCard');
    handleCardVisibility('hyacinth-life', 'hyacinthCard');
});
