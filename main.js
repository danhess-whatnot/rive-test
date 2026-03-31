const r = new rive.Rive({
  src: "fire.riv",
  canvas: document.getElementById("rive-canvas"),
  autoplay: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
