let menuDeploy = false;

let htmlAndCssDeploy = true;
let javascriptDeploy = true;
let pythonDeploy = true;
let otherDeploy = true;

let subMenus = []

window.onload = function() {            
    function checkScreenWidth() {
        if (window.innerWidth >= 1024) {
            subMenus= document.getElementsByClassName('menu--item')
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='inline-block';
            }
        } else {
            if (!menuDeploy) {
                subMenus= document.getElementsByClassName('menu--item')
                for (i = 0; i < subMenus.length ;i++) {
                    subMenus[i].style.display='none';
                } 
            } else {
                subMenus= document.getElementsByClassName('menu--item')
                for (i = 0; i < subMenus.length ;i++) {
                    subMenus[i].style.display='block';
                } 
            }
        }
    }
    setInterval(checkScreenWidth, 1);
}

function clickMenuButton () {
    if (document.getElementById("menu-button").style.display != 'none' && window.innerWidth<1024) {
        if (menuDeploy) {
            // Code to hide menu
            subMenus= document.getElementsByClassName('menu--item')
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='none';
            }
            document.getElementById('menu-arrow').style.transform='rotate(0deg)'
            menuDeploy=false;
        } else {
            // Code to show menu
            subMenus= document.getElementsByClassName('menu--item')
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='block';
            }
            document.getElementById('menu-arrow').style.transform='rotate(180deg)'
            menuDeploy=true;
        }
    }
}

function hideMenu() {
    if (document.getElementById("menu-button").style.display != 'none' && window.innerWidth<1024)  {
        if (menuDeploy) {
            // Code to hide menu
            subMenus= document.getElementsByClassName('menu--item')
            for (i = 0; i < subMenus.length ;i++) {
                subMenus[i].style.display='none';
            }
            document.getElementById('menu-arrow').style.transform='rotate(0deg)'
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