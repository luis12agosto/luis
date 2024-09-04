var cardInner = document.querySelector('.card-inner');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var target = e.target;
    
    var rect = target.getBoundingClientRect();
    var left = rect.left;
    var right = rect.right;
    var width = rect.width;
    
    if (x - left < width / 2) {
        cardInner.style.transform = 'rotateY(0deg)';
    } else if (right - x < width / 2) {
        cardInner.style.transform = 'rotateY(180deg)';
    }
});