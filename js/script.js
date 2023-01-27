$(document).ready(function(){


// Hamburger menu for projects section
$(".pages-cluster-title").click(function(){
    $(this).parent().find(".project-lists").toggleClass("menuSectionOpened")
})

// Open about section when about button is open

$("#about-button").click(function(){
    // $("#about-section").toggleClass("about-section-opened")
    $("header").toggleClass("header-opened");
    $(".header-img").toggleClass("header-img-opened")
})



// Mail to sarah.hm@hotmail.ca when contact is clicked
$("#contact-button").click(function(){
    window.location.href=`mailto:sarah.hm@hotmail.ca`
})

})