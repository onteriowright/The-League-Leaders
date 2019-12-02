// This function creates the HTML template
const NFLTeamComponent = team => {
  return `
    <div class="template">
      <img class="pic-size" src="${team.image}" />
      <span class="title">
        <h3>${team.name}</h3>
      </span>
      <button id="open--${team.name}" class="btn">Details</button>

      <dialog class="dialog">
        <div class="dialog-info">Head Coach: ${team.headCoach}</div>
        <div class="dialog-info">Quarterback: ${team.quarterback}</div>
        <div class="dialog-info">Division: ${team.division}</div>
        <div class="dialog-info">Stadium: ${team.stadium}</div>
        <div class="dialog-info">Location: ${team.location}</div>
        <div class="dialog-info">Championships: ${team.championships.join(
          ", "
        )}</div>

        <button id="close--${team.name}">Close</button>
      </dialog>
    </div>
  `;
};

export default NFLTeamComponent;
