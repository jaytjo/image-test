/**
 * Random Image — loads a new Picsum photo on each "Random" click.
 */
(function () {
  const PICSUM_BASE = "https://picsum.photos";
  const IMAGE_WIDTH = 900;
  const IMAGE_HEIGHT = 600;
  const IMAGE_RATIO = IMAGE_HEIGHT / IMAGE_WIDTH;
  const RESPONSIVE_WIDTHS = [480, 720, 900, 1200];

  const btn = document.getElementById("randomBtn");
  const img = document.getElementById("mainImage");
  const retryBtn = document.getElementById("retryBtn");
  const status = document.getElementById("status");
  const viewer = document.querySelector(".viewer");

  if (!btn || !img) return;

  function heightForWidth(width) {
    return Math.round(width * IMAGE_RATIO);
  }

  function buildImageUrl(seed, width, height, cacheBust) {
    const safeHeight = height ?? heightForWidth(width);
    return `${PICSUM_BASE}/seed/${seed}/${width}/${safeHeight}?cb=${cacheBust}`;
  }

  function buildImageSrcset(seed, cacheBust) {
    return RESPONSIVE_WIDTHS.map((width) => {
      const height = heightForWidth(width);
      return `${PICSUM_BASE}/seed/${seed}/${width}/${height}?cb=${cacheBust} ${width}w`;
    }).join(", ");
  }

  function setLoading(loading) {
    btn.setAttribute("aria-busy", loading ? "true" : "false");
    btn.disabled = loading;
    img.setAttribute("aria-busy", loading ? "true" : "false");
    if (viewer) viewer.classList.toggle("loading", loading);
  }

  function setStatus(message) {
    if (status) status.textContent = message;
  }

  function hideRetry() {
    if (retryBtn) retryBtn.hidden = true;
  }

  function showRetry() {
    if (retryBtn) retryBtn.hidden = false;
  }

  function loadSeed(seed) {
    const cacheBust = Date.now();
    img.src = buildImageUrl(seed, IMAGE_WIDTH, IMAGE_HEIGHT, cacheBust);
    img.srcset = buildImageSrcset(seed, cacheBust);
    img.sizes = "(max-width: 600px) 92vw, (max-width: 900px) 90vw, 900px";
  }

  var currentSeed = null;

  function showImage(isRetry) {
    img.classList.remove("visible");
    setLoading(true);
    hideRetry();
    setStatus("Loading image...");

    var retryCount = 0;

    img.onload = function () {
      img.classList.add("visible");
      setLoading(false);
      setStatus("Image loaded.");
    };

    img.onerror = function () {
      retryCount += 1;
      if (retryCount === 1 && !isRetry) {
        currentSeed = Math.floor(Math.random() * 1e9);
        img.alt = `Random image ${currentSeed}`;
        loadSeed(currentSeed);
      } else {
        setLoading(false);
        img.alt = "Failed to load image. Try again.";
        setStatus("Failed to load image. Try again.");
        showRetry();
      }
    };

    if (isRetry && currentSeed !== null) {
      img.alt = `Random image ${currentSeed}`;
      loadSeed(currentSeed);
      return;
    }

    currentSeed = Math.floor(Math.random() * 1e9);
    img.alt = `Random image ${currentSeed}`;
    loadSeed(currentSeed);
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
