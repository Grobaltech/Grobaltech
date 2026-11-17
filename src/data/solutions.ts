export type Solution = {
  slug: string
  name: string
  category: string
  summary: string
  description: string
  capabilities: string[]
  image: string
}

export const solutions: Solution[] = [
  {
    slug: 'assomac-business-platform',
    name: 'Assomac Business Platform',
    category: 'Business operations',
    summary: 'A connected operations platform for branches, teams, stock and field activity.',
    description: 'A business operations platform designed to bring branch activity, workforce coordination, inventory movement and reporting into one connected workspace.',
    capabilities: ['Branch-based operations and access control', 'Worker and field team management', 'Inventory, stock movement and consignments', 'Operational reporting and oversight'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'tidori-ministries',
    name: 'Tidori Ministries',
    category: 'Community and ministry',
    summary: 'A digital community experience connecting members, ministry teams and services.',
    description: 'A digital ministry experience bringing community information, events, communication and online services into a coordinated platform.',
    capabilities: ['Community and member experiences', 'Events and appointment journeys', 'Digital communication tools', 'Online giving and payment integrations'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'steadfast-consultants',
    name: 'Steadfast Consultants',
    category: 'Professional services',
    summary: 'A modern digital presence with online services and integrated payment journeys.',
    description: 'A professional services website and digital experience designed to make information, enquiries, cultural resources and online transactions more accessible.',
    capabilities: ['Responsive business website', 'Online enquiries and customer communication', 'Digital publications and resources', 'Integrated payment experience'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
  },
]
