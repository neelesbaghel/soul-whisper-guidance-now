
export interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  imageSrc: string;
}

export const meditations: Meditation[] = [
  {
    id: 'meditation1',
    title: 'Morning Mindfulness',
    description: 'Start your day with clarity and intention with this gentle mindfulness practice.',
    duration: '10 min',
    level: 'Beginner',
    category: 'Mindfulness',
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'meditation2',
    title: 'Loving Kindness',
    description: 'Cultivate compassion and loving kindness toward yourself and others.',
    duration: '15 min',
    level: 'Beginner',
    category: 'Compassion',
    imageSrc: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'meditation3',
    title: 'Deep Relaxation',
    description: 'Release tension and discover deep states of relaxation and peace.',
    duration: '20 min',
    level: 'Intermediate',
    category: 'Relaxation',
    imageSrc: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'meditation4',
    title: 'Chakra Balancing',
    description: 'Balance your energy centers and restore harmony to mind and body.',
    duration: '25 min',
    level: 'Intermediate',
    category: 'Energy Work',
    imageSrc: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'meditation5',
    title: 'Inner Wisdom',
    description: 'Connect with your inner guidance and access the wisdom within.',
    duration: '15 min',
    level: 'Beginner',
    category: 'Spiritual',
    imageSrc: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'meditation6',
    title: 'Deep Awareness',
    description: 'Explore the depths of awareness and consciousness beyond thought.',
    duration: '30 min',
    level: 'Advanced',
    category: 'Spiritual',
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
  }
];
