let menuDeploy = false;
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