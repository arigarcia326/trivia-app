export const triviaData = [
  //Math Trivia Questions
  {
    triviaName: 'Math',
    triviaItems: [
      {
        prompt: 'What is 6 + 11?',
        answer: "",
        type: 'user-input',
        correctAnswer: '17'
      },
      {
        prompt: 'What is 2 x 4?',
        answer: "",
        type: 'user-input',
        correctAnswer: '8'
      },
      {
        prompt: 'What is 15 / 3?',
        answer: "",
        type: 'user-input',
        correctAnswer: '5'
      },
      {
        prompt: 'What is 2 + 4 + 15?',
        answer: "",
        type: 'user-input',
        correctAnswer: '21'
      },
      {
        prompt: 'What is 2 - 4?',
        answer: "",
        type: 'user-input',
        correctAnswer: '-2'
      }
    ]
  },
  //Shapes Trivia Questions
  {
    triviaName: 'Shapes',
    triviaItems: [
      {
        prompt: 'How many sides does a rectangle have?',
        answer: "",
        type: 'user-input',
        userAnswer: [],
        correctAnswer: '4'
      },
      {
        prompt: 'How many angles does a triangle have?',
        answer: "",
        type: 'user-input',
        userAnswer: [],
        correctAnswer: '3'
      },
      {
        prompt: 'How many sides does a trapezoid have?',
        answer: "",
        type: 'user-input',
        userAnswer: [],
        correctAnswer: '4'
      },
      {
        prompt: 'How many edges does a cube have?',
        answer: "",
        type: 'user-input',
        userAnswer: [],
        correctAnswer: '12'
      },
      {
        prompt: 'How many sides does an octogon have?',
        answer: "",
        type: 'user-input',
        userAnswer: [],
        correctAnswer: '8'
      },
    ]
  },
  {
    triviaName: 'Capitols',
    triviaItems: [
      {
        prompt: 'Match the state to its capitol.',
        answer: [
          {option: 'Florida', value: 'Tallahassee'},
          {option: 'Arizona', value: 'Phoenix'},
          {option: 'Utah', value: 'Salt Lake City'},
          {option: 'New Jersey', value: 'Trenton'},
          {option: 'Oregon', value: 'Salem'},
          {option: 'Boston', value: 'Massachusetts'}
        ],
        type: 'matching',
        userAnswer: [],
        correctAnswer: [
          {option: 'Florida', value: 'Tallahassee'},
          {option: 'Arizona', value: 'Phoenix'},
          {option: 'Utah', value: 'Salt Lake City'},
          {option: 'New Jersey', value: 'Trenton'},
          {option: 'Oregon', value: 'Salem'},
          {option: 'Boston', value: 'Massachusetts'}
        ]
      }
    ]
  },
  {
    triviaName: 'Inventors',
    triviaItems: [
      {
        prompt: 'Match the inventors with their inventions.',
        answer: [
          {option: 'Thomas Edison', value: 'light bulb'},
          {option: 'Alexander Graham Bell', value: 'telephone'},
          {option: 'Gabriel Farenheit', value: 'thermometer'},
          {option: 'Peter Henlein', value: 'watch' },
          {option: 'Samuel Morse', value: 'telegraph'},
          {option: 'Karl Benz', value: 'automobile'}
        ],
        type: 'matching',
        userAnswer: [],
        correctAnswer: [
          {option: 'Thomas Edison', value: 'light bulb'},
          {option: 'Alexander Graham Bell', value: 'telephone'},
          {option: 'Gabriel Farenheit', value: 'thermometer'},
          {option: 'Peter Henlein', value: 'watch' },
          {option: 'Samuel Morse', value: 'telegraph'},
          {option: 'Karl Benz', value: 'automobile'}
        ]
      }
    ]
  },
  {
    triviaName: 'Spelling',
    triviaItems: [
      {
        prompt: 'His _____ was noticeable.',
        options: [
          {label: 'absence'},
          {label: 'absense'},
          {label: 'absance'},
          {label: 'abcense'}
        ],
        correctAnswer: {label: 'absence'},
        type: 'drop-down'
      },
      {
        prompt: 'I want to make sure I _____ her presence.',
        options: [
          {label: 'acknowlege'},
          {label: 'aknowledge'},
          {label: 'acknowledge'},
          {label: 'acknowlege'}
        ],
        correctAnswer:{label: 'acknowledge'},
        type: 'drop-down'
      },
      {
        prompt: 'I _____ know what I am doing!',
        options: [
          {label: 'definately'},
          {label: 'definitly'},
          {label: 'definatly'},
          {label: 'definitely'}
        ],
        correctAnswer:{label: 'definitely'},
        type: 'drop-down'
      },
      {
        prompt: 'I work hard to _____ success.',
        options: [
          {label: 'garantee'},
          {label: 'guarantee'},
          {label: 'garanty'},
          {label: 'garentee'}
        ],
        correctAnswer:{label: 'guarantee'},
        type: 'drop-down'
      }
    ]
  },
  {
    triviaName: 'Grammar',
    triviaItems: [
      {
        prompt: 'Do you think she _____ what the professor said?',
        options: [
          {label: 'understood'},
          {label: 'understand'},
          {label: 'understanding'},
          {label: 'understood it'}
        ],
        correctAnswer: 'understood',
        type: 'drop-down'
      },
      {
        prompt: 'He _____ extremely tired today.',
        options: [
          {label: 'looks'},
          {label: 'looking'},
          {label: 'look'},
          {label: 'looked'}
        ],
        correctAnswer: 'looks',
        type: 'drop-down'
      },
      {
        prompt: 'I have never _____ pickles before.',
        options: [
          {label: 'ate'},
          {label: 'eaten'},
          {label: 'eat'},
          {label: 'aten'}
        ],
        correctAnswer: 'eaten',
        type: 'drop-down'
      },
      {
        prompt: 'Yesterday, I _____ on the couch and fell asleep.',
        options: [
          {label: 'lied'},
          {label: 'lie'},
          {label: 'lay'},
          {label: 'layed'}
        ],
        correctAnswer: 'lied',
        type: 'drop-down'
      }
    ]
  }
]