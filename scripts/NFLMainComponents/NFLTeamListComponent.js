import { UseTeams } from "./NFLTeamDataProvider.js";
import NFLTeamComponent from "./NFLTeamComponent.js";

//This function renders data to the DOM
const NFLTeamListComponent = () => {
  const NFLHTMLElement = document.querySelector("#main");
  const nflTeams = UseTeams();

  NFLHTMLElement.innerHTML += `
    <section class="content">
      ${nflTeams.map(teams => NFLTeamComponent(teams)).join()}
    </section>
  `;
};

export default NFLTeamListComponent;
