const subMenus = document.getElementsByClassName('menu--item')
const menuArrow = document.getElementById('menu-arrow')
const menuBtn = document.getElementById("menu-button")

let menuDeploy = false;
let htmlAndCssDeploy = true;
let javascriptDeploy = true;
let pythonDeploy = true;
let otherDeploy = true;

const checkScreenWidth = () => {
    if (innerWidth >= 1024) {
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='inline-block';
        }
    } else {
        if (!menuDeploy) {
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='none';
            } 
        } else {
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='block';
            } 
        }
    }
}

addEventListener("load", checkScreenWidth)

addEventListener("resize", checkScreenWidth)

function clickMenuButton () {
    if (menuBtn.style.display != 'none' && innerWidth<1024) {
        if (menuDeploy) {
            // Code to hide menu
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='none';
            }
            menuArrow.style.transform='rotate(0deg)'
            menuDeploy=false;
        } else {
            // Code to show menu
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='block';
            }
            menuArrow.style.transform='rotate(180deg)'
            menuDeploy=true;
        }
    }
}

function hideMenu() {
    if (menuBtn.style.display != 'none' && innerWidth<1024)  {
        if (menuDeploy) {
            // Code to hide menu
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='none';
            }
            menuArrow.style.transform='rotate(0deg)'
            menuDeploy=false;
        } 
    }
}

function htmlAndCssCollapse () {

    if (htmlAndCssDeploy) {
        // HIDE COURSES
        subMenus= document.getElementsByClassName('html-css-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='none';
        }
        document.getElementById('html-css-arrow').style.transform='rotate(0deg)'
        htmlAndCssDeploy=false;
    } else {
        // SHOW COURSES
        subMenus= document.getElementsByClassName('html-css-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='block';
        }
        document.getElementById('html-css-arrow').style.transform='rotate(180deg)'
        htmlAndCssDeploy=true;
    }

}

function javascriptCollapse () {

    if (javascriptDeploy) {
        // HIDE COURSES
        subMenus= document.getElementsByClassName('js-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='none';
        }
        document.getElementById('js-arrow').style.transform='rotate(0deg)'
        javascriptDeploy=false;
    } else {
        // SHOW COURSES
        subMenus= document.getElementsByClassName('js-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='block';
        }
        document.getElementById('js-arrow').style.transform='rotate(180deg)'
        javascriptDeploy=true;
    }

}

function pythonCollapse () {

    if (pythonDeploy) {
        // HIDE COURSES
        subMenus= document.getElementsByClassName('python-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='none';
        }
        document.getElementById('python-arrow').style.transform='rotate(0deg)'
        pythonDeploy=false;
    } else {
        // SHOW COURSES
        subMenus= document.getElementsByClassName('python-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='block';
        }
        document.getElementById('python-arrow').style.transform='rotate(180deg)'
        pythonDeploy=true;
    }

}

function otherCollapse () {

    if (otherDeploy) {
        // HIDE COURSES
        subMenus= document.getElementsByClassName('other-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='none';
        }
        document.getElementById('other-arrow').style.transform='rotate(0deg)'
        otherDeploy=false;
    } else {
        // SHOW COURSES
        subMenus= document.getElementsByClassName('other-course')
        for (i = 0; i < subMenus.length ;i++) {
            subMenus[i].style.display='block';
        }
        document.getElementById('other-arrow').style.transform='rotate(180deg)'
        otherDeploy=true;
    }

}