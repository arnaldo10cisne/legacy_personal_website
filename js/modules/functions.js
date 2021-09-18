import * as elem from './elements.js'

let i = 0;
let menuDeploy = false;
let htmlAndCssDeploy = true;
let javascriptDeploy = true;
let pythonDeploy = true;
let otherDeploy = true;

let htmlCssListHeight
let javascriptListHeight
let pythonListHeight
let otherListHeight

// The following event listener is made to allow the page to load entirely, and only when that happens, the HEIGHT variables are going to get assign, as well as the max-height value in the courses-list
addEventListener("load",()=>{
    setTimeout(() => {
        htmlCssListHeight = window.getComputedStyle(elem.htmlCssList, null).getPropertyValue("height");
        javascriptListHeight = window.getComputedStyle(elem.javascriptList, null).getPropertyValue("height");
        pythonListHeight = window.getComputedStyle(elem.pythonList, null).getPropertyValue("height");
        otherListHeight = window.getComputedStyle(elem.otherList, null).getPropertyValue("height");
        elem.htmlCssList.style.maxHeight = htmlCssListHeight
        elem.javascriptList.style.maxHeight = javascriptListHeight
        elem.pythonList.style.maxHeight = pythonListHeight
        elem.otherList.style.maxHeight = otherListHeight
    }, 100);
})

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
        elem.htmlCssList.style.maxHeight = '0px'
        elem.htmlAndCssArrow.style.transform='rotate(0deg)'
        htmlAndCssDeploy=false;
    } else {
        // SHOW COURSES
        elem.htmlCssList.style.maxHeight = htmlCssListHeight
        elem.htmlAndCssArrow.style.transform='rotate(180deg)'
        htmlAndCssDeploy=true;
    }

}

export const javascriptCollapse = () => {

    if (javascriptDeploy) {
        // HIDE COURSES
        elem.javascriptList.style.maxHeight = '0px'
        elem.jsArrow.style.transform='rotate(0deg)'
        javascriptDeploy=false;
        
    } else {
        // SHOW COURSES
        elem.javascriptList.style.maxHeight = javascriptListHeight
        elem.jsArrow.style.transform='rotate(180deg)'
        javascriptDeploy=true;
        
    }

}

export const pythonCollapse = () => {

    if (pythonDeploy) {
        // HIDE COURSES
        elem.pythonList.style.maxHeight = '0px'
        elem.pythonArrow.style.transform='rotate(0deg)'
        pythonDeploy=false;
    } else {
        // SHOW COURSES
        elem.pythonList.style.maxHeight = pythonListHeight
        elem.pythonArrow.style.transform='rotate(180deg)'
        pythonDeploy=true;
    }
}

export const otherCollapse = () => {

    if (otherDeploy) {
        // HIDE COURSES
        elem.otherList.style.maxHeight = '0px'
        elem.otherArrow.style.transform='rotate(0deg)'
        otherDeploy=false;
    } else {
        // SHOW COURSES
        elem.otherList.style.maxHeight = otherListHeight
        elem.otherArrow.style.transform='rotate(180deg)'
        otherDeploy=true;
    }
}

export const hideMenu = () => {
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

export const formatEmailMessage = msg => {
    let finalMsg = ""
    for (let letter of msg) {
        if (letter!=" ") {
            finalMsg = finalMsg + letter
        } else {
            finalMsg = finalMsg + '%20'
        }
    }
    return finalMsg
}

export const curtainFadeEffect = bool => {
    if (bool) {
        //Fade in
        console.log('fade in')
        var op = 0.1
        const timer = setInterval(() => {
            if (op >= 1) {
                clearInterval(timer)
            }
            elem.curtain.style.opacity = op
            elem.curtain.style.filter = 'alpha(opacity' + op * 100 + ')'
            op = op + 0.1
        }, 10)
    } else {
        //Fade out
        console.log('fade out')
        var op = 1
        const timer = setInterval(() => {
            if (op <= 0.1) {
                clearInterval(timer)
                elem.curtain.style.display = 'none'
            }
            elem.curtain.style.opacity = op
            elem.curtain.style.filter = 'alpha(opacity=' + op * 100 + ")"
            op = op - 0.05
        }, 10)
    }
}