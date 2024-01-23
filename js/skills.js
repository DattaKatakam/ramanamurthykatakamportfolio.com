const circles = document.querySelectorAll('.circle');

circles.forEach(ele => {
    var dots = ele.getAttribute("data-dots");
    var mark = ele.getAttribute("data-percent");
    var per = Math.floor(dots*mark/100);
    var rota = 360 / dots;
    var points = "";

    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rota}deg"></div>`
    }
    ele.innerHTML = points;

    const pointsMark = ele.querySelectorAll('.points');
    for(let i = 0; i< per; i++){
        pointsMark[i].classList.add('mark');
    }
})