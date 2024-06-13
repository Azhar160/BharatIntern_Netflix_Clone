let faqitem = document.querySelectorAll('.faq-item');

faqitem.forEach(item => 
    {
        let title = item.querySelector('.faq-title');
        let content = item.querySelector('.faq-content');

        title.addEventListener('click' ,() =>
        {
            for(var i = 0; i <  faqitem.length; i++)
                {
                    if(faqitem[i] != item)
                        {
                            faqitem[i].classList.remove('active'); 
                        }else
                        {
                            item.classList.toggle('active');
                        }
                }
            
        })
    })
