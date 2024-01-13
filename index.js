document.addEventListener('DOMContentLoaded', function(){
  
    document.getElementById('user').addEventListener("click", toggleSideList);
    document.getElementById('sidelist').addEventListener("click", toggleSideList);
    document.getElementById('alarm').addEventListener("click", togglealarmList);
    document.getElementById('alarmlist').addEventListener("click", togglealarmList);
    document.getElementById('message').addEventListener("click", togglemessageList);
    document.getElementById('messagelist').addEventListener("click", togglemessageList);
    document.getElementById('mode').addEventListener('change',toggleColorMode)
    toggleNavbar();
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






