# Word Guessing Game

A fun and interactive word guessing game where players try to guess hidden words by inputting letters one at a time. The game provides hints to help players figure out the word before running out of guesses.

## Features

- **Interactive Gameplay**: Guess letters one at a time to reveal the hidden word
- **Hint System**: Multiple progressive hints are provided to help you guess the word
- **Dynamic Difficulty**: The number of allowed guesses depends on word length
  - Words with 5+ letters: 8 guesses
  - Shorter words: 6 guesses
- **Visual Feedback**: 
  - Displays correctly guessed letters in their positions
  - Shows remaining guesses and wrong letters
  - Status banner indicates win/loss with messages
- **Game Controls**: Reset button to start a new game or try the next word
- **Diverse Word List**: Includes common words from various categories (animals, technology, planets, etc.) with themed hints

## Project Structure

```
Word Guessing Game/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── js/
│   ├── script.js       # Main game logic (JavaScript)
│   └── words.js        # Word list with hints
└── Using Python/
    └── game.py         # Alternative Python implementation
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend Alternative**: Python
- **Fonts**: Google Fonts (Chakra Petch, Edu AU VIC WA NT Arrows, Geist Mono)

## How to Play

1. **Start the Game**: Open `index.html` in your web browser
2. **Guess Letters**: Type single letters into the input field
3. **Use Hints**: Read the provided hints to help identify the word
4. **Win Condition**: Guess all letters in the word before running out of guesses
5. **Lose Condition**: Run out of guesses before completing the word
6. **Play Again**: Click "Reset Game" to start a new game with a different word

## Game Rules

- Each correct letter appears in its corresponding position(s) in the word
- Wrong letters are tracked and displayed
- You have a limited number of guesses based on word length
- The game ends when you either:
  - Successfully guess all letters (win)
  - Exceed the maximum number of wrong guesses (lose)

## JavaScript Implementation

The main game logic includes:
- Random word selection from the word list
- Hint management and display
- Letter validation and positioning
- Game state tracking (guesses left, correct/incorrect letters)
- Win/lose detection with status banner feedback

## Python Implementation

An alternative implementation is available in `Using Python/game.py` for those interested in a command-line version of the game.

## Future Enhancements

- Score tracking and leaderboard
- Difficulty levels
- Category selection
- Multiplayer mode
- Sound effects and animations
- Word statistics and performance tracking
