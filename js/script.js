let menuDeploy = false;
let subMenus = []

function clickMenuButton () {
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