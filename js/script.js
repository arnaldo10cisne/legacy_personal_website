import * as elem from './modules/elements.js'
import * as func from './modules/functions.js'

export const header = document.getElementsByTagName('header')
export const main = document.getElementsByTagName('main')
export const footer = document.getElementsByTagName('footer')

// URL CLEANER
{
    if (location.host == 'www.arnaldocisneros.com') {
        let pathName = location.pathname
        if (pathName.endsWith('index.html')) {
            location.pathname = '/'
        } else if (pathName.endsWith('.html')) {
            pathName = pathName.substring(0, pathName.indexOf('.html'))
            location.pathname = pathName
        }
    }
}

// GLOBAL EVENT LISTENERS
{
    addEventListener("load", func.checkScreenWidth)
    addEventListener("resize", func.checkScreenWidth)
    elem.menuBtnTrigger.addEventListener("click", func.clickMenuButton)
    header[0].addEventListener("click", func.hideMenu)
    main[0].addEventListener("click", func.hideMenu)
    footer[0].addEventListener("click", func.hideMenu)
    elem.navBtnHome.addEventListener("click", ()=>{
        window.location.pathname="/index.html"
    })
    elem.navBtnBlog.addEventListener("click", ()=>{
        window.location.pathname="/blog.html"
    })
    elem.navBtnPortfolio.addEventListener("click", ()=>{
        window.location.pathname="/portfolio.html"
    })
    elem.navBtnAbout.addEventListener("click", ()=>{
        window.location.pathname="/about.html"
    })
    elem.navBtnContact.addEventListener("click", ()=>{
        window.location.pathname="/contact.html"
    })
}

// EVENT LISTENERS FOR 'certificates.html'
if (location.pathname=="/certificates.html" || location.pathname=="/certificates") {
    elem.htmlCssCourseList.addEventListener("click", func.htmlAndCssCollapse)
    elem.jsCourseList.addEventListener("click", func.javascriptCollapse)
    elem.pythonCourseList.addEventListener("click", func.pythonCollapse)
    elem.otherCourseList.addEventListener("click", func.otherCollapse)
}

// EVENT LISTENERS FOR 'contact.html'
if (location.pathname=="/contact.html" || location.pathname=="/contact") {
    
    const body = document.getElementById('body')
    const modalError = document.getElementById('modalError')
    const modalConfirmation = document.getElementById('modalConfirmation')
    const modalSuccess = document.getElementById('modalSuccess')
    const errorModalDescription = document.getElementById('errorModalDescription')
    const contactReasonModal = document.getElementById('contactReasonModal')
    const modalContinue = document.getElementById('modalContinue')
    const modal_back_button = document.getElementsByClassName('modal_back_button')

    let reasonValue
    let sentStatus = null
    let tempParams
    
    const sendEmail = function() {
            emailjs.send('service_c5sznik','template_jwv5qsi', tempParams)
            .then(function(res){
                sentStatus = res.status
                console.log('Email status: ', res.status)
                setTimeout(() => {
                    
                    if (sentStatus == 200) {
                        body.style.overflow = 'hidden'
                        modalSuccess.style.display = 'flex'
                    } else {
                        errorModalDescription.innerHTML = 'An unexpected problem occurred. Please try again later'
                        body.style.overflow = 'hidden'
                        modalError.style.display = 'flex'
                    }

                    document.getElementById('name-input').value = ""
                    document.getElementById('message-input').value = ""
                    document.getElementById('reply-input').value = ""
                    document.getElementById('radioOpt1').checked = true

                }, 0);
            })
    }

    modal_back_button.forEach(e => {
        e.addEventListener("click", ()=>{
            modalSuccess.style.display = 'none'
            modalConfirmation.style.display = 'none'
            modalError.style.display = 'none'
            body.style.overflow = 'visible'
        })
    });

    modalContinue.addEventListener("click", ()=>{
        modalConfirmation.style.display = 'none'
        sendEmail()
    })
    
    elem.btnSendEmail.addEventListener("click", ()=>{
        
        let validInfo = false

        //Asign email parameters
        {
            if (document.getElementById('radioOpt1').checked) {
                reasonValue = 'Greeting'
            } else if (document.getElementById('radioOpt2').checked) {
                reasonValue = 'Question'
            } else if (document.getElementById('radioOpt3').checked) {
                reasonValue = 'Job offer'
            }
    
            tempParams = {
                from_name: document.getElementById('name-input').value,
                message: document.getElementById('message-input').value,
                reply_to: document.getElementById('reply-input').value,
                reason: reasonValue,
            };
        }

        const validateEmail = email => {
            let noSpaces = true
            let atNumber = 0
            let atExist = false
            let numberOfDotsAfterAt = 0
            for (let character of email) {
                if (character==' ') {
                    noSpaces = false
                }
                if (character=='@') {
                    atExist = true
                    atNumber++
                }
                if (atExist) {
                    if (character=='.') {
                        numberOfDotsAfterAt++
                    }
                }
            }
            if (atExist && noSpaces && atNumber == 1 && numberOfDotsAfterAt == 1) {
                return true
            } else {
                return false
            }
        }

        if (document.getElementById('name-input').value.trim() == "" || document.getElementById('message-input').value.trim() == "") {
            errorModalDescription.innerHTML = 'Please enter both a name and a message'
            body.style.overflow = 'hidden'
            modalError.style.display = 'flex'
        } else {
            if (document.getElementById('reply-input').value.trim() != "" && validateEmail(document.getElementById('reply-input').value.trim()) == false) {
                errorModalDescription.innerHTML = 'Please enter a valid reply email'
                body.style.overflow = 'hidden'
                modalError.style.display = 'flex'
            } else {
                if (document.getElementById('radioOpt2').checked || document.getElementById('radioOpt3').checked) {
                    if (document.getElementById('reply-input').value.trim() == "") {
                        if (document.getElementById('radioOpt2').checked) contactReasonModal.innerHTML = "question"
                        if (document.getElementById('radioOpt3').checked) contactReasonModal.innerHTML = "job offer"
                        body.style.overflow = 'hidden'
                        modalConfirmation.style.display = 'flex'
                    } else {
                        validInfo = true
                    }
                } else {
                    validInfo = true
                }
            } 
        }

        if (validInfo) {
            sendEmail()
        }
        

    })
}