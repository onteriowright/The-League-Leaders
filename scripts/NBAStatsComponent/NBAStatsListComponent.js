import { UseTeamStats } from "./NBAOffenseStatsComponents/NBAScoringStatsComponents/NBAScoringStatsDataProvider.js";
import NBAScoringStatsComponent from "./NBAOffenseStatsComponents/NBAScoringStatsComponents/NBAScoringStatsComponent.js";

const NBAStatsListComponent = () => {
  const NBAStatsHTMLElement = document.querySelector("#side-data");
  const useStats = UseTeamStats();

  NBAStatsHTMLElement.innerHTML += `
  <h2 class="leaders">League Leaders</h2><hr>
    <section class="data-content">
      ${useStats
        .map(stat => NBAScoringStatsComponent(stat))
        .sort()
        .join("")}
    </section>
  `;
};

export default NBAStatsListComponent;
