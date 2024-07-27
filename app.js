const sriLankanCities = [
    "Colombo", "Galle", "Kandy", "Jaffna", "Gampaha",
    "Kurunegala", "Negombo", "Batticaloa", "Matara",
    "Badulla", "Ratnapura", "Trincomalee", "Anuradhapura",
    "Polonnaruwa", "Nuwara Eliya", "Hambantota", "Kalutara"
];

const burgerNames = [
    "Classic Beef Burger", "Cheeseburger", "Bacon Burger",
    "Chicken Burger", "Veggie Burger", "Mushroom Swiss Burger",
    "BBQ Burger", "Spicy Jalapeno Burger", "Double Decker Burger",
    "Fish Burger", "Turkey Burger", "Buffalo Burger"
];

function populateDropdown() {
    const selectElement = document.getElementById('cities');
    sriLankanCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase().replace(/\s+/g, '-');
        option.textContent = city;
        selectElement.appendChild(option);
    });
}

function populateBurgerDropdown() {
    const selectElement = document.getElementById('burger');
    burgerNames.forEach(burger => {
        const option = document.createElement('option');
        option.value = burger.toLowerCase().replace(/\s+/g, '-');
        option.textContent = burger;
        selectElement.appendChild(option);
    });
}

window.onload = function() {
    populateDropdown();
    populateBurgerDropdown();
};
