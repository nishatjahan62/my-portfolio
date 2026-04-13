const projects = [
  {
    id: 1,
    name: "Donate-A-Bite",
    image: "/Donate-A-Bite.png",
    overview:
      "A local food donation platform where restaurants can share surplus food, charities can request pickups, and admins manage users and donations.",
    keyFeatures: [
      "Role-based dashboards for User, Charity, Restaurant, and Admin.",
      "Stripe payments for charity role requests.",
      "Secure login using Firebase Auth and JWT.",
      "CRUD operations for donations, requests, and reviews.",
      "Responsive design with Tailwind CSS and smooth alerts via SweetAlert2.",
    ],
    impact:
      "Helps reduce food waste and supports local charities through an easy-to-use digital platform.",
    challenges: [
      "Implementing role-based access control with multiple user types was complex — ensuring each role only sees and does what they're allowed to required careful middleware and route protection.",
      "Integrating Stripe with Firebase Auth meant managing two separate auth/payment states and keeping them in sync across the app.",
      "Handling real-time donation status updates without a dedicated WebSocket server was tricky and required polling strategies.",
    ],
    futurePlans: [
      "Add real-time notifications using Socket.io so charities get instant alerts when new donations are posted nearby.",
      "Integrate a map view showing nearby donation pickup points using Google Maps API.",
      "Add an analytics dashboard for admins to track donation trends, peak hours, and charity performance.",
      "Introduce mobile app support via React Native for on-the-go donation management.",
    ],
    tools: ["React", "Tailwind", "Firebase", "Stripe", "SweetAlert2", "JWT"],
    links: {
      live: "https://donate-a-bite.netlify.app/",
      frontend: "https://github.com/nishatjahan62/Donate-a-bite-project",
      backend: "https://github.com/nishatjahan62/Donate-a-bite-project-backend",
    },
  },
  {
    id: 2,
    name: "KnowledgeEdge",
    image: "/KnowledgeEdge.png",
    overview:
      "An article-sharing platform where users can explore, publish, and engage with ideas that matter. Designed with modern web technologies and clean UI/UX to create a smooth learning and reading experience.",
    keyFeatures: [
      "Admin, Author, and User roles with specific permissions.",
      "Authenticated users can add, edit, delete, like, comment, and bookmark articles.",
      "Users can follow their favorite authors and view their published content.",
      "Firebase Auth, Google Sign-In, and JWT-protected routes for security.",
      "Express.js and MongoDB Atlas handle data and API operations efficiently.",
      "Built with Tailwind CSS, Framer Motion, and React-Hot-Toast.",
    ],
    impact:
      "Empowers learners and writers to connect, share, and grow intellectually through meaningful content. Enhances community engagement with discussions and author-follower interactions.",
    challenges: [
      "Building a follower/following system with cascading effects (e.g., unfollowing removes their articles from your feed) required careful database query design.",
      "Managing JWT token expiry gracefully on the frontend — auto-refreshing tokens without logging the user out unexpectedly — was a significant challenge.",
      "Ensuring the rich-text editor content was safely sanitized before storing and rendering to prevent XSS vulnerabilities.",
    ],
    futurePlans: [
      "Add a recommendation engine that suggests articles based on the user's reading history and followed tags.",
      "Implement real-time collaborative editing for co-authored articles using Operational Transform or CRDT.",
      "Introduce a monetization layer allowing authors to publish premium content for subscribers.",
      "Add full-text search with Elasticsearch or Algolia for fast and relevant article discovery.",
    ],
    tools: ["React", "Tailwind", "Stripe", "Firebase", "MongoDB", "Express", "JWT"],
    links: {
      live: "https://knowledge-edge.netlify.app/",
      frontend: "https://github.com/nishatjahan62/Knowledge-Edge-projectd",
      backend: "https://github.com/nishatjahan62/Knowledge-Edge-project-backend",
    },
  },
  {
    id: 3,
    name: "Noor-e-Ramadan",
    image: "/Noor-E-Ramadan.png",
    overview:
      "A full-stack Ramadan companion app built with Next.js 15. Includes Sehri & Iftar timings for all 64 districts of Bangladesh, 17+ duas with Arabic & Bengali translations, 28 recipes, and a personal dashboard with goals and bookmarks.",
    keyFeatures: [
      "Sehri & Iftar timings for all 64 districts with full 30-day schedule.",
      "17+ Duas with Arabic text, Bengali & English translations and copy-to-clipboard.",
      "28 Recipes (Iftar, Sehri, Drinks) with step-by-step instructions.",
      "User dashboard with daily goals checklist, progress tracker, and bookmarks.",
      "Bilingual support — full Bengali & English language toggle.",
      "NextAuth.js authentication with dark/light mode and Framer Motion animations.",
    ],
    impact:
      "Built to serve the Muslim community of Bangladesh during Ramadan — making ibadah, timings, and meal planning accessible in one beautifully designed app.",
    challenges: [
      "Fetching accurate prayer and Sehri/Iftar timings for all 64 districts required integrating the Aladhan API with custom district-level coordinate mapping — handling edge cases for districts with non-standard coordinates was time consuming.",
      "Implementing bilingual (Bengali/English) support across the entire app required a custom i18n solution since standard libraries didn't fit well with Next.js App Router at the time.",
      "Building the daily goals system with persistent progress tracking using MongoDB while keeping it performant for frequent reads/writes needed careful schema design.",
    ],
    futurePlans: [
      "Add push notifications for Sehri and Iftar times using the Web Push API or a service like OneSignal.",
      "Introduce a community duas section where users can submit and vote on duas.",
      "Expand beyond Ramadan — add Hajj guides, Zakat calculators, and year-round Islamic calendar.",
      "Build a native mobile app version using React Native for offline access to timings and duas.",
    ],
    tools: ["Next.js", "MongoDB", "Mongoose", "NextAuth", "Tailwind", "Framer Motion"],
    links: {
      live: "https://noor-e-ramadan-vert.vercel.app/",
      frontend: "https://github.com/nishatjahan62/Noor-e-Ramadan",
    },
  },
  {
    id: 4,
    name: "pick&pack",
    image: "pick&pack.png",
    overview:
      "A smart inventory & order management system to manage products, stock levels, customer orders, and fulfillment workflows — with role-based access for Admin, Manager, and User.",
    keyFeatures: [
      "Role-based access control — Admin, Manager, and User with different permissions.",
      "Product & category management with auto Out-of-Stock detection.",
      "Order management with conflict detection, stock auto-deduction, and status tracking.",
      "Restock queue with priority system (High/Medium/Low) based on stock ratio.",
      "Analytics dashboard — revenue, orders today, low stock count, activity feed.",
      "JWT authentication with demo login and protected routes via middleware.",
    ],
    impact:
      "Streamlines inventory and order workflows for small businesses — reducing manual errors and keeping stock levels always in check with an intuitive, role-aware interface.",
    challenges: [
      "Designing the restock priority algorithm that dynamically recalculates priority (High/Medium/Low) as stock changes in real-time required careful threshold logic and database triggers.",
      "Preventing race conditions when multiple users place orders simultaneously — ensuring stock is atomically deducted without overselling required MongoDB transactions.",
      "Building the activity log system that auto-tracks every meaningful action across users, products, and orders without slowing down the main API responses required async logging patterns.",
    ],
    futurePlans: [
      "Add barcode/QR code scanning support for faster product lookup and stock updates on mobile devices.",
      "Integrate with third-party e-commerce platforms (Shopify, WooCommerce) to sync inventory automatically.",
      "Build an AI-powered demand forecasting feature that predicts restock needs based on historical order data.",
      "Add multi-warehouse support so businesses managing stock across multiple locations can use the same system.",
    ],
    tools: ["Next.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind", "Framer Motion"],
    links: {
      live: "https://pick-pack-frontend.vercel.app/",
      frontend: "https://github.com/nishatjahan62/pick-pack-frontend",
      backend: "https://github.com/nishatjahan62/pick-pack-backend",
    },
  },
];

export default projects;