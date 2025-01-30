import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ayyappa",
  initials: "PSC",
  url: "https://github.com/ayyappa53",
  location: "Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Andhra+Pradesh",
  description:
    "Full Stack Developer passionate about building efficient and scalable applications.",
  summary:
    "I'm currently pursuing my Bachelor's degree at SRM University, AP. I have experience working as a Full Stack Developer, contributing to both frontend and backend projects. Additionally, I have worked on multiple real-world projects, showcasing my ability to build scalable and efficient applications.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Git",
    "DBMS",
    "SQL",
    "Django",
    "HTMl/CSS",
    "Tailwind Css",
    "Bootstrap"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ayyappachowdarykandula@gmail.com",
    tel: "+917396933969",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ayyappa53",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayyappa-kandula-50748724b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/___Ayyappa___",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:ayyappachowdarykandula@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "APSSDC",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Django Intern",
      logoUrl: "/bragtechhq_logo.png",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "I developed web applications using the Django framework, showcasing my proficiency in Python and its extensive application in Django development. I worked with various technologies, including HTML, Bootstrap, MySQL, SQLite, and device-admin features, to create efficient and functional web solutions. Additionally, I gained valuable experience in real-time database management and storage solutions, enhancing my skills in building robust and scalable web applications.",
    },
  ],
  projects: [
    {
      title: "Tail",
      href: "https://github.com/ayyappa53/Tail",
      dates: "2023",
      active: true,
      description:
        "Developed Tail, a sleek and fast web application using React.js and Tailwind CSS, featuring an intuitive UI for seamless browsing and interaction.",
      technologies: ["React", "TailwindCSS"],
      links: [],
      image: "/Tail.png",
      video:
        "",
    },
    {
      title: "Shopify",
      href: "https://github.com/ayyappa53/shopify",
      dates: "2023",
      active: true,
      description:
        "Developed a Shopify website using React.js, JavaScript, Bootstrap, and CSS, featuring a user-friendly interface, product listings, shopping cart.",
      technologies: ["React.js", "HTML/CSS", "TailwindCSS"],
      links: [],
      image: "/shopify.png",
      video:
        "",
    },
    {
      title: "Chat Ease",
      href: "https://github.com/ayyappa53/Chat-Ease",
      dates: "2023",
      active: true,
      description:
        "A private multi-chat messenger built using React.js, Tailwind CSS, and Firebase. Features include login, registration, image reserving, and real-time messaging powered by Firebase backend.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      links: [],
      image: "/connect.png",
      video: "",
    },
    {
      title: "Nucleus",
      href: "https://github.com/ayyappa53/Nucleus",
      dates: "2023",
      active: true,
      description:
        "Developed Nucleus, a chatbox application using React.js, ShadCN UI, and Tailwind CSS. Features include real-time messaging with randomly generated responses, ensuring a smooth and engaging user experience",
      technologies: ["React.js", "Tailwind CSS", "ShadCN UI"],
      links: [],
      image: "/Nucleus.png",
      video: "",
    },
  ],
  hackathons: [
    
  ],
  education: [
    {
      degree: "Bachelor’s Degree in Computer Science",
      school: "SRM University, Andhra Pradesh",
      gpa: "8.15/10.0",
      logoUrl: "/srmap.png",
      href: "https://srmap.edu.in/",
      start: "2021",
      end: "2025",
    },
  ],
} as const;
