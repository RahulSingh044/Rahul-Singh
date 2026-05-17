export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  href: string;
}

export const Project: ProjectItem[] = [
  {
    id: "1",
    title: "Damas",
    category: "Agency Framer Template",
    imageSrc: "/damas-preview.jpg",
    href: "/projects/damas",
  },
  {
    id: "2",
    title: "Good First Guide",
    category: "Open Source Contribution Platform",
    imageSrc: "/projects/GFG-cover.png",
    href: "/projects/good-first-guide",
  },
  {
    id: "3",
    title: "Rent It Right",
    category: "Backend Architecture / Marketplace",
    imageSrc: "/projects/RIR-cover.png",
    href: "/projects/rent-it-right",
  },
  {
    id: "4",
    title: "Medi Care",
    category: "Hospital Management System",
    imageSrc: "/projects/MediCare-cover.png",
    href: "/projects/medicare",
  },
];
