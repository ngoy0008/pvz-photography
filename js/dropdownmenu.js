document.addEventListener('DOMContentLoaded', () => {
    var elemDropDown = document.querySelectorAll('.dropdown-trigger');
    var instancesDropDown = M.Dropdown.init(elemDropDown, {
        coverTrigger: false,
        constrainWidth: false,
        hover: true
    });
});