const partnersList = document.querySelector(".hero__partners-list")

const partnersData = [
    { img: "/images/partners/amazon.svg", title: "amazon", width: "125", height: "30" },
    { img: "/images/partners/dribbble.svg", title: "dribbble", width: "125", height: "30" },
    { img: "/images/partners/hubspot.svg", title: "hubspot", width: "125", height: "30" },
    { img: "/images/partners/notion.svg", title: "notion", width: "125", height: "30" },
    { img: "/images/partners/netflix.svg", title: "netflix", width: "125", height: "30" },
    { img: "/images/partners/zoom.svg", title: "zoom", width: "125", height: "30" },
  ];
  
  const renderPartners = (data) => {
    data.map((i) => {
      partnersList.insertAdjacentHTML(
          'beforeend',
          `<li class="hero__partners-item"> <img class="hero_partners-image" src=${i.img} alt=${i.title} width=${i.width} height=${i.height} loading="lazy"> </li>`
      )
    });
  };

  export {partnersData, renderPartners}