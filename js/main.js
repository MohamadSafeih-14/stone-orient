let open = document.querySelector('.mobile-icon');
let close = document.querySelector('.close-mobile-icon');

let mobileMenu = document.querySelector('.mobile-menu')

open.addEventListener("click", () => {
    mobileMenu.classList.toggle('mobile-menu-is-open')
    open.classList.toggle('none')
    close.classList.toggle('none')
});
close.addEventListener("click", () => {
    mobileMenu.classList.toggle('mobile-menu-is-open')
    open.classList.toggle('none')
    close.classList.toggle('none')
})





document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const images = document.querySelectorAll('.image');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Hide all images
            images.forEach(image => {
                image.style.display = 'none';
            });

            images.forEach(image => {
                if (filterValue === 'all' || image.classList.contains(filterValue)) {
                    image.style.display = 'block';
                }
            });

            // Remove the fade-in class from all images
            images.forEach(image => {
                image.classList.remove('fade-in');
            });

            // Apply the fade-in animation to all images after filtering
            setTimeout(() => {
                images.forEach(image => {
                    image.classList.add('fade-in');
                });
            }, 10);
        });
    });

    // Initially display all images with fade-in animation
    images.forEach(image => {
        image.style.display = 'block';
        image.classList.add('fade-in');
    });
});


let imgs = document.querySelectorAll(".image .slider-button");

for(let i = 0; i < imgs.length;i++) {

  imgs[i].addEventListener("click", () => {
  let slider = document.getElementById(imgs[i].getAttribute("data-id"));

    if(slider.style.display === "block") {
      slider.style.display = "none";
    } else {
      slider.style.display = "block";
    }

  })
}
