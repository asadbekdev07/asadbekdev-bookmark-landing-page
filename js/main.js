const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsPanel = document.querySelectorAll(".tabspanel");

function deactivateTabsItems() {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove("tabs__item--active");
  });
}

function deactivateTabsPanels() {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove("tabspanel--active");
  });
}

elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener("click", function(evt) {
    //Prevent page move
    evt.preventDefault();

    //Remove active class from tabs__item elements
    deactivateTabsItems();

    //Add active class current tabs__item
    elTabLink.parentElement.classList.add("tabs__item--active");

    // Remove active class from tabs__panel elements
    deactivateTabsPanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split("#")[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add("tabspanel--active");
  });
});