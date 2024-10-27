const musicQuotes = [
    { quote: "Music is the divine way to tell beautiful, poetic things to the heart.", author: "Pablo Casals" },
    { quote: "Where words fail, music speaks.", author: "Hans Christian Andersen" },
    { quote: "Music expresses that which cannot be put into words and that which cannot remain silent.", author: "Victor Hugo" },
    { quote: "Music is the strongest form of magic.", author: "Marilyn Manson" },
    { quote: "Music can change the world because it can change people.", author: "Bono" },
    { quote: "Music is like a dream. One that I cannot hear.", author: "Ludwig van Beethoven" }
  ];

  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  let currentIndex = 0;

  function changeQuote() {
    // Fade out
    document.getElementById('quote-container').style.opacity = 0;

    setTimeout(() => {
      const quote = musicQuotes[currentIndex];
      quoteElement.textContent = `"${quote.quote}"`;
      authorElement.textContent = `- ${quote.author}`;

      // Fade in
      document.getElementById('quote-container').style.opacity = 1;

      // Change index for next quote
      currentIndex = (currentIndex + 1) % musicQuotes.length;
    }, 500); // Adjust timing to match transition duration
  }

  // Initial quote
  changeQuote();

  // Change quote every 5 seconds (5000 milliseconds)
  setInterval(changeQuote, 5000);