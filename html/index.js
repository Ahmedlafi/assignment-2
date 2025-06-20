const quotes = [
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
    { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "The only way out of the labyrinth of suffering is to forgive.", author: "John Green" }
    ];
    const btn = document.getElementById("newQuoteBtn");
    const quoteDisplay = document.getElementById("quoteDisplay");
    const authorDisplay = document.getElementById("authorDisplay");
      btn.addEventListener("click", () => {
      const index = Math.floor(Math.random() * quotes.length);
      const selected = quotes.splice(index, 1)[0]; 

      quoteDisplay.textContent = `"${selected.text}"`;
      authorDisplay.textContent = `-- ${selected.author}`;
    });