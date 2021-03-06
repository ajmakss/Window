function modal() {
   function  bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverLay = true) {
    const  trigger = document.querySelectorAll(triggerSelector),
           modal = document.querySelector(modalSelector),
           close = document.querySelector(closeSelector),
           window = document.querySelectorAll('[data-modal]'),
           scroll = calcScroll();

    trigger.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target) {
                e.preventDefault();
            }

            window.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            // document.body.classList.add('modal-open')
        });
    })
    
    close.addEventListener('click', function(){
      
        window.forEach(item => {
            item.style.display = 'none';
        });

        modal.style.display = 'none';
         document.body.style.overflow = '';
         document.body.style.marginRight = `0px`;
        // document.body.classList.remove('modal-open')

        
   });

   modal.addEventListener('click', (e) => {
    if(e.target === modal && closeClickOverLay) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove('modal-open')
    }
   });
}
    function showModal(modalSelector, timer) {
    setTimeout(function() {
        document.querySelector(modalSelector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    },timer);


    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWith = div.offsetHeight - div.clientWidth;
        div.remove();

        return scrollWith;
    }
    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link','.popup','.popup .popup_close');
    // showModal('.popup', 60000);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modal;