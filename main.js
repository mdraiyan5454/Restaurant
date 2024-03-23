
document.addEventListener("DOMContentLoaded", function () {
        // Get the container element
        var container = document.getElementById("card-cont");
      
        // Function to fetch and display cards based on the provided category
        function displayCards(category) {
          fetch("menu.json")
            .then(response => response.json())
            .then(data => {
              // Clear the container before appending new cards
              container.innerHTML = '';
      
              // Iterate over the selected category of data and create Bootstrap cards
              data[category].forEach(card => {
                var cardHtml = `
                <div class="col-lg-6 menu-item filter-starters" class="" style="position: relative; left: 0px; top: 0px;">
                <div class="menu-content">
                  <a href="#">${card.name}</a><span>${card.price}</span>
                </div>
                <div class="menu-ingredients">
                ${card.ingredients}
                </div>
                </div>
                `;
                
                // Append the card HTML to the container
                container.innerHTML += cardHtml;
              });
            })
            .catch(error => console.error("Error fetching data:", error));
          }
          
          // Attach click event listeners to buttons
          let activeItems = document.querySelectorAll('.list');
          let activeBtn = document.querySelector('.filter-acitve');
          // console.log(activeBtn)
        document.getElementById("showAll-btn").addEventListener("click", function () {
          displayCards("showAll");
        });

        document.getElementById("burger-btn").addEventListener("click", function () {
          displayCards("Burger");
          
        });
      
        document.getElementById("salads-btn").addEventListener("click", function () {
          displayCards("Salads");
          
        });
      
        document.getElementById("pizza-btn").addEventListener("click", function () {
          displayCards("pizza");
          
        });
        activeItems.forEach((element) => {
          element.addEventListener('click', () => {
            activeItems.forEach((btn) => {
              btn.classList.remove('active');
            })
            element.classList.add('active')
          })
        })
      });
      // console.log(activeItems)
      
 /**
   * Testimonials slider
   */
 new Swiper('.events-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/**
 * Initiate gallery lightbox 
 */


/**
 * Testimonials slider
 */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
  
// active nav link:
const items = document.querySelectorAll(".active-nav .nav-link");
// const mobile_items = document.querySelectorAll(".nav_item .nav_link");
items.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector(".nav-link.activeLink").classList.remove('activeLink');
    item.classList.add('activeLink');
  })
})

// mobile_items.forEach((item) => {
//   item.addEventListener('click', () => {
//     document.querySelector(".nav_link.active-link").classList.remove('active-link');
//     item.classList.add('active-link');
//   })
// })

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar-nav li a');

window.onscroll = () => {
  const fromTop = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
// console.log(section);
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('activeLink');
    } else {
      link.classList.remove('activeLink');
    }
  });
};


function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}