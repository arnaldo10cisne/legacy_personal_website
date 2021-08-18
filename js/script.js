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

        let tempParams = {
            from_name: document.getElementById('name-input').value,
            to_name: 'Arnaldo',
            message: document.getElementById('message-input').value,
        };
        let sentStatus = null

        emailjs.send('service_c5sznik','template_jwv5qsi', tempParams)
        .then(function(res){
            sentStatus = res.status
            console.log('Email response: ', res.status)
            setTimeout(() => {
                
                if (sentStatus == 200) {
                    alert('Email sent successfully!')
                } else {
                    alert('There was an issue sending the email, try again later')
                }

                document.getElementById('name-input').value = ""
                document.getElementById('message-input').value = ""

            }, 0);
        })

        

    })
}