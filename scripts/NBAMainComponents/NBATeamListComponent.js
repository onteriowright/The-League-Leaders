import { UseNBATeams } from "./NBATeamDataProvider.js";
import NBATeamComponent from "./NBATeamComponent.js";

//Ths function renders data to the DOM
const NBATeamListComponent = () => {
  const NBAHTMLElement = document.querySelector("#main");
  const NBATeams = UseNBATeams();

  NBAHTMLElement.innerHTML += `
    <section class="content">
      ${NBATeams.map(team => NBATeamComponent(team)).join("")}
    </section>
  `;
};

export default NBATeamListComponent;
