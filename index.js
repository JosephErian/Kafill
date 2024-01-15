
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
    document.getElementById("slide-arrow-next").addEventListener("click", () => {
        const slideWidth = document.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });
      
      document.getElementById("slide-arrow-prev").addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        document.getElementById("slides-container").scrollLeft -= slideWidth;
      });
    }
    );

function toggleNavbar() {
    [...document.querySelectorAll(".nav-item")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
};

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