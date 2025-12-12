import random

def word_guessing_game():
    # Word list with hints for 10 words
    words_with_hints = {
        "python": ["It's a popular programming language.", 
                   "It's named after a comedy group, not a snake.", 
                   "It’s used a lot in data science and web development."],
        
        "developer": ["A person who creates software.", 
                      "They write and debug code.", 
                      "They might work on websites, apps, or even games."],
        
        "keyboard": ["A device you use to type letters and numbers.", 
                     "It has keys like letters, numbers, and symbols.", 
                     "You use it to interact with computers and phones."],
        
        "software": ["Programs and applications that run on computers.", 
                     "It’s the opposite of hardware.", 
                     "Examples include apps, games, and operating systems."],
        
        "computer": ["A device that helps you perform tasks and solve problems.", 
                     "It can do things like run programs and store data.", 
                     "It has both hardware (physical parts) and software (programs)."],
        
        "internet": ["A global network that connects computers worldwide.", 
                     "You use it to browse websites, send emails, and chat.", 
                     "It allows you to communicate and share information easily."],
        
        "algorithm": ["A set of instructions to solve a problem.", 
                      "It’s used in computer science to perform tasks efficiently.", 
                      "Examples are sorting things or searching for specific data."],
        
        "database": ["A system used to store and manage large amounts of data.", 
                     "It helps you retrieve, add, and update information easily.", 
                     "Examples include MySQL, MongoDB, and SQL Server."],
        
        "website": ["A collection of web pages you can visit on the internet.", 
                    "It can contain text, images, and videos.", 
                    "Websites are built using HTML, CSS, and JavaScript."],
        
        "coding": ["The act of writing instructions for a computer to follow.", 
                   "It’s done using programming languages like Python, Java, or JavaScript.", 
                   "It's essential for building software applications."]
    }

    # Randomly select a word and its hints
    word_to_guess, hints = random.choice(list(words_with_hints.items()))
    guessed_letters = []  # Track guessed letters
    attempts = 6  # Number of attempts
    hint_counter = 0  # To track which hint we are on

    # Print a welcoming message
    print("🎉 Word Guessing Game! 🎉")
    print(f"You have {attempts} attempts to guess it. Good luck!")
    print("\nHere’s your first hint:")
    print(f"Hint 1: {hints[hint_counter]}")  # Show the first hint
    hint_counter += 1

    # Game loop
    while attempts > 0:
        # Show the current progress of the word
        display_word = "".join([letter if letter in guessed_letters else "_" for letter in word_to_guess])
        print(f"\nCurrent word: {display_word}")

        # Check if the word is fully guessed
        if "_" not in display_word:
            print("🎉 Congratulations! You Passed!! 🎉")
            break

        # Ask the player for a guess
        guess = input("Enter a letter: ").lower()

        # Input validation
        if len(guess) != 1 or not guess.isalpha():
            print("Please Enter only a single letter.")
            continue

        # Check if the letter has already been guessed
        if guess in guessed_letters:
            print("Try another letter.")
        elif guess in word_to_guess:
            guessed_letters.append(guess)  # Add to guessed letters
            print(f"Nice! {guess} is in the word.")
        else:
            attempts -= 1  # Deduct one attempt for a wrong guess
            print(f"{guess} is incorrect. You have {attempts} attempts left.")
            
            # Show the next hint if there are any remaining
            if hint_counter < len(hints):
                print(f"Hint {hint_counter + 1}: {hints[hint_counter]}")
                hint_counter += 1

        # If attempts run out, the game is over
        if attempts == 0:
            print(f"\nGame Over! 😔 The word was: '{word_to_guess}'.")
            break

# Call the function to start the game
word_guessing_game()
