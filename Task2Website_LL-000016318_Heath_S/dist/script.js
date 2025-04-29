document.addEventListener('DOMContentLoaded', function() {
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
    }

    function getCookie(name){
        const cookies = document.cookie.split('; ')
        for (const cookie of cookies) {
            const [key, value] = cookie.split('=');
            if (key === name) {
                return decodeURIComponent(value);
            }
        }
        return null;
    }
    function applyTheme(theme) {
        document.body.className = theme; // Apply class for theme
    }

        const savedTheme = getCookie('theme') || 'light'; // Default to light if no cookie
        document.getElementById('theme-select').value = savedTheme;
        applyTheme(savedTheme);

        // Change theme immediately when selection changes
        document.getElementById('theme-select').addEventListener('change', (e) => {
        applyTheme(e.target.value);
        });

        // Save theme on form submit
        document.getElementById('settings-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedTheme = document.getElementById('theme-select').value;
        setCookie('theme', selectedTheme, 9999);
        alert('Settings saved!');
        });

    function applyColourBlindnessSetting(colourBlind){
        document.body.className = colourBlind;
    }

        const savedColour = getCookie('colourBlind') || 'none-setting';
        document.getElementById('colour-blindness-select').value = savedColour;
        applyColourBlindnessSetting(savedColour);

        document.getElementById('colour-blindness-select').addEventListener('change', (e) => {
            applyColourBlindnessSetting(e.target.value);
        });

        document.getElementById('settings-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedColourBlindness = document.getElementById('colour-blindness-select').value;
            setCookie('colourBlind', selectedColourBlindness, 9999);
        });
});

function calculate() {
    const carbon_electric = parseFloat(document.getElementById('carbon-electric').value);
    const carbon_gas = parseFloat(document.getElementById('carbon-gas').value)
    const carbon_oil = parseFloat(document.getElementById('carbon-oil').value)
    const carbon_mileage = parseFloat(document.getElementById('carbon-mileage').value)
    const carbon_four_or_less = parseFloat(document.getElementById('carbon-four-or-less').value)
    const carbon_four_or_more = parseFloat(document.getElementById('carbon-four-or-more').value)

if (isNaN(carbon_electric) || isNaN(carbon_gas) || isNaN(carbon_oil) || isNaN(carbon_mileage) || isNaN(carbon_four_or_less) || isNaN(carbon_four_or_more)) {
    document.getElementById('carbon-footprint').innerText = 'Please enter valid numbers.';
    return;
}

const sum1 = carbon_electric * 105
const sum2 = carbon_gas * 105
const sum3 = carbon_oil * 113
const sum4 = carbon_mileage * 0.79
const sum5 = carbon_four_or_less * 1100
const sum6 = carbon_four_or_more * 4400
let sum7 = 0
let sum8 = 0
const dropdown1 = document.getElementById('newspaper')
const selectedValue1 = dropdown1.value
const dropdown2 = document.getElementById('aluminium-tin')
const selectedValue2 = dropdown2.value

if (selectedValue1 === 'carbon-yes') {
    sum7 += 0
} else {
    sum7 += 184
}

if (selectedValue2 === 'carbon-yes-two') {
    sum8 += 0
} else {
    sum8 += 166
}

const sumOverall = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8
document.getElementById('carbon-footprint').innerText = `Your carbon footprint is ${sumOverall}`;
}

const appointmentLocations = [
    "Liverpool",
    "Manchester",
    "London"
]

function appointmentsearchFunction() {
    let appointmentInput = document.getElementById('appointment-location').value.toLowerCase()
    let appointmentResults = document.getElementById('appointmentsearchResults')
    appointmentResults.innerHTML = "";

    if (appointmentInput.trim() === "") {
        appointmentResults.style.display = "none"
        return;
    }

    const appointmentData = appointmentLocations.filter(item => item.toLowerCase().includes(appointmentInput));

    if (appointmentData.length === 0) {
        appointmentResults.style.display = "none"
        return;
    }


    appointmentResults.style.display = "block";

    appointmentData.forEach((item) => {
        const appointmentDiv = document.createElement("div");
        appointmentDiv.classList.add("appointment-result-item")
        appointmentDiv.textContent = item;
        appointmentDiv.onclick = function () {
            document.getElementById('appointment-location').value = item;
            appointmentResults.style.display = "none";
        };
        appointmentResults.appendChild(appointmentDiv)
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("appointment-location").addEventListener("keyup", appointmentsearchFunction);
    document.addEventListener("click", function (event) {
        const appointmentContainer = document.querySelector(".appointment-search");
        if(!appointmentContainer.contains(event.target)) {
            document.getElementById("appointmentsearchResults");
        }
    })
});

const repairData = [
    "Solar Panel",
    "Electric Water Heater",
    "Smart Thermostat"
];

function repairsearchFunction() {
    let input = document.getElementById('repair-searchbar').value.toLowerCase()
    let resultsDiv = document.getElementById('repair-searchResults')
    resultsDiv.innerHTML = "";

    if (input.trim() === "") {
        resultsDiv.style.display = "none"
        return;
    }

    const filteredData = repairData.filter(item =>item.toLowerCase().includes(input));

    if (filteredData.length === 0) {
        resultsDiv.style.display = "none";
        return;
    }


    resultsDiv.style.display = "block";

    filteredData.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("repair-result-item")
        div.textContent = item;
        div.onclick = function () {
            document.getElementById('repair-searchbar').value = item;
            resultsDiv.style.display = "none";
        };
        resultsDiv.appendChild(div)
    });
}
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("repair-searchbar").addEventListener("keyup", repairsearchFunction);
document.addEventListener("click", function (event) {
    const searchContainer = document.querySelector(".search-container");
    if(!searchContainer.contains(event.target)) {
    document.getElementById("repair-searchResults").style.display = "none";
    }
})
});

const button = document.getElementById('toggleButton')
const content = document.getElementById('hiddenCarbon')

button.addEventListener('click', function () {
    if (window.getComputedStyle(content).display === 'none') {
        content.style.display = 'block';
        button.innerText = 'Show Less';
    } else {
        content.style.display = 'none';
        button.innerText = 'Start';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('apply-filters').addEventListener('click', function() {
        const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
    
        const selectedGenders = [];
        const selectedColours = [];
        const selectedSizes = [];
    
        checkedInputs.forEach(input => {
            const id = input.id;
            if (id.startsWith('shop-male') || id.startsWith('shop-female')) {
                selectedGenders.push(id);
            } else if (['shop-blue', 'shop-beige', 'shop-grey'].includes(id)) {
                selectedColours.push(id);
            } else if (['shop-x-small', 'shop-small', 'shop-medium', 'shop-large', 'shop-x-large'].includes(id)) {
                selectedSizes.push(id);
            }
        });
    
        document.querySelectorAll('.shop-card').forEach(card => {
            const gender = card.dataset.gender;
            const colour = card.dataset.colour;
            const size = card.dataset.size;
    
            const genderMatch = !selectedGenders.length || selectedGenders.includes(gender);
            const colourMatch = !selectedColours.length || selectedColours.includes(colour);
            const sizeMatch = !selectedSizes.length || selectedSizes.includes(size);
    
            card.style.display = (genderMatch && colourMatch && sizeMatch) ? 'block' : 'none';
        });
    });
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
event.preventDefault();

const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('signup-confirm-password').value;

if (password === confirmPassword) {
    document.getElementById('confirmation').textContent = "Passwords match";
} else {
    document.getElementById('confirmation').textContent = "Passwords do not match";
}
});