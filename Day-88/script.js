const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "The only source of knowledge is experience.", author: "Albert Einstein" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" }
  ];
  
  const generateBtn = document.getElementById("generateBtn");
  const shareBtn = document.getElementById("shareBtn");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
  }
  
  generateBtn.addEventListener("click", generateQuote);
  
  shareBtn.addEventListener("click", function() {
    const text = encodeURIComponent(`${quoteText.textContent} ${quoteAuthor.textContent}`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(tweetUrl, "_blank");
  });
  
  generateQuote();
  