/**
 * Random Image — loads a new Picsum photo on each "Random" click.
 */
(function () {
  const PICSUM_BASE = "https://picsum.photos";
  const IMAGE_WIDTH = 900;
  const IMAGE_HEIGHT = 600;

  const btn = document.getElementById("randomBtn");
  const img = document.getElementById("mainImage");
  const retryBtn = document.getElementById("retryBtn");

  if (!btn || !img) return;

  function buildImageUrl(seed) {
    return `${PICSUM_BASE}/seed/${seed}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;
  }

  function setLoading(loading) {
    btn.setAttribute("aria-busy", loading ? "true" : "false");
    btn.disabled = loading;
  }

  function hideRetry() {
    if (retryBtn) retryBtn.hidden = true;
  }

  function showRetry() {
    if (retryBtn) retryBtn.hidden = false;
  }

  function showImage(isRetry) {
    img.classList.remove("visible");
    setLoading(true);
    hideRetry();

    var retryCount = 0;

    img.onload = function () {
      img.classList.add("visible");
      setLoading(false);
    };

    img.onerror = function () {
      retryCount += 1;
      if (retryCount === 1 && !isRetry) {
        const seed = Math.floor(Math.random() * 1e9);
        img.alt = `Random image ${seed}`;
        img.src = buildImageUrl(seed);
      } else {
        setLoading(false);
        img.alt = "Failed to load image. Try again.";
        showRetry();
      }
    };

    const seed = Math.floor(Math.random() * 1e9);
    img.alt = `Random image ${seed}`;
    img.src = buildImageUrl(seed);
  }

  btn.addEventListener("click", function () {
    showImage(false);
  });

  if (retryBtn) {
    retryBtn.addEventListener("click", function () {
      showImage(true);
    });
  }

  showImage(false);
})();
