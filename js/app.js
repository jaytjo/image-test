// Minimal JS: load a seeded random image from picsum on each click
(function(){
  const btn = document.getElementById('randomBtn');
  const img = document.getElementById('mainImage');

  function setRandomImage(){
    const seed = Math.floor(Math.random() * 1e9);
    const url = `https://picsum.photos/seed/${seed}/900/600`;
    if(!img) return;
    img.classList.remove('visible');
    img.onload = () => img.classList.add('visible');
    img.src = url;
  }

  if(btn && img){
    btn.addEventListener('click', setRandomImage);
    setRandomImage();
  }
})();
