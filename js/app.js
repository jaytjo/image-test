(() => {
  const q = [
    {t:"The only way to do great work is to love what you do.",a:"Steve Jobs"},
    {t:"Innovation distinguishes between a leader and a follower.",a:"Steve Jobs"},
    {t:"Stay hungry, stay foolish.",a:"Steve Jobs"},
    {t:"Life is what happens when you're busy making other plans.",a:"John Lennon"},
    {t:"The future belongs to those who believe in the beauty of their dreams.",a:"Eleanor Roosevelt"},
    {t:"It is during our darkest moments that we must focus to see the light.",a:"Aristotle"},
    {t:"The only impossible journey is the one you never begin.",a:"Tony Robbins"},
    {t:"Success is not final, failure is not fatal.",a:"Winston Churchill"},
    {t:"Believe you can and you're halfway there.",a:"Theodore Roosevelt"},
    {t:"The best time to plant a tree was 20 years ago. The second best time is now.",a:"Chinese Proverb"},
    {t:"Your time is limited, don't waste it living someone else's life.",a:"Steve Jobs"},
    {t:"In the middle of difficulty lies opportunity.",a:"Albert Einstein"},
    {t:"Be the change that you wish to see in the world.",a:"Mahatma Gandhi"},
    {t:"The mind is everything. What you think you become.",a:"Buddha"},
    {t:"Strive not to be a success, but rather to be of value.",a:"Albert Einstein"},
    {t:"The best way to predict the future is to create it.",a:"Peter Drucker"},
    {t:"Do what you can, with what you have, where you are.",a:"Theodore Roosevelt"},
    {t:"Everything you've ever wanted is on the other side of fear.",a:"George Addair"},
    {t:"Dream big and dare to fail.",a:"Norman Vaughan"},
    {t:"What lies behind us and what lies before us are tiny matters compared to what lies within us.",a:"Ralph Waldo Emerson"},
    {t:"Success usually comes to those who are too busy to be looking for it.",a:"Henry David Thoreau"},
    {t:"Don't be afraid to give up the good to go for the great.",a:"John D. Rockefeller"},
    {t:"I find that the harder I work, the more luck I seem to have.",a:"Thomas Jefferson"},
    {t:"The way to get started is to quit talking and begin doing.",a:"Walt Disney"},
    {t:"The only way to predict the future is to have power to shape the future.",a:"Eric Hoffer"},
    {t:"Happiness is not something ready made. It comes from your own actions.",a:"Dalai Lama"},
    {t:"You miss 100% of the shots you don't take.",a:"Wayne Gretzky"},
    {t:"Act as if what you do makes a difference. It does.",a:"William James"},
    {t:"What you get by achieving your goals is not as important as what you become.",a:"Zig Ziglar"},
    {t:"The only person you are destined to become is the person you decide to be.",a:"Ralph Waldo Emerson"},
    {t:"The purpose of our lives is to be happy.",a:"Dalai Lama"},
    {t:"Get busy living or get busy dying.",a:"Stephen King"},
    {t:"You only live once, but if you do it right, once is enough.",a:"Mae West"},
    {t:"Many of life's failures are people who did not realize how close they were to success when they gave up.",a:"Thomas A. Edison"},
    {t:"If you want to live a happy life, tie it to a goal, not to people or things.",a:"Albert Einstein"},
    {t:"Never let the fear of striking out keep you from playing the game.",a:"Babe Ruth"},
    {t:"Perseverance is not a long race; it is many short races one after another.",a:"Walter Elliot"},
    {t:"The harder the conflict, the more glorious the triumph.",a:"Thomas Paine"},
    {t:"Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'",a:"Mary Anne Radmacher"},
    {t:"You must be the change you wish to see in the world.",a:"Mahatma Gandhi"},
    {t:"The journey of a thousand miles begins with one step.",a:"Lao Tzu"},
    {t:"What we achieve inwardly will change outer reality.",a:"Plutarch"},
    {t:"The secret of getting ahead is getting started.",a:"Mark Twain"},
    {t:"Happiness depends upon ourselves.",a:"Aristotle"},
    {t:"To handle yourself, use your head; to handle others, use your heart.",a:"Eleanor Roosevelt"},
    {t:"Optimism is the faith that leads to achievement.",a:"Helen Keller"},
    {t:"Don't watch the clock; do what it does. Keep going.",a:"Sam Levenson"},
    {t:"Either you run the day or the day runs you.",a:"Jim Rohn"},
    {t:"You can't cross the sea merely by standing and staring at the water.",a:"Rabindranath Tagore"},
    {t:"Everything has beauty, but not everyone sees it.",a:"Confucius"},
    {t:"A goal is not always meant to be reached; it often serves simply as something to aim at.",a:"Bruce Lee"},
    {t:"We know what we are, but know not what we may be.",a:"William Shakespeare"},
    {t:"The only limit to our realization of tomorrow will be our doubts of today.",a:"Franklin D. Roosevelt"},
    {t:"Start where you are. Use what you have. Do what you can.",a:"Arthur Ashe"},
    {t:"Don't judge each day by the harvest you reap but by the seeds that you plant.",a:"Robert Louis Stevenson"},
    {t:"To live is the rarest thing in the world. Most people exist, that is all.",a:"Oscar Wilde"},
    {t:"Do not wait to strike till the iron is hot; but make it hot by striking.",a:"William Butler Yeats"},
    {t:"Quality is not an act, it is a habit.",a:"Aristotle"},
    {t:"The road to success and the road to failure are almost exactly the same.",a:"Colin R. Davis"},
    {t:"If opportunity doesn't knock, build a door.",a:"Milton Berle"},
    {t:"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",a:"Roy T. Bennett"},
    {t:"Magic is believing in yourself, if you can do that, you can make anything happen.",a:"Johann Wolfgang von Goethe"},
    {t:"Life shrinks or expands in proportion to one's courage.",a:"Anais Nin"},
    {t:"Keep your face always toward the sunshine—and shadows will fall behind you.",a:"Walt Whitman"},
    {t:"A year from now you may wish you had started today.",a:"Karen Lamb"},
    {t:"It always seems impossible until it's done.",a:"Nelson Mandela"},
    {t:"If you can dream it, you can do it.",a:"Walt Disney"},
    {t:"Be stubborn about your goals, and flexible about your methods.",a:"Unknown"},
    {t:"Small deeds done are better than great deeds planned.",a:"Peter Marshall"},
    {t:"Be kinder than necessary. Everyone you meet is fighting some kind of battle.",a:"Plato"},
    {t:"Happiness is not by chance, but by choice.",a:"Jim Rohn"},
    {t:"The only true wisdom is in knowing you know nothing.",a:"Socrates"},
    {t:"He who has a why to live can bear almost any how.",a:"Friedrich Nietzsche"},
    {t:"The best preparation for tomorrow is doing your best today.",a:"H. Jackson Brown Jr."},
    {t:"When one door of happiness closes, another opens.",a:"Helen Keller"},
    {t:"The greatest wealth is to live content with little.",a:"Plato"},
    {t:"A man who dares to waste one hour of time has not discovered the value of life.",a:"Charles Darwin"},
    {t:"You are never too old to set another goal or to dream a new dream.",a:"C.S. Lewis"},
    {t:"The future depends on what you do today.",a:"Mahatma Gandhi"},
    {t:"An unexamined life is not worth living.",a:"Socrates"},
    {t:"Do what is right, not what is easy nor what is popular.",a:"Roy T. Bennett"},
    {t:"To succeed in life, you need two things: ignorance and confidence.",a:"Mark Twain"},
    {t:"The greatest glory in living lies not in never falling, but in rising every time we fall.",a:"Nelson Mandela"},
    {t:"The secret to getting ahead is getting started.",a:"Mark Twain"}
  ];

  let i = (new Date().getDate()) % q.length;
  let isTransitioning = false;

  function showQuote(animate=true){
    if(isTransitioning) return;
    isTransitioning = true;

    const quoteEl = document.getElementById('q');
    const authorEl = document.getElementById('a');
    const entry = q && q.length ? q[i] : {t:'No quotes available.', a:''};

    if(animate){
      quoteEl.classList.remove('fade-in');
      authorEl.classList.remove('fade-in');

      setTimeout(()=>{
        quoteEl.textContent = entry.t;
        authorEl.textContent = entry.a ? '— ' + entry.a : '';
        quoteEl.classList.add('fade-in');
        authorEl.classList.add('fade-in');
        isTransitioning = false;
      },250);
    }else{
      quoteEl.textContent = entry.t;
      authorEl.textContent = entry.a ? '— ' + entry.a : '';
      quoteEl.classList.add('fade-in');
      authorEl.classList.add('fade-in');
      isTransitioning = false;
    }
  }

  function nextQuote(){ i = (i + 1) % q.length; showQuote(); }
  function prevQuote(){ i = (i - 1 + q.length) % q.length; showQuote(); }

  function randomQuote(){
    if(!q.length) return;
    let newIndex;
    do{ newIndex = Math.floor(Math.random() * q.length); }
    while(newIndex === i && q.length > 1);
    i = newIndex; showQuote();
  }

  async function copyQuote(){
    const entry = q && q.length ? q[i] : {t:'', a:''};
    const text = `"${entry.t}" ${entry.a ? '— '+entry.a : ''}`.trim();

    if(navigator.clipboard && navigator.clipboard.writeText){
      try{ await navigator.clipboard.writeText(text); showToast('Quote copied to clipboard!'); return; }
      catch(e){}
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly','');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(textarea);
    showToast('Quote copied to clipboard!');
  }

  function showToast(message){
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(()=>{ toast.classList.remove('show'); },2000);
  }

  document.addEventListener('keydown',(e)=>{
    const tgt = e.target;
    if(tgt && (tgt.matches('input, textarea') || tgt.isContentEditable)) return;
    if(e.key === 'ArrowRight'){ e.preventDefault(); nextQuote(); return; }
    if(e.key === 'ArrowLeft'){ e.preventDefault(); prevQuote(); return; }
    if(e.key === ' ' || e.code === 'Space'){ e.preventDefault(); nextQuote(); return; }
    if((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey){ e.preventDefault(); randomQuote(); return; }
  });

  // attach controls
  document.getElementById('nextBtn').addEventListener('click', nextQuote);
  document.getElementById('randomBtn').addEventListener('click', randomQuote);
  document.getElementById('copyBtn').addEventListener('click', copyQuote);

  // initial render and date
  showQuote(false);
  document.getElementById('d').textContent = new Date().toLocaleDateString('en-US',{
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });

})();
