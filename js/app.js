/**
 * Random Image — loads a new Picsum photo on each "Random" click.
 */
(function () {
  const PICSUM_BASE = "https://picsum.photos";
  const IMAGE_WIDTH = 900;
  const IMAGE_HEIGHT = 600;

  const btn = document.getElementById("randomBtn");
  const img = document.getElementById("mainImage");

  if (!btn || !img) return;

  function buildImageUrl(seed) {
    return `${PICSUM_BASE}/seed/${seed}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;
  }

  function setLoading(loading) {
    btn.setAttribute("aria-busy", loading ? "true" : "false");
  }

  function showImage() {
    img.classList.remove("visible");
    setLoading(true);

    img.onload = function () {
      img.classList.add("visible");
      setLoading(false);
    };

    img.onerror = function () {
      setLoading(false);
      img.alt = "Failed to load image. Try again.";
    };

    const seed = Math.floor(Math.random() * 1e9);
    img.alt = `Random image ${seed}`;
    img.src = buildImageUrl(seed);
  }

  btn.addEventListener("click", showImage);
  showImage();
})();
