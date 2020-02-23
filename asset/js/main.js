$(window).scroll(() => {
    var scrollTop = $(this).scrollTop();
    
    $('#slide2 ').css('top',(scrollTop / -5) + 'px')
    $('#slide4 ').css('top',-(scrollTop / 6) + 'px')
})


function navMobile()
{
    var oppenButton = document.querySelector('.menu_mobile');
    var logo = document.querySelector('.logo');
    var menu = document.querySelector('.mobile');
    var close = document.querySelector('.close_menu');

    oppenButton.addEventListener('click', () => {
        oppenButton.style.display = 'none';
        logo.style.display = 'none';
        menu.style.display = 'block';
        close.style.display = 'block';
    })

    close.addEventListener('click', () => {
        oppenButton.style.display = 'block'; 
        logo.style.display = 'block';
        menu.style.display = 'none';
        close.style.display = 'none';
    })
}

navMobile();