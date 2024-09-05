const processCardList = document.querySelector(".process__card-list");

const workingProcessData = [
  {
    title: "Consultation",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    id: 1,
  },
  {
    title: "Research and Strategy Development",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    id: 2,
  },
  {
    title: "Implementation",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    id: 3,
  },
  {
    title: "Monitoring and Optimization",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    id: 4,
  },
  {
    title: "Reporting and Communication",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    id: 5,
  },
  {
    title: "Continual Improvement",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    id: 6,
  },
];

const dropDownState = {};

const renderWorkingProcessCard = (data) => {
  data.map((item) => {
    const id = `dropDown${item.id}`;

    processCardList.insertAdjacentHTML(
      "beforeend",
      `<li class="process__card-item">
            <div class="drop-down drop-down--${id}">
              <div class="drop-down__visible-body">
                  <h3 class="drop-down__title">${item.title}</h3>
                  <button class="drop-down__button drop-down-button" type="button" id="${id}"></button>
              </div>
              <div class="drop-down__hidden-body">
              <div class="drop-down__hidden-body-content">
                <div class="drop-down__description">
                    <p>${item.desc}</p>
                </div>
              </div>
              </div> 
            </div>
            </li>`
    );

    dropDownState[`${id}`] = false;
  });
};

const addDropDownButtonClick = () => {
  const dropDownButton = document.querySelectorAll(".drop-down-button");

  dropDownButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnId = btn.id;
      const dropDown = document.querySelector(`.drop-down--${btnId}`);
    
      dropDownState[btnId] = !dropDownState[btnId];
    
      if (dropDownState[btnId]) {
        btn.classList.add("active");
        dropDown.classList.add("active");
      } else {
        btn.classList.remove("active");
        dropDown.classList.remove("active");
      }
    });
  });
}

export {renderWorkingProcessCard, addDropDownButtonClick, workingProcessData,}