const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsPanel = document.querySelectorAll(".tabspanel");


const elsAccordionItem = document.querySelectorAll(".accordion__item");
const elsAccordionItemToggler = document.querySelectorAll(".accordion__item-toggler");

function deactivateTabsItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove("tabs__item--active");
  });
}

function deactivateTabsPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove("tabspanel--active");
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove("accordion__item--open");
  });
};


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


elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener("click", function () {
    closeAccordionItems();
    elAccordionItemToggler.closest(".accordion__item").classList.add("accordion__item--open");
  })
})