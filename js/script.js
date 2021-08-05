import * as elem from './modules/elements.js'
import * as func from './modules/functions.js'

export const header = document.getElementsByTagName('header')
export const main = document.getElementsByTagName('main')
export const footer = document.getElementsByTagName('footer')


// GLOBAL EVENT LISTENERS
{
    addEventListener("load", func.checkScreenWidth)
    addEventListener("resize", func.checkScreenWidth)
    elem.menuBtnTrigger.addEventListener("click", func.clickMenuButton)
    header[0].addEventListener("click", func.hideMenu)
    main[0].addEventListener("click", func.hideMenu)
    footer[0].addEventListener("click", func.hideMenu)
}


// EVENT LISTENERS FOR 'certificates.html'
if (location.pathname=="/html/certificates.html") {
    elem.htmlCssCourseList.addEventListener("click", func.htmlAndCssCollapse)
    elem.jsCourseList.addEventListener("click", func.javascriptCollapse)
    elem.pythonCourseList.addEventListener("click", func.pythonCollapse)
    elem.otherCourseList.addEventListener("click", func.otherCollapse)
}

// EVENT LISTENERS FOR 'contact.html'
if (location.pathname=="/html/contact.html") {
    elem.btnSendEmail.addEventListener("click", ()=>{
        let name = document.getElementById('name-input').value
        let message = document.getElementById('message-input').value
        console.log(name)
        console.log(message)
        window.location.href = `mailto:arnaldo10cisne@gmail.com?subject=${name}&body=${func.formatEmailMessage(message)}`;
    })
}