const burgerButton = document.querySelector(".button-burger"),
      asideMenu = document.querySelector(".aside-menu")

let visibleAsideMenu = false;

const addBurgerButtonClick = () => {
    burgerButton.addEventListener("click", (e) => {
        visibleAsideMenu = !visibleAsideMenu;
      
        if (visibleAsideMenu) {
          asideMenu.classList.add("active");
          burgerButton.classList.add("button-burger--cross");
        } else {
          asideMenu.classList.remove("active");
          burgerButton.classList.remove("button-burger--cross");
        }
      });
}

export {addBurgerButtonClick}
