
// Jquery needs to be implemented in vanilla but here it is for right now
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

window.onload = (event) => {

  document.querySelectorAll(".page-button").forEach(function(element){
   element.addEventListener('click', (e)=> {

    let pages = document.querySelectorAll(".page");
    console.log(pages)

    document.querySelectorAll(".page").forEach(function(el){
        el.classList.add("page-closed");
    })

    let pageID = e.target.getAttribute('data-att');
    console.log(pageID)
    document.querySelector(`#${pageID}`).classList.toggle("page-closed")


    
  })
})
    

 }
