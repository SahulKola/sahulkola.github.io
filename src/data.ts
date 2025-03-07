import Jntuh from "./assets/projects/jntuh-gpa-calc.jpg";
import CareerHub from "./assets/projects/career-hub.jpg";
import AngularTodoList from "./assets/projects/angular-todo-list.jpg";
import AngularWeatherApp from "./assets/projects/angular-weather-app.jpg";
import BudgetBuddy from "./assets/projects/budget-buddy.jpg";
import LittleLemon from "./assets/projects/little-lemon.jpg";
import PortfolioImg from "./assets/projects/portfolio.jpg";
import Wakanda from "./assets/projects/wakanda-lander-page.jpg";
import HeadlinesHub from "./assets/projects/headlines-hub.jpg";

import BuildAThon from "./assets/projects/build-a-thon.jpg";
import Rubiks from "./assets/projects/rubiks.jpg";

export interface IEdu {
  id: number;
  name: string;
  degree: string;
  course?: string;
  board: string;
  location: string;
  year: string;
  percentage: string;
}
export const Education: IEdu[] = [
  {
    id: 1,
    name: "ACE Engineering College",
    degree: "Bachelor of Technology",
    course: "Computer Science & Engineering",
    board: "Jawaharlal Nehru Technological University",
    location: "Hyderabad",
    year: "2018 - 2022",
    percentage: "7.5",
  },
  {
    id: 2,
    name: "SR Junior College for Boys",
    degree: "Intermediate",
    course: "Maths Physics Chemistry",
    board: "Board of Intermediate Education, TS.",
    location: "Warangal",
    year: "2016 - 2018",
    percentage: "89%",
  },
  {
    id: 3,
    name: "Wisdom High School",
    degree: "Class 10th",
    board: "Board of Secondary Education, TS.",
    location: "Warangal",
    year: "2015 - 2016",
    percentage: "9.5",
  },
];

