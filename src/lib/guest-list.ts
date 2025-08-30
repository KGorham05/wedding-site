// Guest list for invitation verification
// This will be used to authenticate guests and pre-populate their information

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  category: 'family' | 'friends' | 'colleagues' | 'plus-one' | 'admin';
  notes?: string;
  isAdmin?: boolean;
}

export interface GuestData {
  guest: Guest;
  firstName: string;
  lastName: string;
  email: string;
  totalGuests: number;
  // Original party composition from check-in (immutable constraints)
  maxAdults: number;
  maxChildren: number;
  // Current RSVP selections (can vary per day, but <= max values)
  adults: number;
  children: number;
  childrenAges: number[];
  // Names of children in the party (parallel to children count)
  childrenNames: string[];
  dietaryRestrictions: string;
  specialRequests: string;
  // Whether guest has declined attending (can toggle back later)
  declined?: boolean;
  checkedInAt: string;
  lastCompletedDay?: number;
  completedAt?: string;
  day1?: {
    // Sound bath/yoga attendee counts
    adults: number;
    children: number;
  };
  day2?: {
    // Adventure selections
    whitewaterRafting: number;
    scenicFloat: number;
    horsebackRiding: number;
    hatMaking: number;
  };
  day3?: {
    recoveryPlan: string;
    outdoorActivities: string[];
    hikingLevel: string;
    groupActivities: string[];
    relaxationPreference: string;
    energyRecovery: number;
    // RSVP counts for wedding day
    adults: number;
    children: number;
  };
  day4?: {
    farewellStyle: string;
    groupMemories: string[];
    finalActivities: string[];
    memorabilia: string;
    futureConnections: string;
    overallExperience: number;
    specialMoments: string;
    // RSVP counts for Yellowstone & BBQ day
    adults: number;
    children: number;
  };
  day5?: {
    departureTime: string;
    transportationNeeds: boolean;
    finalWishes: string;
    testimonial: string;
    futureEvents: string[];
    gratitude: string;
    stayConnected: string;
    finalRating: number;
  };
}

// Sample guest list - replace with actual guest data
export const GUEST_LIST: Guest[] = [
  // Angela's Family
  { id: 'ang-001', firstName: 'Sarah', lastName: 'Johnson', email: 'sarah.j@email.com', category: 'family', notes: 'Angela\'s sister, 2 kids' },
  { id: 'ang-002', firstName: 'Mike', lastName: 'Johnson', email: 'mike.j@email.com', category: 'family', notes: 'Angela\'s brother' },
  { id: 'ang-003', firstName: 'Linda', lastName: 'Anderson', email: 'linda.a@email.com', category: 'family', notes: 'Angela\'s mom' },
  { id: 'ang-004', firstName: 'Tom', lastName: 'Anderson', email: 'tom.a@email.com', category: 'family', notes: 'Angela\'s dad' },
  
  // Jeff's Family  
  { id: 'jeff-001', firstName: 'Jessica', lastName: 'Williams', email: 'jess.w@email.com', category: 'family', notes: 'Jeff\'s sister, 1 kid' },
  { id: 'jeff-002', firstName: 'David', lastName: 'Williams', email: 'david.w@email.com', category: 'family', notes: 'Jeff\'s brother' },
  { id: 'jeff-003', firstName: 'Nancy', lastName: 'Thompson', email: 'nancy.t@email.com', category: 'family', notes: 'Jeff\'s mom' },
  { id: 'jeff-004', firstName: 'Robert', lastName: 'Thompson', email: 'robert.t@email.com', category: 'family', notes: 'Jeff\'s dad' },
  
  // Friends
  { id: 'friend-001', firstName: 'Emma', lastName: 'Davis', email: 'emma.d@email.com', category: 'friends', notes: 'College friend' },
  { id: 'friend-002', firstName: 'Ryan', lastName: 'Martinez', email: 'ryan.m@email.com', category: 'friends', notes: 'Work colleague' },
  { id: 'friend-003', firstName: 'Ashley', lastName: 'Wilson', email: 'ashley.w@email.com', category: 'friends', notes: 'Bridesmaid' },
  { id: 'friend-004', firstName: 'Chris', lastName: 'Brown', email: 'chris.b@email.com', category: 'friends', notes: 'Best man' },
  
  // Development & Testing
  { id: 'dev-001', firstName: 'Kevin', lastName: 'Gorham', email: 'kevin.gorham@email.com', category: 'admin', notes: 'Website developer', isAdmin: true },
  { id: 'admin-001', firstName: 'Angela', lastName: 'Pinamonit', email: 'angela.pinamonit@email.com', category: 'admin', notes: 'Bride', isAdmin: true },
  { id: 'admin-002', firstName: 'Jeff', lastName: 'Schweizer', email: 'jeff.schweizer@email.com', category: 'admin', notes: 'Groom', isAdmin: true },
  { id: 'test-001', firstName: 'Test', lastName: 'User', email: 'test.user@email.com', category: 'friends', notes: 'Test account for development' },
];

export function findGuest(firstName: string, lastName: string): Guest | null {
  const normalizedFirst = firstName.toLowerCase().trim();
  const normalizedLast = lastName.toLowerCase().trim();
  
  return GUEST_LIST.find(guest => 
    guest.firstName.toLowerCase() === normalizedFirst && 
    guest.lastName.toLowerCase() === normalizedLast
  ) || null;
}

export function findGuestById(id: string): Guest | null {
  return GUEST_LIST.find(guest => guest.id === id) || null;
}
