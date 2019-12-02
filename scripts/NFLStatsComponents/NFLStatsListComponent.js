import { UseQBStatsData } from "./NFLQBStatsComponents/NFLQBStatsDataProvider.js";
import NFLQBDataComponent from "./NFLQBStatsComponents/NFLQBStatsComponent.js";

// This function renders data to the DOM
const NFLStatsListComponent = () => {
  const sideHTMLElement = document.querySelector("#side-data");
  const UseData = UseQBStatsData();

  sideHTMLElement.innerHTML += `
  <h2 class="leaders">League Leaders</h2><hr>
    <section class="data-content">
      ${UseData.map(data => NFLQBDataComponent(data)).join("")}
    </section>
  `;
};

export default NFLStatsListComponent;
