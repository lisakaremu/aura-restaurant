console.log("Aura Restaurant Website Loaded Successfully");
// GALLERY SLIDER

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);

function openMenu(type) {

    const modal = document.getElementById("menuModal");
    const content = document.getElementById("menuContent");

    if(type === "entrees") {

        content.innerHTML = `
            <h2>Signature Entrées</h2>

            <h3>Mains</h3>

            <ul>
                <li>Filet Mignon</li>
                <li>Herb-Crusted Lamb Chops</li>
                <li>Truffle Butter Chicken Supreme</li>
            </ul>

            <h3>Sides</h3>

            <ul>
                <li>Garlic Rosemary Rice</li>
                <li>Parmesan Mashed Potatoes</li>
                <li>Truffle Fries</li>
            </ul>
        `;
    }

    if(type === "cocktails") {

        content.innerHTML = `
            <h2>Artisan Cocktails</h2>

            <h3>Signature Cocktails</h3>

            <ul>
                <li>Aura Old Fashioned</li>
                <li>Golden Sunset Martini</li>
                <li>Signature Passion Mule</li>
            </ul>

            <h3>Classic Favourites</h3>

            <ul>
                <li>Espresso Martini</li>
                <li>French 75</li>
                <li>Smoked Whiskey Sour</li>
            </ul>
        `;
    }

    if(type === "seafood") {

        content.innerHTML = `
            <h2>Fresh Catch</h2>

            <h3>Seafood Selection</h3>

            <ul>
                <li>Pan-Seared Salmon</li>
                <li>Garlic Butter Prawns</li>
                <li>Grilled Catch of the Day</li>
            </ul>

            <h3>Today's Fresh Catch</h3>

            <ul>
                <li>Lobster</li>
                <li>Octopus</li>
                <li>Red Snapper</li>
            </ul>

            <h3>Sides</h3>

            <ul>
                <li>Lemon Herb Rice</li>
                <li>Garlic Butter Vegetables</li>
                <li>Truffle Fries</li>
            </ul>
        `;
    }

    modal.style.display = "block";
}

function closeMenu() {
    document.getElementById("menuModal").style.display = "none";
}