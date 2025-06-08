const imageData = [
  {
    image_id: 1,
    name: 'Spring Day',
    description: 'A heartwarming song about longing and reunion.',
    category: 'Healing',
    url: 'https://unsplash.com/photos/3Z70SDuYs5g',
    benefits: 'Brings comfort and emotional warmth.',
    posture: 'Listening',
    difficulty: 'Beginner'
  },
  {
    image_id: 2,
    name: 'Dynamite',
    description: 'A bright, disco-pop track that lifts your energy.',
    category: 'Energetic',
    url: 'https://unsplash.com/photos/8manzosRGPE',
    benefits: 'Boosts mood and confidence.',
    posture: 'Dancing',
    difficulty: 'Beginner'
  },
  {
    image_id: 3,
    name: 'Butter',
    description: 'A smooth and catchy pop song full of confidence.',
    category: 'Groovy',
    url: 'https://unsplash.com/photos/0fN7Fxv1eWA',
    benefits: 'Improves self-expression and energy.',
    posture: 'Grooving',
    difficulty: 'Beginner'
  },
  {
    image_id: 4,
    name: 'Life Goes On',
    description: 'A gentle reminder that time heals all wounds.',
    category: 'Soothing',
    url: 'https://unsplash.com/photos/0A3e4l88Zxg',
    benefits: 'Relieves anxiety and promotes peace.',
    posture: 'Reflective',
    difficulty: 'Beginner'
  },
  {
    image_id: 5,
    name: 'Boy With Luv',
    description: 'An upbeat track about the beauty of small moments.',
    category: 'Romantic',
    url: 'https://unsplash.com/photos/2d4lAQAlbDA',
    benefits: 'Inspires joy and appreciation.',
    posture: 'Playful',
    difficulty: 'Beginner'
  },
  {
    image_id: 6,
    name: 'Fake Love',
    description: 'A powerful message about self-discovery and pain.',
    category: 'Emotional',
    url: 'https://unsplash.com/photos/3I2vzcmEpLU',
    benefits: 'Encourages introspection.',
    posture: 'Deep Listening',
    difficulty: 'Intermediate'
  },
  {
    image_id: 7,
    name: 'Run BTS',
    description: 'A hype track about energy, passion, and hustle.',
    category: 'Motivational',
    url: 'https://unsplash.com/photos/4V1dC_eoCwg',
    benefits: 'Boosts adrenaline and motivation.',
    posture: 'Hyped',
    difficulty: 'Intermediate'
  },
  {
    image_id: 8,
    name: 'Euphoria',
    description: 'A dreamy pop ballad of hope and love.',
    category: 'Uplifting',
    url: 'https://unsplash.com/photos/6VhPY27jdps',
    benefits: 'Enhances hope and imagination.',
    posture: 'Uplifted',
    difficulty: 'Beginner'
  },
  {
    image_id: 9,
    name: 'Black Swan',
    description: 'An artistic piece about fear and creativity.',
    category: 'Artistic',
    url: 'https://unsplash.com/photos/1K9T5YiZ2WU',
    benefits: 'Connects to inner fears and expression.',
    posture: 'Contemplative',
    difficulty: 'Advanced'
  },
  {
    image_id: 10,
    name: 'No More Dream',
    description: 'A bold track questioning societal expectations.',
    category: 'Rebellious',
    url: 'https://unsplash.com/photos/5QgIuuBxKwM',
    benefits: 'Encourages independent thinking.',
    posture: 'Reflective',
    difficulty: 'Beginner'
  },
  {
    image_id: 11,
    name: 'ON',
    description: 'An anthem of resilience and fight.',
    category: 'Strong',
    url: 'https://unsplash.com/photos/1K9T5YiZ2WU',
    benefits: 'Strengthens mental stamina.',
    posture: 'Empowered',
    difficulty: 'Intermediate'
  },
  {
    image_id: 12,
    name: 'Yet to Come',
    description: 'A reflective promise of a bright future.',
    category: 'Hopeful',
    url: 'https://unsplash.com/photos/0A3e4l88Zxg',
    benefits: 'Promotes optimism.',
    posture: 'Looking Forward',
    difficulty: 'Beginner'
  },
  {
    image_id: 13,
    name: 'Blue & Grey',
    description: 'A song about hidden sadness and mental health.',
    category: 'Comfort',
    url: 'https://unsplash.com/photos/3I2vzcmEpLU',
    benefits: 'Creates emotional space for healing.',
    posture: 'Soothed',
    difficulty: 'Intermediate'
  },
  {
    image_id: 14,
    name: 'Magic Shop',
    description: 'A healing track offering comfort to fans.',
    category: 'Healing',
    url: 'https://unsplash.com/photos/2d4lAQAlbDA',
    benefits: 'Brings emotional support and comfort.',
    posture: 'Safe',
    difficulty: 'Beginner'
  },
  {
    image_id: 15,
    name: 'Fire',
    description: 'An energetic banger about letting go.',
    category: 'Wild',
    url: 'https://unsplash.com/photos/4V1dC_eoCwg',
    benefits: 'Releases stress, uplifts spirit.',
    posture: 'Free',
    difficulty: 'Intermediate'
  },
  {
    image_id: 16,
    name: 'Save Me',
    description: 'A desperate cry for help and connection.',
    category: 'Emotional',
    url: 'https://unsplash.com/photos/3Z70SDuYs5g',
    benefits: 'Acknowledges vulnerability and need.',
    posture: 'Open',
    difficulty: 'Beginner'
  },
  {
    image_id: 17,
    name: 'I Need U',
    description: 'A classic about pain and love.',
    category: 'Heartfelt',
    url: 'https://unsplash.com/photos/0fN7Fxv1eWA',
    benefits: 'Helps process heartbreak.',
    posture: 'Emotional',
    difficulty: 'Intermediate'
  },
  {
    image_id: 18,
    name: 'Idol',
    description: 'An empowering celebration of self-love.',
    category: 'Confident',
    url: 'https://unsplash.com/photos/8manzosRGPE',
    benefits: 'Builds self-esteem and pride.',
    posture: 'Confident',
    difficulty: 'Beginner'
  },
  {
    image_id: 19,
    name: 'Pied Piper',
    description: 'A playful warning about obsession.',
    category: 'Playful',
    url: 'https://unsplash.com/photos/5QgIuuBxKwM',
    benefits: 'Raises self-awareness humorously.',
    posture: 'Cheeky',
    difficulty: 'Beginner'
  },
  {
    image_id: 20,
    name: 'Serendipity',
    description: 'A sweet solo about love and fate.',
    category: 'Romantic',
    url: 'https://unsplash.com/photos/6VhPY27jdps',
    benefits: 'Soothes and charms the heart.',
    posture: 'Relaxed',
    difficulty: 'Beginner'
  },
  {
    image_id: 21,
    name: 'Epiphany',
    description: 'A powerful song about self-love and acceptance.',
    category: 'Reflective',
    url: 'https://unsplash.com/photos/0A3e4l88Zxg',
    benefits: 'Encourages self-acceptance and love.',
    posture: 'Healing',
    difficulty: 'Beginner'
  }
];
