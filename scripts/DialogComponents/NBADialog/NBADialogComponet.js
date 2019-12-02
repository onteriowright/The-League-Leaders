// This function handles the btn events
const NBADialogComponent = () => {
  const allCloseBtns = document.querySelectorAll("button[id^='close--']");
  allCloseBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const DialogElement = event.target.parentNode;
      DialogElement.close();
    });
  });

  const allOpenBtns = document.querySelectorAll("button[id^='open--']");
  allOpenBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const DialogElement = document.querySelector(
        `#${event.target.id} + dialog`
      );
      DialogElement.showModal();
    });
  });
};

export default NBADialogComponent;
