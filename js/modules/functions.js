import * as elem from './elements.js'

let i = 0;
let menuDeploy = false;
let htmlAndCssDeploy = true;
let javascriptDeploy = true;
let pythonDeploy = true;
let otherDeploy = true;

export const checkScreenWidth = () => {
    if (innerWidth >= 1024) {
        for (i = 0; i < elem.subMenus.length ;i++) {
            elem.subMenus[i].style.display='inline-block';
        }
    } else {
        if (!menuDeploy) {
            for (i = 0; i < elem.subMenus.length ;i++) {
                elem.subMenus[i].style.display='none';
            } 
        } else {
            for (i = 0; i < elem.subMenus.length ;i++) {
                elem.subMenus[i].style.display='block';
            } 
        }
    }
}

export const htmlAndCssCollapse = () => {

    if (htmlAndCssDeploy) {
        // HIDE COURSES
        // subMenus= document.getElementsByClassName('html-css-course')
        for (i = 0; i < elem.courseListHtmlAndCss.length ;i++) {
            elem.courseListHtmlAndCss[i].style.display='none';
        }
        elem.htmlAndCssArrow.style.transform='rotate(0deg)'
        htmlAndCssDeploy=false;
    } else {
        // SHOW COURSES
        // subMenus= document.getElementsByClassName('html-css-course')
        for (i = 0; i < elem.courseListHtmlAndCss.length ;i++) {
            elem.courseListHtmlAndCss[i].style.display='block';
        }
        elem.htmlAndCssArrow.style.transform='rotate(180deg)'
        htmlAndCssDeploy=true;
    }

}

export const javascriptCollapse = () => {

    if (javascriptDeploy) {
        // HIDE COURSES
        // subMenus= document.getElementsByClassName('js-course')
        for (i = 0; i < elem.courseListJs.length ;i++) {
            elem.courseListJs[i].style.display='none';
            // subMenus[i].style.display='none';
        }
        elem.jsArrow.style.transform='rotate(0deg)'
        javascriptDeploy=false;
    } else {
        // SHOW COURSES
        // subMenus= document.getElementsByClassName('js-course')
        for (i = 0; i < elem.courseListJs.length ;i++) {
            elem.courseListJs[i].style.display='block';
        }
        elem.jsArrow.style.transform='rotate(180deg)'
        javascriptDeploy=true;
    }

}

export const pythonCollapse = () => {

    if (pythonDeploy) {
        // HIDE COURSES
        // subMenus= document.getElementsByClassName('python-course')
        for (i = 0; i < elem.courseListPython.length ;i++) {
            elem.courseListPython[i].style.display='none';
        }
        elem.pythonArrow.style.transform='rotate(0deg)'
        pythonDeploy=false;
    } else {
        // SHOW COURSES
        // subMenus= document.getElementsByClassName('python-course')
        for (i = 0; i < elem.courseListPython.length ;i++) {
            elem.courseListPython[i].style.display='block';
        }
        elem.pythonArrow.style.transform='rotate(180deg)'
        pythonDeploy=true;
    }

}

export const otherCollapse = () => {

    if (otherDeploy) {
        // HIDE COURSES
        // subMenus= document.getElementsByClassName('other-course')
        for (i = 0; i < elem.courseListOthers.length ;i++) {
            elem.courseListOthers[i].style.display='none';
        }
        elem.otherArrow.style.transform='rotate(0deg)'
        otherDeploy=false;
    } else {
        // SHOW COURSES
        // subMenus= document.getElementsByClassName('other-course')
        for (i = 0; i < elem.courseListOthers.length ;i++) {
            elem.courseListOthers[i].style.display='block';
        }
        elem.otherArrow.style.transform='rotate(180deg)'
        otherDeploy=true;
    }

}

export const hideMenu = () => {
    console.log('Hiding menu')
    if (elem.menuBtn.style.display != 'none' && innerWidth<1024)  {
        if (menuDeploy) {
            // Code to hide menu
            for (i = 0; i < elem.subMenus.length ;i++) {
                elem.subMenus[i].style.display='none';
            }
            elem.menuArrow.style.transform='rotate(0deg)'
            menuDeploy=false;
        } 
    }
}

export const clickMenuButton = () => {
    if (elem.menuBtn.style.display != 'none' && innerWidth<1024) {
        if (menuDeploy) {
            // Code to hide menu
            for (i = 0; i < elem.subMenus.length ;i++) {
                elem.subMenus[i].style.display='none';
            }
            elem.menuArrow.style.transform='rotate(0deg)'
            menuDeploy=false;
        } else {
            // Code to show menu
            for (i = 0; i < elem.subMenus.length ;i++) {
                elem.subMenus[i].style.display='block';
            }
            elem.menuArrow.style.transform='rotate(180deg)'
            menuDeploy=true;
        }
    }
}