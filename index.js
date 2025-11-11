const quotes = [
  { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { content: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { content: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { content: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "Stay Hungry,Stay Foolish.",
      author:"Steve Jobs"},
  { content: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  {content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { content: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr." }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = `"${random.content}"`;
  authorEl.textContent = `~ ${random.author}`;
});