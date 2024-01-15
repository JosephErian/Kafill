const NavbarIcons = [
    {
    id:"auctions",
    inactiveLogo: './images/navIcons/cart.svg',
    activeLogo: './images/navIcons/cartOn.svg',
    selected: true,
},
{
    id:"contests",
    inactiveLogo: './images/navIcons/trophy.svg',
    activeLogo: './images/navIcons/trophyOn.svg',
    selected: false,
},
{
    id:"projects",
    inactiveLogo: './images/navIcons/case.svg',
    activeLogo: './images/navIcons/caseOn.svg',
    selected: false,
},
{
    id:"portfolios",
    inactiveLogo: './images/navIcons/window.svg',
    activeLogo: './images/navIcons/windowOn.svg',
    selected: false,
},
{
    id:"freelancers",
    inactiveLogo: './images/navIcons/freelancers.svg',
    activeLogo: './images/navIcons/freelancersOn.svg',
    selected: false,
},
{
    id:"forum",
    inactiveLogo: './images/navIcons/forum.svg',
    activeLogo: './images/navIcons/forumOn.svg',
    selected: false,
},
]




document.addEventListener('DOMContentLoaded', function(){
   
    document.getElementById('user').addEventListener("click", toggleSideList);
    document.getElementById('sidelist').addEventListener("click", toggleSideList);
    document.getElementById('alarm').addEventListener("click", togglealarmList);
    document.getElementById('alarmlist').addEventListener("click", togglealarmList);
    document.getElementById('message').addEventListener("click", togglemessageList);
    document.getElementById('messagelist').addEventListener("click", togglemessageList);
    document.getElementById('mode').addEventListener('change',toggleColorMode)
    toggleNavbar();
    handleCarousel();
    });

    function toggleNavbar() {
        let navButtons = document.querySelectorAll('.nav-item');
    
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener('click', function() {
                const dataId = this.dataset.id;
    
                NavbarIcons.forEach(icon => {
                    let img = this.querySelector('img');
                    if (icon.id === dataId) {
                        img.src = icon.selected ? icon.inactiveLogo : icon.activeLogo;
                        icon.selected = !icon.selected;
                    } else {
                        img.src = icon.inactiveLogo;
                        icon.selected = false;
                    }
                });
    
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
    
                const activeContent = document.querySelector(".active");
                if (activeContent) {
                    activeContent.classList.remove("active");
                }
    
                const contentToActivate = document.getElementById(dataId);
                if (contentToActivate) {
                    contentToActivate.classList.add("active");
                }
            }.bind(navButtons[i]));  // Using bind to create a closure
        }
    }
function toggleColorMode(){
    let body = document.body
    body.classList.toggle("dark-mode", toggleColorMode.checked)
}

function toggleSideList() {
    document.getElementById('sidelist').classList.toggle('hidden');
}
function togglealarmList() {
    document.getElementById('alarmlist').classList.toggle('hidden');
} 
function togglemessageList() {
    document.getElementById('messagelist').classList.toggle('hidden');
} 
function handleCarousel(){
    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
    button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
}