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
        let reasonValue
        if (document.getElementById('radioOpt1').checked) {
            reasonValue = 'Greeting'
        } else if (document.getElementById('radioOpt2').checked) {
            reasonValue = 'Question'
        } else if (document.getElementById('radioOpt3').checked) {
            reasonValue = 'Job offer'
        }

        let tempParams = {
            from_name: document.getElementById('name-input').value,
            message: document.getElementById('message-input').value,
            reply_to: document.getElementById('reply-input').value,
            reason: reasonValue,
        };
        let sentStatus = null

        emailjs.send('service_c5sznik','template_jwv5qsi', tempParams)
        .then(function(res){
            sentStatus = res.status
            console.log('Email status: ', res.status)
            setTimeout(() => {
                
                if (sentStatus == 200) {
                    alert('Email sent successfully!')
                } else {
                    alert('There was an issue sending the email, try again later')
                }

                document.getElementById('name-input').value = ""
                document.getElementById('message-input').value = ""
                document.getElementById('reply-input').value = ""
                document.getElementById('radioOpt1').checked = true

            }, 0);
        })

        

    })
}