const r = new rive.Rive({
  src: "test.riv",
  canvas: document.getElementById("rive-canvas"),
  autoplay: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
