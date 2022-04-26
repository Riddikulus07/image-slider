let pics = [
    '1.png', '2.png', '3.png','4.png'
]
let i = 0;
let a= document.getElementById('slider');
a.style.background = `url(${pics[i]})`
let pts = document.querySelectorAll('.point');
pts.forEach(function(point){
    point.addEventListener('click', function(e){
                if (e.target.id === "left"){
            i--;
            if (i < 0){
                i = pics.length -1;
            }
            slider.style.background = `url(${pics[i]})`;
        } else if (e.target.id === "right") {
            i++;
            if (i >= pics.length ){
                i = 0;
            }
            slider.style.background = `url(${pics[i]})`;
        }
    })
});
    