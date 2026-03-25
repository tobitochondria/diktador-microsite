// Centralized data file for Diktador! Card Game Microsite
// Edit this file to update Diktador page content without touching components

export const diktadorNav = [
  { label: 'About', to: 'dk-about' },
  { label: 'Roles', to: 'dk-cards' },
  { label: 'Launch Event', to: 'dk-event' },
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
    image: '/assets/images/diktador/activist-card.png',
  },
  {
    id: 2,
    name: 'The Businessperson',
    description: 'The pragmatist torn between self-preservation and moral duty.',
    image: '/assets/images/diktador/businessperson-card.png',
  },
  {
    id: 3,
    name: 'The Journalist',
    description: 'The seeker of truth who risks everything to tell the story.',
    image: '/assets/images/diktador/journalist-card.png',
  },
  {
    id: 4,
    name: 'The Lawyer',
    description: 'The defender of rights who challenges abuses of power and protects the vulnerable through the rule of law.',
    image: '/assets/images/diktador/lawyer-card.png',
  },
  {
    id: 5,
    name: 'The Opposition Politician',
    description: 'The insider trying to speak truth within a corrupt system.',
    image: '/assets/images/diktador/politician-card.png',
  },
  {
    id: 6,
    name: 'The Religious Leader',
    description: 'The guardian of communities who offers refuge, resources, and moral strength in times of fear and repression.',
    image: '/assets/images/diktador/religious-card.png',
  },
  {
    id: 7,
    name: 'The Revolutionary',
    description: 'The underground fighter who believes change must come by force or defiance.',
    image: '/assets/images/diktador/rev-card.png',
  },
];

export const diktadorEvent = {
  title: 'Game Launch Event',
  description: 'Be among the first to experience Diktador! Join us for the official launch event featuring live gameplay demos, a Q&A with the creators, and exclusive first-edition copies.',
  details: [
    { icon: 'bi-calendar-event', label: 'Date', value: 'March 30, 2026' },
    { icon: 'bi-clock', label: 'Time', value: '6:00 PM – 9:00 PM' },
    { icon: 'bi-geo-alt', label: 'Venue', value: 'Quezon City (exact venue to be announced)' },
    { icon: 'bi-people', label: 'Slots', value: 'Limited slots available' },
  ],
  signupUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdaNWAd_NzhCP63hvd_d9QsClSSYgftk1v_qBrQdpfLr0HMTA/viewform',
  signupLabel: 'Sign Up for the Launch Event',
};
