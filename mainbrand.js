function searchFunction() {
    let query = document.getElementById("search-bar").value;
    if (query) {
        alert("Searching for: " + query);
        // Redirect to search results page (update the URL as needed)
        window.location.href = "search.html?q=" + encodeURIComponent(query);
    } else {
        alert("Please enter a search term.");
    }
}
function addToCart() {
    alert("Item added to cart!");
}
function shopNow() {
    window.location.href = "classic-shorts.html"; // Change this to your actual shop page URL
}
window.addEventListener("scroll", function () {
    var aboutSection = document.querySelector(".about-section");
    if (window.scrollY > 100) { // Adjust scroll threshold
        aboutSection.classList.add("scrolled");
    } else {
        aboutSection.classList.remove("scrolled");
    }
});
window.addEventListener("scroll", function() {
    let aboutSection = document.querySelector(".about-section2");
    if (window.scrollY > 100) { // Adjust scroll threshold if needed
        aboutSection.classList.add("scrolled");
    } else {
        aboutSection.classList.remove("scrolled");
    }
});
window.addEventListener("scroll", function() {
    let aboutSection3 = document.querySelector(".about-section3");
    
    if (window.scrollY > 100) { 
        aboutSection3.classList.add("scrolled");
    } else {
        aboutSection3.classList.remove("scrolled");
    }
});
