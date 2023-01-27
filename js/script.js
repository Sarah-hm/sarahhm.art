$(document).ready(function(){


// Hamburger menu for projects section
$(".pages-cluster-title").click(function(){
    $(this).parent().find(".project-lists").toggleClass("menuSectionOpened")
})

// Mail to sarah.hm@hotmail.ca when contact is clicked
$("#contact-button").click(function(){
    window.location.href=`mailto:sarah.hm@hotmail.ca`
})

})