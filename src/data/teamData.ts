export interface TeamMember {
  id: string;
  name: string;
  role: 'executive' | 'team';
  position: string;
  phone?: string;
  email?: string;
  imageUrl: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'dawit-desalegn',
    name: 'Dawit Desalegn',
    role: 'executive',
    position: 'Chief Executive Officer & Owner',
    phone: '0918341194',
    email: 'dawitdesalegn@gmail.com',
    imageUrl: 'https://cdn.corenexis.com/f/SNStXkBD.jpg',
    bio: 'Directs overall corporate strategy, origin farm-gate procurement, and international trade relations at Shumabo Import & Export.'
  },
  {
    id: 'yeshimebet-bizuayehu',
    name: 'Yeshimebet Bizuayehu',
    role: 'executive',
    position: 'Vice Chief Executive Officer',
    phone: '0974498444',
    email: 'dawitdesalegn@gmail.com',
    imageUrl: 'https://cdn.corenexis.com/f/0KKWAF32.jpg',
    bio: 'Oversees operational logistics, statutory compliance, quality assurance, and financial administration for export consignments.'
  },
  {
    id: 'philmon-dawit',
    name: 'Philmon Dawit',
    role: 'team',
    position: 'Sales Representative',
    email: 'dawitdesalegn@gmail.com',
    imageUrl: 'https://cdn.corenexis.com/f/czghP3M9.jpg',
    bio: 'Manages wholesale buyer communications, product inquiry processing, and initial quotation scheduling for international clients.'
  },
  {
    id: 'nathan-dawit',
    name: 'Nathan Dawit',
    role: 'team',
    position: 'Digital Marketing Manager',
    phone: '0900838981',
    email: 'nathandawit247@gmail.com',
    imageUrl: 'https://cdn.corenexis.com/f/pZwmf66u.jpg',
    bio: 'Directs digital brand presence, buyer engagement channels, and international web communications for Shumabo trading desk.'
  }
];
