// Centralized data file for Diktador! Card Game Microsite
// Edit this file to update Diktador page content without touching components

export const diktadorNav = [
  { label: 'About', to: 'dk-about' },
  { label: 'How it Works', to: 'dk-howitworks' },
  { label: 'Roles', to: 'dk-cards' },
  { label: 'Pre-Order', to: 'dk-event' },
  { label: 'Contact', to: 'dk-contact' },
  { label: 'FAQ', to: '/faq', isPage: true },
];

export const diktadorHero = {
  tagline: 'A Card Game of Power, Resistance, and Survival',
  subtitle: 'By Project Gunita × Concerned Artists of the Philippines',
};

export const diktadorAbout = {
  title: 'What is "Diktador!"?',
  paragraphs: [
    'Diktador! is a strategic card game set against the backdrop of authoritarian rule. Players take on the roles of citizens navigating the tension between complicity and resistance under a dictatorship.',
    'Developed in collaboration between Project Gunita and the Concerned Artists of the Philippines (CAP), the game transforms the weight of history into an interactive, thought-provoking experience — making the lessons of the Martial Law era accessible through play.',
    'Each role card represents a real archetype from Philippine history: people who resisted, people who collaborated, and people caught in between. Your choices shape the outcome.',
  ],
};

export const diktadorRoles = [
  {
    id: 1,
    name: 'The Activist',
    description: 'The organizer who turns frustration into collective action.',
    image: '/assets/images/cards/activist-card.png',
  },
  {
    id: 2,
    name: 'The Businessperson',
    description: 'The pragmatist torn between self-preservation and moral duty.',
    image: '/assets/images/cards/businessperson-card.png',
  },
  {
    id: 3,
    name: 'The Journalist',
    description: 'The seeker of truth who risks everything to tell the story.',
    image: '/assets/images/cards/journalist-card.png',
  },
  {
    id: 4,
    name: 'The Lawyer',
    description: 'The defender of rights who challenges abuses of power and protects the vulnerable through the rule of law.',
    image: '/assets/images/cards/lawyer-card.png',
  },
  {
    id: 5,
    name: 'The Opposition Politician',
    description: 'The insider trying to speak truth within a corrupt system.',
    image: '/assets/images/cards/politician-card.png',
  },
  {
    id: 6,
    name: 'The Religious Leader',
    description: 'The guardian of communities who offers refuge, resources, and moral strength in times of fear and repression.',
    image: '/assets/images/cards/religious-card.png',
  },
  {
    id: 7,
    name: 'The Revolutionary',
    description: 'The underground fighter who believes change must come by force or defiance.',
    image: '/assets/images/cards/rev-card.png',
  },
];

export const diktadorPreorder = {
  description: 'Secure your copy of Diktador! before it sells out. First-edition copies are limited — fill out the form and we\'ll get in touch with the details.',
  formUrl: 'https://forms.gle/e6pecVJktTn4Ptn26',
  ctaLabel: 'Pre-Order Now',
};

export const diktadorHowToPlay = {
  text: 'You and your friends play as ordinary people, activists, cultural workers, and communities navigating surveillance, propaganda, and state violence. Each round, you make choices, form alliances, and imagine what resistance can look like when the stakes are life, memory, and freedom. The game is facilitated by a game master or the',
  facilitator: 'Diktador',
  images: [
    '/assets/images/irl/howtoplay-1.png',
    '/assets/images/irl/howtoplay-2.png',
    '/assets/images/irl/howtoplay-3.png',
  ],
};

export const diktadorFaq = [
  {
    question: 'Is this game historically accurate?',
    answer: 'Diktador! features campaigns from real life events from the Martial Law era; however, the game encourages creativity from the players as they embody their own characters.',
  },
  {
    question: 'How long is a game?',
    answer: 'A typical campaign takes about 1 hour to play, depending on the number of players and how much discussion happens during the session.',
  },
  {
    question: 'Is it suitable for young people, particularly students? What are the recommended ages?',
    answer: 'Yes! \'Diktador!\' is recommended as a teaching tool for young students, particularly, ages 16 and above, to learn about Martial Law history in a more engaging manner.\n\nAside from young students, in our latest play test, even actual Martial Law survivors were able to keep up, understand the mechanics, and enjoy the game!',
  },
  {
    question: 'How many people does it take to play?',
    answer: 'At least three people (1 Diktador, 2 character-players).',
  },
  {
    question: 'When can we expect to receive our pre-orders?',
    answer: 'We are targeting the production to start early in April, so you may receive your pre-orders by the last week of April or early May. We will regularly update you on this matter as we make sure that we provide you with the best version of \'Diktador!\'.',
  },
  {
    question: 'Can we invite you to run a game or workshop?',
    answer: 'Yes, subject to schedule and resources. Use the contact form, and we\'ll coordinate with you or your institution.',
  },
];

export const diktadorSchedule = {
  title: 'Schedule a Game Night',
  description: 'Bring Diktador! to your school, org, or community space. Sign up through this form:',
  formUrl: 'https://forms.gle/csSzF9gDipkKWYxd8',
  ctaLabel: 'Schedule a Game Night with Us',
};

export const diktadorContact = {
  text: 'You may reach us through our official social media channels on Facebook or Instagram.',
  facebook: 'https://www.facebook.com/profile.php?id=61588054023589',
  instagram: 'https://www.instagram.com/diktadorcardgame2026/',
};
