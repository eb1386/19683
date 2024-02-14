window.requestAnimationFrame(function () {
  var manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  
  document.querySelector(".undo-button").addEventListener("click", function() {
    manager.undo();
  });
});
