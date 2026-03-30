const canvas = document.getElementById("rive-canvas");

(async function () {
  const rive = await RiveCanvas({ locateFile: () => "https://unpkg.com/@rive-app/canvas-advanced-single@2.21.6/rive.wasm" });

  const response = await fetch("fire.riv");
  const bytes = new Uint8Array(await response.arrayBuffer());
  const file = await rive.load(bytes);

  const artboard = file.defaultArtboard();
  const stateMachine = new rive.StateMachineInstance(
    artboard.stateMachineByIndex(0),
    artboard
  );

  const renderer = rive.makeRenderer(canvas);
  const ctx = canvas.getContext("2d");

  function draw() {
    if (!renderer) return;
    renderer.clear();
    stateMachine.advance(1 / 60);
    artboard.advance(1 / 60);
    renderer.save();
    renderer.align(
      rive.Fit.contain,
      rive.Alignment.center,
      { minX: 0, minY: 0, maxX: canvas.width, maxY: canvas.height },
      artboard.bounds
    );
    artboard.draw(renderer);
    renderer.restore();
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
