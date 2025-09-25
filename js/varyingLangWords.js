let wert = document.querySelectorAll(".wort");
wert.forEach((w) => {
    let lets = w.textContent.split("");
    w.textContent="";
    lets.forEach((l) => {
        let span = document.createElement("span");
        span.textContent = l;
        span.className = "letter";
        w.append(span);
    });
});

let currentIndex = 0;
let allIndex = wert.length - 1;
wert[currentIndex].style.opacity = "1";

let changeText = () => {
    let cW = wert[currentIndex];
    let nW = currentIndex === allIndex? wert[0] : wert[currentIndex+1];
    Array.from(cW.children).forEach((lett, i) =>{
        setTimeout(()=>{
            lett.className = "letter out";
        }, i*50);
    });
    nW.style.opacity = "1";
    Array.from(nW.children).forEach((lett, i)=>{
        lett.className = "letter onway";
        setTimeout(()=>{
            lett.className = "letter in";
        }, 250 + i*50);
    });
    currentIndex = currentIndex === allIndex?0:currentIndex+1;
}
changeText();
setInterval(changeText, 2000);