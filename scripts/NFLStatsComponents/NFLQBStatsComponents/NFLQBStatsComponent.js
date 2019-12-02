// This function creates the HTML template
const NFLQBStatsDataComponent = team => {
  return `
    <div class="stats-template">
      <div class="data-info"><h3>${team.leader}</h3></div>
      <div class="data-info"><h4>${team.yards} Yards Per Game</h4></div>
      <div class="data-info"><h4>${team.stat}</h4></div>
      <div class="data-info"><h4>${team.percentage}% QBR Rating</h4></div>
    </div><hr>
  `;
};

export default NFLQBStatsDataComponent;
