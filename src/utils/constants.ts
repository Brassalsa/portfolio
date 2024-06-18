type Skills = {
  label: string;
  url: string;
}[];

export const skills: Skills = [
  {
    label: "HTML",
    url: "/svg/html5.svg",
  },
  {
    label: "CSS",
    url: "/svg/css3.svg",
  },
  {
    label: "JS",
    url: "/svg/js.svg",
  },

  {
    label: "Typescript",
    url: "/svg/ts.svg",
  },
  {
    label: "Python",
    url: "/svg/python.svg",
  },
  {
    label: "Go lang",
    url: "/svg/golang.svg",
  },
  {
    label: "Node.js",
    url: "/svg/nodeJS.svg",
  },
  {
    label: "React",
    url: "/svg/react.svg",
  },

  {
    label: "Redux",
    url: "/svg/redux.svg",
  },
  {
    label: "Next.js",
    url: "/svg/next.svg",
  },
  {
    label: "Tailwind CSS",
    url: "/svg/tailwind.svg",
  },
  {
    label: "Express.js",
    url: "/svg/express.svg",
  },
  {
    label: "Mongo DB",
    url: "/svg/mongoDB.svg",
  },
  {
    label: "SQLite",
    url: "/svg/SQLite.svg",
  },
  {
    label: "MySQL",
    url: "/svg/mySQL.svg",
  },
  {
    label: "PostgreSQL",
    url: "/svg/PostgreSQL.svg",
  },
  {
    label: "Git",
    url: "/svg/git.svg",
  },
];

type Projects = {
  img?: string;
  label: string;
  info: string;
  github: string;
  live?: string;
}[];
export const projects: Projects = [
  {
    label: "User Management System",
    info: "User Management system is REST application, made with express.js, mongoDB and more.",
    github: "https://github.com/Brassalsa/user-management",
  },
  {
    label: "Blog Application",
    info: "Blog Application made with Next.js. User can perform CRUD operations",
    github: "https://github.com/Brassalsa/blog-app-next",
  },
  {
    img: "/img/dummy-products.png",
    label: "Dummy Products",
    info: "Dummy Products application made with Next.js.",
    github: "https://github.com/Brassalsa/dummy-products",
    live: "https://dummy-products-two.vercel.app/",
  },
  {
    img: "/img/cart-app.png",
    label: "Cart App",
    info: "Cart Application made with React.js. It fetch data from fakestore api.",
    github: "https://github.com/Brassalsa/cart-app",
    live: "https://compromise-io.netlify.app/",
  },
  {
    label: "M-chat",
    info: "Full stack chat application made with Go, HTMX, mongoDb and more.",
    github: "https://github.com/Brassalsa/m-chat",
  },
  {
    label: "Distributed File Storage",
    info: "Made with Go lang, distributed file storage with encryption",
    github: "https://github.com/Brassalsa/dist-file-store",
  },
];
