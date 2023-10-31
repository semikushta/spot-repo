let currentPage = 1; // Track the current page number
const maxPage = 3; //  Maximum page number to 3
let submenuExpanded = {
    solutions: false,
    resources: false,
    login: false,
};
// Track the visibility of the details section
let detailsSectionVisible = false;

// Close all open dropdowns except the current one
function toggleSubMenu(menu) {
    const dropdownContent = document.querySelector(`.${menu}`);

    for (let key in submenuExpanded) {
        if (key !== menu) {
            submenuExpanded[key] = false;
            document.querySelector(`.${key}`).style.display = 'none';
        }
    }

    submenuExpanded[menu] = !submenuExpanded[menu];

    if (submenuExpanded[menu]) {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
}

// Function to toggle the "Showing" options dropdown
function toggleDropdown() {
    const showingOptions = document.getElementById("showing-options");

    if (submenuExpanded) {
        showingOptions.style.display = "none";
    } else {
        showingOptions.style.display = "block";
    }


    submenuExpanded = !submenuExpanded;
}

// Function to update the "Showing" option and calculate the remaining results
function selectOption(option) {
    const showingElement = document.getElementById("showing");
    showingElement.textContent = ` Showing ${option} ▼`;

    showingElement.innerHTML += ` results out of 52`;
    showingOptions.style.display = "none";
    currentPage = 1;

    // Function that Show "Last 12" option when on page 3
    if (currentPage === 3) {
        document.getElementById("option2").style.display = "none";
        document.getElementById("option12").style.display = "block";
    } else {
        document.getElementById("option2").style.display = "none";
        document.getElementById("option12").style.display = "none";
    }
    insertCards(option);
}

// Function to handle the "Next" button click
function nextPage() {
    if (currentPage < maxPage) {
        currentPage++;
        updatePageNumber();

        // Show "Last 12" option only when on page 3
        if (currentPage === 3) {
            document.getElementById("option12").style.display = "block";
        }
    }
}

// Function to handle the "Previous" button click
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageNumber();

        // Hide the "Last 12" option when moving away from page 3
        if (currentPage !== 3) {
            document.getElementById("option12").style.display = "none";
        }
    }
}


// Function to update the page number in the UI
function updatePageNumber() {
    const pageNumber = document.getElementById("pageNumber");
    pageNumber.textContent = currentPage;
}

// Function to add an underline to the "Next" or "Previous" button when clicked
function underlineButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.textDecoration = "underline";
    button.style.textDecorationColor = "white";
}

// Function to remove the underline from the "Next" or "Previous" button
function removeUnderlineButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.textDecoration = "none";
}

// Function to generate and insert cards
function insertCards(option) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear any existing cards

    for (let i = 0; i < option; i++) {
        const card = document.createElement("div");
        card.classList.add("card"); // You can define a CSS class for styling
        card.textContent = `Card ${i + 1}`;
        cardContainer.appendChild(card);
    }
}

// Function to toggle the visibility of the details section
function toggleDetailsSection() {
    const detailsSection = document.querySelector(".details-section");
    detailsSectionVisible = !detailsSectionVisible;

    // Check if the white-div is in front, and if yes, bring the details section to front
    const whiteDiv = document.querySelector(".white-div");
    whiteDiv.style.zIndex = detailsSectionVisible ? 1 : 0;
    detailsSection.style.zIndex = detailsSectionVisible ? 2 : 0;

    detailsSection.style.display = detailsSectionVisible ? "block" : "none";
}

// Add an event listener to the "Details" button to toggle the details section
document.querySelector(".details-button").addEventListener("click", toggleDetailsSection);
selectOption(5);
