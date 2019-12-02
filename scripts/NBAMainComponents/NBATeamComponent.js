// This function creates the HTML template
const NBATeamComponent = team => {
  return `
    <div class="template">
      <img class="pic-size" src="${team.image}" />
      <span class="title">
        <h3>${team.name}</h3>
      </span>
      <button id="open--${team.name}" class="btn">Details</button>

      <dialog class="dialog">
        <div class="dialog-info">Head Coach: ${team.headCoach}</div>
        <div class="dialog-info">Star Players: ${team.starPlayers.join(
          ", "
        )}</div>
        <div class="dialog-info">Conference: ${team.conference}</div>
        <div class="dialog-info">Arena: ${team.arena}</div>
        <div class="dialog-info">Location: ${team.location}</div>
        <div class="dialog-info">Championships: ${team.championships.join(
          ", "
        )}</div>

        <button id="close--${team.name}" class="btn">Close</button>
      </dialog>
    </div>
  `;
};

export default NBATeamComponent;
