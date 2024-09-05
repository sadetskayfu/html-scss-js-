import { renderServices, servicesData } from "./services.js";
import { renderPartners, partnersData } from "./partners.js";
import { addBurgerButtonClick} from "./BurgerButton.js";
import { renderWorkingProcessCard, workingProcessData, addDropDownButtonClick } from "./workingProcess.js";
import {teamData, renderTeamCards} from "./team.js"

addBurgerButtonClick();
renderPartners(partnersData);
renderServices(servicesData);
renderWorkingProcessCard(workingProcessData);
addDropDownButtonClick()
renderTeamCards(teamData);




