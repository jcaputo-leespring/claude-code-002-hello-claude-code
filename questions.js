// ============================================================
// YOUR QUIZ — edit this file to make it yours!
// ============================================================
//
// This is the only file you need to change.
// Ask Claude to help you add questions, update the answers,
// and write results messages that fit your personality.
//
// HOW IT WORKS:
//   - Add as many questions as you like to the array below
//   - Each question has 4 options and one correct answer
//   - "correct" is the index of the right answer (0, 1, 2, or 3)
//   - The results messages show based on how well the quiz-taker scores
// ============================================================

const quizConfig = {

  // Your name — shown on the intro screen
  name: "Joe",

  // The tagline shown under your name on the intro screen
  intro: "Think you know me? There's only one way to find out.",

  // Messages shown on the results screen based on score
  results: {
    high: "You really know me! We must be close. 🎉",   // 80% or above
    mid:  "Not bad — but there's definitely more to learn about me.",  // 50–79%
    low:  "Looks like we need to hang out more. Come find me!",        // below 50%
  },

  // Your questions — replace these two examples with your own!
  questions: [
    {
      question: "What is my name?",
      options: ["Mike", "Dave", "Joe", "Steve"],
      correct: 2,  // Joe
    },
    {
      question: "What is my favorite food?",
      options: ["Pizza", "Steak", "Sushi", "Tacos"],
      correct: 1,  // Steak
    },
    {
      question: "What is my favorite programming language?",
      options: ["Python", "JavaScript", "Java", "C++"],
      correct: 3,  // C++
    },
    {
      question: "What is my favorite operating system?",
      options: ["macOS", "Windows", "Linux", "ChromeOS"],
      correct: 0,  // macOS
    },
    {
      question: "What is my favorite video game?",
      options: ["Final Fantasy VII", "The Legend of Zelda: Ocarina of Time", "Final Fantasy XII", "Skyrim"],
      correct: 2,  // Final Fantasy XII
    },
    {
      question: "What is my favorite color?",
      options: ["Blue", "Black", "Red", "Green"],
      correct: 1,  // Black
    },
    {
      question: "What is my favorite sport?",
      options: ["Basketball", "Baseball", "Hockey", "Soccer"],
      correct: 3,  // Soccer
    },
    {
      question: "Who is my favorite superhero?",
      options: ["Superman", "Batman", "Spider-Man", "Iron Man"],
      correct: 0,  // Superman
    },
  ],

};
