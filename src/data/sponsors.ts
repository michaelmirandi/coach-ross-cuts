export interface Sponsor {
  name: string;
  category: "Partner Agency" | "Restaurant Sponsor" | "Small Business Sponsor";
  contactName?: string;
  addressLines?: string[];
  note?: string;
  logoPath?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Star of Hope",
    category: "Partner Agency",
    logoPath: "/star-of-hope.jpg",
  },
  {
    name: "Moving Waters",
    category: "Partner Agency",
    contactName: "Jenn Park",
    logoPath: "/moving-waters.webp",
  },
  {
    name: "Covenant House Texas",
    category: "Partner Agency",
    logoPath: "/covenant-house-texas.svg",
  },
  {
    name: "Chick-fil-A - Pearland",
    category: "Restaurant Sponsor",
    contactName: "Bryan Bullington",
    logoPath: "/chick-fil-a.svg",
  },
  {
    name: "McDonald's - Houston",
    category: "Restaurant Sponsor",
    contactName: "Stephanie Oliver-Parrish",
    logoPath: "/mcdonalds.webp",
  },
  {
    name: "Miracle Mile",
    category: "Small Business Sponsor",
    contactName: "James Campen",
  },
  {
    name: "Empire Barber Studio",
    category: "Small Business Sponsor",
    contactName: "Julian Diaz",
    logoPath: "/empire-barber-studio.png",
  },
  {
    name: "Oasis Luxury Med Spa",
    category: "Small Business Sponsor",
    logoPath: "/oasis-spa.webp",
  },
  {
    name: "Olive Garden - Spring Branch",
    category: "Restaurant Sponsor",
    contactName: "General Manager Chris",
    logoPath: "/olive-garden.png",
  },
  {
    name: "Tune Up Manly Salon",
    category: "Small Business Sponsor",
    contactName: "Nick Watson / Erin Dewalt",
    logoPath: "/tune-up.png",
  },
];
