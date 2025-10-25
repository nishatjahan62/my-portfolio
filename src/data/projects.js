const projects = [
 
  {
    id: 1,
    name: "Donate-A-Bite",
    image: "/public/donate-a-bite.png", 
    overview:
      " A local food donation platform where restaurants can share surplus food, charities can request pickups, and admins manage users and donations.",
    keyFeatures: [
      "Role-based dashboards for User, Charity, Restaurant, and Admin.",
      "Stripe payments for charity role requests.",
      "Secure login using Firebase Auth and JWT.",
      "CRUD operations for donations, requests, and reviews.",
      "Responsive design with Tailwind CSS and smooth alerts via SweetAlert2.",
    ],
    impact:
      "Helps reduce food waste and supports local charities through an easy-to-use digital platform.",
    tools: ["React", "Tailwind", "Firebase", "Stripe", "SweetAlert2", "JWT"],
    links: {
      live: "https://ph-b11-assignment-12.web.app/",
      frontend: "https://github.com/nishatjahan62/Donate-a-bite-project",
      backend: "https://github.com/nishatjahan62/Donate-a-bite-project-backend",
    },
  },
   {
    id: 2,
    name: "KnowledgeEdge",
    image: "/public/KnowledgeEdge.png", 
    overview:
      " An article-sharing platform where users can explore, publish, and engage with ideas that matter. Designed with modern web technologies and clean UI/UX to create a smooth learning and reading experience.",
    keyFeatures: [
      "Admin, Author, and User roles with specific permissions.",
      "Authenticated users can add, edit, delete, like, comment, and bookmark articles.",
      "Users can follow their favorite authors and view their published content.",
      "Firebase Auth, Google Sign-In, and JWT-protected routes for security.",
      "Express.js and MongoDB Atlas handle data and API operations efficiently.",
      "Built with Tailwind CSS, Framer Motion, and React-Hot-Toast for modern user interactions.",
    ],
    impact:
      "Empowers learners and writers to connect, share, and grow intellectually through meaningful content. Enhances community engagement with discussions and author-follower interactions.",
    tools: ["React", "Tailwind", "Framer Motion", "Firebase", "MongoDB", "Express", "JWT"],
    links: {
      live: "https://ph-b11-assignment-11.web.app/",
      frontend: "https://github.com/nishatjahan62/Knowledge-Edge-projectd",
      backend: "https://github.com/nishatjahan62/Knowledge-Edge-project-backend",
    },
  },
];

export default projects;
