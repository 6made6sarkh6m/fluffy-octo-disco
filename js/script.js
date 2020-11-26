window.addEventListener('DOMContentLoaded',()=>{



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

});