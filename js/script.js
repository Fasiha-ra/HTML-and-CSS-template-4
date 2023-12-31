//-------Menu-bar----------
document.querySelector(".menu-btn").addEventListener('click', function () {
  document.querySelector('.navlist').classList.toggle('active');
});



function openYouTube(){

  window.open('https://www.youtube.com', '_blank', 'width:600px;', 'height:400px;');
}

//--------FAQS--------
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});