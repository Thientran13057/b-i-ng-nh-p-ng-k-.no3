
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("DOM fully loaded and parsed");
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        const content = document.querySelector('.content');
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 1000); 
});
