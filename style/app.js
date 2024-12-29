const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTranstions(){
    //Button click active class
    for(let i = 0 ; i < secBtn.length; i++)
       secBtn[i].addEventListener('click', function() {
           let currentBtn = document.querySelectorAll('.active-btn');
           currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
           this.className += 'active-btn'; 
       })


       //Section Active Class
       allSections.addEventListener('click', (e) => {
           const id = e.target.dataset.id;
           if(id){
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                //hide other sections
                sections.forEach((section) =>{
                    section.classList.remove('active');
                } ) 

                const element = document.getElementById(id);
                element.classList.add('active');
           }
       })
}

PageTranstions();