window.addEventListener('DOMContentLoaded',()=>{


    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    
        function hideTabContent(){
            tabsContent.forEach(data=>{
                data.classList.add('hide');
                data.classList.remove('show', 'fade');
                tabs.forEach(data=>{
                    data.classList.remove('tabheader__item_active');
                })
            });
        }
        

        function showTabContent(i = 0){
            tabsContent[i].classList.add('show','fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');

        }

        hideTabContent();
        showTabContent();
        
        tabsParent.addEventListener('click',(e)=>{
            const target = e.target;
            if(target && target.classList.contains('tabheader__item')){
                tabs.forEach((data, i)=>{
                    if(target===data){
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        });
        //Timer
        const deadline = '2020-12-31';

        function getTimeRemaining(deadline){
            const time  = Date.parse(deadline) - Date.parse(new Date()),
                    days = Math.floor(time/(1000 * 60 * 60 * 24)),
                    hours = Math.floor((time/(1000 * 60 * 60) % 24)),
                    minutes =  Math.floor((time/1000 / 60 ) % 60),
                    seconds =  Math.floor((time/1000) % 60);  

                    return {
                        'total': time,
                        'days' : days,
                        'hours': hours,
                        'minutes': minutes,
                        'seconds': seconds
                    }
        }
        function getZero(num){
            if(num>=0 && num<10){
                return `0${num}`;
            }else{
                return num;
            }
        }

        function setClock(selector,deadline){
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock,1000);
            
            updateClock();
            
            function updateClock(){
                const time = getTimeRemaining(deadline);

                days.innerHTML = getZero(time.days);
                hours.innerHTML = getZero(time.hours);
                minutes.innerHTML = getZero(time.minutes);
                seconds.innerHTML = getZero(time.seconds);


                if(time.total <=0){
                    clearInterval(timeInterval);
                }
            }

        }
        setClock('.timer',deadline);

    //Modal window

    const modalShow = document.querySelectorAll('[data-modal]'),
          modalWndw = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]')
     function showModal(){
        modalWndw.classList.add('show');
        modalWndw.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        //clearInterval(modalTimerId);
    
        }
    
     function closeModal(){
        modalWndw.classList.remove('show');
        modalWndw.classList.add('hide');
        document.body.style.overflow = 'scroll';
    
        }       

          modalShow.forEach(btn=>{
              btn.addEventListener('click', showModal)
          })

    modalClose.addEventListener('click', closeModal)

    

    //const modalTimerId = setTimeout(showModal, 10000);
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight>=document.documentElement.scrollHeight){
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
            
        }
    }
    window.addEventListener('scroll',showModalByScroll)

    //Cards

    class Card {
        constructor(src,alt,title, description, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer  = 399;
            this.parentSelector = document.querySelector(parentSelector);
            this.changeToUAH();
        }
        changeToUAH(){
            this.price = this.price*this.transfer;

        }
        render(){
            const element = document.createElement('div');
            element.innerHTML = ` <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>`;
        this.parentSelector.append(element);
        }
    }
    // const div = new Card();
    // div.render();

    new Card(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        550,
        ".menu .container"
    ).render();

    new Card(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        550,
        ".menu .container"
    ).render();
    
    new Card(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        550,
        ".menu .container"
    ).render();
    
});