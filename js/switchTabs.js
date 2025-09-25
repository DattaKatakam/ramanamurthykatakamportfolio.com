var tabsL = document.getElementsByClassName("tabs");
var tabsCont = document.getElementsByClassName("skillBody");

function switchTabs(tName){
    for(tabI of tabsL){
        tabI.classList.remove("active-link");
    }
    for(tabC of tabsCont){
        tabC.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tName).classList.add("active-tab");
}