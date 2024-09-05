const servicesList = document.querySelector(".services__list");

const servicesData = [
    {title1: 'Search engine', title2: 'optimization', img: '/images/services/1.png', link: '/', theme: 'light'},
    {title1: 'Search engine', title2: 'optimization', img: '/images/services/2.png', link: '/', theme: 'accent'},
    {title1: 'Search engine', title2: 'optimization', img: '/images/services/3.png', link: '/', theme: 'dark'},
    {title1: 'Search engine', title2: 'optimization', img: '/images/services/4.png', link: '/', theme: 'light'},
    {title1: 'Search engine', title2: 'optimization', img: '/images/services/5.png', link: '/', theme: 'accent'},
    {title1: 'Search engine', title2: 'optimization', img: '/images/services/6.png', link: '/', theme: 'dark'},
  ]
  
  const renderServices = (data) => {
    data.map((i) => {
      servicesList.insertAdjacentHTML(
        'beforeend',
        `<li class="services__item">
                <div class="services__service-card service-card service-card--${i.theme}">
                  <div class="service-card__body">
                    <h3 class="service-card__title">
                      <span class="puddle-bg puddle-bg--${i.theme}">Search engine</span>
                      <span class="puddle-bg puddle-bg--${i.theme}">optimization</span>
                    </h3>
                    <a class="service-card__link arrow-link arrow-link--${i.theme} arrow-link--hidden-label" href="${i.link}">
                      <span class="arrow-link__icon">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                          </svg>
                      </span>
                      <span class="arrow-link__link">Learn more</span>
                    </a>
                  </div>
                  <img class="service-card__image" src="${i.img}" alt="" width="210" height="166">
                </div>
              </li>`
      )
    })
  }

  export {renderServices, servicesData}