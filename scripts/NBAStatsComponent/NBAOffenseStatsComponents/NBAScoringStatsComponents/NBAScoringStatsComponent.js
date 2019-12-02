const NBAScoringStatsComponent = team => {
  return `
    <div class="stats-template">
      <div class="data-info"><h3>${team.leader}</h3></div>
      <div class="data-info"><h3>${team.field_Percentage} from the field</h3></div>
      <div class="data-info"><h3>${team.there_Point_Percentage} from the parameter</h3></div>
      <div class="data-info"><h3>${team.mid_Range_Percentage} from mid range</h3></div>
      <div class="data-info"><h3>${team.in_The_Paint_Percentage} from the paint</h3></div>
    </div><hr>
  `;
};

export default NBAScoringStatsComponent;
