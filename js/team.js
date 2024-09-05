const teamList = document.querySelector('.team__list');

const teamData = [
    {name: 'John Smith', post: 'CEO and Founder', desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', img: '/images/team/1.png', socialLink: '/'},
    {name: 'Jane Doe', post: 'Director of Operations', desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', img: '/images/team/2.png', socialLink: '/'},
    {name: 'Michael Brown', post: 'Senior SEO Specialist', desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', img: '/images/team/3.png', socialLink: '/'},
    {name: 'Emily Johnson', post: 'PPC Manager', desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis', img: '/images/team/4.png', socialLink: '/'},
    {name: 'Brian Williams', post: 'Social Media Specialist', desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement', img: '/images/team/5.png', socialLink: '/'},
    {name: 'Sarah Kim', post: 'Content Creator', desc: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries', img: '/images/team/6.png', socialLink: '/'},
]

const renderTeamCards = (data) => {
    data.map((item) => {
        teamList.insertAdjacentHTML('beforeend', 
            `<li class="team__item">
              <div class="team-card">
                <header class="team-card__header">
                  <img class="team-card__header-img" src="${item.img}" width="100" height="100" alt="" loading="lazy">
                  <div class="team-card__header-title">
                    <h3 class="team-card__header-name">${item.name}</h3>
                    <div class="team-card__header-post">
                      <p>${item.post}</p>
                    </div>
                    </div>
                    <a class="team-card__header-link soc1al-link" href="${item.socialLink}" target="_blank">
                      <span class="visually-hidden">Linkedin</span>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66"/>
                        <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66"/>
                        <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66"/>
                      </svg>
                    </a>
                </header>
                <div class="team-card__body">
                  <div class="team-card__body-desc">
                    <p>${item.desc}</p>
                  </div>
                </div>
              </div>
            </li>`
        )
    })
}

export {teamData, renderTeamCards}