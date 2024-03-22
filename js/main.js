const modifiers = {
  tabItemActive: "tabs__item--active",
  accordionItemOpen: "accordion__item--open",
  tabsPanelActive: "tabspanel--active"
};


const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsPanel = document.querySelectorAll(".tabspanel");


const elsAccordionItem = document.querySelectorAll(".accordion__item");
const elsAccordionItemToggler = document.querySelectorAll(".accordion__item-toggler");

function deactivateTabsItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
}

function deactivateTabsPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabsPanelActive);
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
};


elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener("click", function(evt) {
    //Prevent page move
    evt.preventDefault();

    //Remove active class from tabs__item elements
    deactivateTabsItems();

    //Add active class current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panel elements
    deactivateTabsPanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split("#")[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabsPanelActive);
  });
});


elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener("click", function () {
    closeAccordionItems();
    elAccordionItemToggler.closest(".accordion__item").classList.add(modifiers.accordionItemOpen);
  })
})