export interface IWorkExp {
  id: number;
  name: string;
  link: string;
  role: string;
  logoUrl: string;
  location: string;
  work: string[];
  year: string;
}
export const workExp: IWorkExp[] = [
  {
    id: 1,
    name: "Media.net",
    link: "https://www.media.net",
    role: "Associate UI Developer",
    logoUrl: "https://nanbanjobs.com/wp-content/uploads/2023/07/Media.net-Jobs-Vacancy.jpeg",
    location: "Andheri East, Mumbai (Remote)",
    work: [
      "Developed Ad variations like Keyword Blocks, Search Engine Result Pages, Interstitial Ads, and Lander Pages.",
      "Worked with Skenzo Template Language Tags which provides ads from the backend.",
      "Created Custom Snippets for quite a few ad variations, which minimized 20% of my development time.",
      "Collaborated with Business Development Team and QA team to ensure UI was implemented correctly.",
      "Delivered 100+ good-performing creative ads and lander pages with a 90% acceptance rate for premium publishers.",
      "Developed quality ads during the Black Friday Sale Season, with multiple ad variations.",
    ],
    year: "May 2022 - Dec 2024",
  }, 
  {
    id: 2,
    name: "Backbase",
    link: "https://www.backbase.com/",
    role: "Jr. Frontend Engineer",
    logoUrl: "https://yt3.googleusercontent.com/-Debjb2qYWYt9XZTKlYtnjmckSlYXGGkWOlbpFjTNTNxT6FnGc8ql7mhKktt9p9YHmIwDKfbOA=s900-c-k-c0x00ffffff-no-rj",
    location: "Hyderabad",
    work: [
      "Gained hands-on experience working with major banks in the APAC region, enhancing digital banking solutions, ensuring seamless integrations.","Worked with backend developers, designers, and product managers to integrate frontend with backend APIs. Ensured smooth data flow and state management for better app performance.", 
      "Identified and resolved UI/UX issues by debugging layout inconsistencies and improving responsiveness. Implemented best practices for accessibility and cross-browser compatibility to deliver a seamless digital banking experience"
    ],
    year: "Jan 2024 - Present"
  }
];
export interface IPortfolio {
  id: number;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  prop?: string;
  techstack: string[];
}
export const portfolios: IPortfolio[] = [
  {
    id: 7,
    name: "Headlines Hub. - A Short format News app",
    description:
      "Headlines Hub is a minimal news app that provides users with a seamless news browsing experience. The app features a search functionality that allows users to quickly find news articles on any given topic of interest. Additionally, the app includes a user-friendly navigation menu that provides access to top headlines within specified categories.",
    url: "https://sahulkola.github.io/headlines-hub/",
    thumbnail: HeadlinesHub,
    techstack: ["Angular", "Tailwind", "GNews API"],
  },
  {
    id: 6,
    name: "Weatherly",
    description:
      "Weatherly is a sophisticated weather app with a clean and intuitive interface, designed to provide users with accurate and up-to-date weather information.  The app enables users to access weather forecasts for their location and other locations of interest.",
    // "Simple weather application with minimal & user-friendly UI, built with Angular and OpenWeather API. It allows users to select their desired location and retrieve relevant weather information. The displayed weather forecast includes essential data such as the current temperature, location details, maximum and minimum temperatures, sunrise and sunset times, humidity levels, wind speed, and atmospheric pressure.",
    url: "https://sahulkola.github.io/angular-weather-app/",
    thumbnail: AngularWeatherApp,
    techstack: ["Angular", "SASS", "OpenWeather API"],
  },
  {
    id: 6,
    name: "Wakanda - HR Lander Page",
    description:
      "Wakanda HR platform - a lander page developed using angular that empowers you to streamline your HR operations effortlessly. With an intuitive interface and minimal animations.",
    url: "https://sahulkola.github.io/wakanda-lander-page/",
    thumbnail: Wakanda,
    techstack: ["Angular", "Tailwind", "AOS.js"],
  },
  {
    id: 5,
    name: "Task Tracker",
    description:
      "A to-do list app that helps users to organize and prioritize their daily tasks.  The application helps users to effectively plan and manage their tasks conveniently identifying important ones through priority marks for easy recognition.",
    // "This is an Angular-based application called Simple Todo List, designed to assist users in organizing and prioritizing their daily tasks. The application enables users to plan and manage their tasks effectively, ensuring that important tasks receive priority. By using this application, users can streamline their daily workflow and enhance their productivity.",
    url: "https://sahulkola.github.io/angular-todo-list/",
    thumbnail: AngularTodoList,
    techstack: ["Angular"],
  },
  {
    id: 5,
    name: "My Portfolio",
    description:
      "This project showcases my skills and expertise in frontend development, specifically in creating dynamic and interactive user interfaces. With React's powerful components and React Router DOM's navigation capabilities, I have designed a seamless and user-friendly experience for visitors to explore my work. From responsive layouts to smooth transitions, my portfolio demonstrates my ability to create visually stunning websites that engage and captivate users.",
    // "This is an Angular-based application called Simple Todo List, designed to assist users in organizing and prioritizing their daily tasks. The application enables users to plan and manage their tasks effectively, ensuring that important tasks receive priority. By using this application, users can streamline their daily workflow and enhance their productivity.",
    url: "https://sahulkola.vercel.app/",
    thumbnail: PortfolioImg,
    techstack: ["React", "React-Router-DOM", "Tailwind", "AOS.js"],
  },
  {
    id: 4,
    name: "Little Lemon Restaurant",
    description:
      "The Little Lemon website is an online platform designed to provide information and services related to the Little Lemon restaurant. It serves as a digital hub where customers can explore various aspects of the restaurant, make reservations, access menus, and stay updated with the latest news and promotions.",
    url: "https://little-lemon-coursera-capstone.netlify.app/",
    thumbnail: LittleLemon,
    techstack: ["React", "React-Router-DOM", "Sass"],
  },
  {
    id: 3,
    name: "JNTUH GPA Calc. - SGPA & CGPA Calculator",
    description:
      "A Web-based application that offers students to do mathematical computations which helps in finding accurate CGPA & SGPA with an interactive and user-friendly Graphical User Interface. It includes features like Target GPA Calculator which generates average SGPA to be scored in upcoming semesters to maintain Target GPA.The GPA score will be recorded in the database and users can track their progress by login.",
    url: "https://jntuh-gpa-calc.onrender.com/",
    thumbnail: Jntuh,
    techstack: ["HTML", "CSS", "Bootstrap", "MYSQL", "Flask"],
  },
  {
    id: 2,
    name: "Budget Buddy - a personal expense Tracker",
    description:
      "This project secured top 10 position in India's Largest Build-A-Thon on Modern Application Development, a 7 Days Training Program on Building Morden Apps & Deploying on VMware Tanzu Application Service followed by 5 weeks Project Build-A-Thon conducted by SmartBridge Educational Services Pvt Ltd in association with VMware IT Academy",
    url: "https://budget-buddy-30mh.onrender.com/",
    thumbnail: BudgetBuddy,
    techstack: ["HTML", "CSS", "Bootstrap", "AOS.js", "MYSQL", "Flask"],
  },
  {
    id: 1,
    name: "Career Hub",
    description:
      "A Job portal application that connects recruiters and job seekers where recruiters are the source of the resources, and the job seeker can find and apply for their targeted job. Users will have access to the career portal page where current openings are displayed which were uploaded by the recruiter of the company via the admin interface",
    url: "/",
    thumbnail: CareerHub,
    techstack: ["HTML", "CSS", "MYSQL", "PHP"],
  },
];

export const Recognizations = [
  {
    id: 1,
    name: "Finalist - VMware Taznu Build a Thon",
    description:
      "Certificate for outstanding performance in India's Largest Build-A-Thon on Modern Application Development, a 7 Days Training Program on Building Modern Apps & Deploying on VMware Tanzu Application Service followed by 5 weeks Project Build-A-Thon conducted by SmartBridge Educational Services Pvt Ltd in association with VMware IT Academy",
    url: "https://www.dropbox.com/s/d8xgzzllxo8bbvl/Finalist%20-%20VMware%20Tanzu%20Build%20a%20Thon.pdf?dl=0",
    thumbnail: BuildAThon,
    prop: "Project Developed in Build-a-thon",
    techstack: ["Budget Buddy"],
  },
  {
    id: 2,
    name: "P3 Grand Open March 2017 - Hyderabad",
    description:
      "It initially began as a simple hobby to solve the cube and quickly evolved into a passion for competitive solving. That interest led me to dive deep into the world of the Rubik's Cube by learning and mastering various algorithms for permutation and combination. Utilizing the F2L (First Two Layers) method, which was considered quite efficient at the time, I was able to solve the cube at a relatively fast pace.",
    url: "https://www.worldcubeassociation.org/persons/2017NAAN01",
    thumbnail: Rubiks,
    prop: "Best Score",
    techstack: ["3x3 - 24.78s*", "2x2 - 8.06s*"],
  },
];
