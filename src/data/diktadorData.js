// Centralized data file for Diktador! Card Game Microsite
// Edit this file to update Diktador page content without touching components

export const diktadorNav = [
  { label: 'About', to: 'dk-about' },
  { label: 'Roles', to: 'dk-cards' },
  { label: 'Pre-Order', to: 'dk-event' },
];

export const diktadorHero = {
  tagline: 'A Card Game of Power, Resistance, and Survival',
  subtitle: 'By Project Gunita × Concerned Artists of the Philippines',
};

export const diktadorAbout = {
  title: 'What is Diktador!?',
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
