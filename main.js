let submenuExpanded = {};


// function called toggleSubMenu that takes one parameter, menu. 
function toggleSubMenu(menu) {

    // document.querySelector method used to select the HTML element with the class name that matches the menu parameter.
    //  This element corresponds to the dropdown menu content that you want to show or hide.
    const dropdownContent = document.querySelector(`.${menu}`);

    // Close all open dropdowns except the current one
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
