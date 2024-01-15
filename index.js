
document.addEventListener('DOMContentLoaded', function(){
  
    document.getElementById('user').addEventListener("click", toggleSideList);
    document.getElementById('sidelist').addEventListener("click", toggleSideList);
    document.getElementById('alarm').addEventListener("click", togglealarmList);
    document.getElementById('alarmlist').addEventListener("click", togglealarmList);
    document.getElementById('message').addEventListener("click", togglemessageList);
    document.getElementById('messagelist').addEventListener("click", togglemessageList);
    document.getElementById('mode').addEventListener('change',toggleColorMode)
    toggleNavbar();
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
        const navItems = document.querySelectorAll(".nav-item");
    
        navItems.forEach(button => {
            button.addEventListener("click", function() {
                // Remove active-btn from the previously active button
                document.querySelector(".active-btn").classList.remove("active-btn");
    
                // Add active-btn to the clicked button
                this.classList.add("active-btn");
    
                // Remove active from the previously active content
                document.querySelector(".active").classList.remove("active");
    
                // Add active to the content associated with the clicked button
                document.getElementById(button.dataset.id).classList.add("active");
    
                // Toggle the image based on whether the clicked button has the active-btn class
                const isActive = this.classList.contains("active-btn");
                const imgSrc = isActive ? './images/navIcons/cart.svg' : './images/navIcons/inactive-cart.svg';
                this.querySelector(".nav-icon").src = imgSrc;
            });
        });
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
