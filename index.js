window.onload = function () {

    const menu = document.querySelector('.menu')
    const btnIconMenu = document.querySelector('.icon-menu')

    btnIconMenu.addEventListener('click', function () {
        menu.classList.toggle('menu-show')
  
    });

    let last_known_scroll_position = 0;
    let ticking = 0;
    function doScrol(scroll_pos) {
    
        if (window.innerWidth <= 770 && scroll_pos > 0) {
            headerBottom.classList.add("shaddowHeader");
        } else {
            headerBottom.classList.remove("shaddowHeader");
        }
    }
    let headerBottom = document.getElementById('header-bottom');
    window.addEventListener('scroll', function (e) {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function () {
                doScrol(last_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }
    });

}