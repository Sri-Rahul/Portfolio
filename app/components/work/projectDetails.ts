import { IconType } from "react-icons";
import {
  SiOpencv,
  SiTensorflow,
  SiPython,
  SiFlask,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiNetlify,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaRegSmile, FaFileExcel, FaChartBar } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github?: string;
  demo?: string;
  image: string;
  available: boolean;
  publication?: string; // IEEE publication link
};

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "Retail Automation",
    description:
      "An innovative retail solution that revolutionizes the traditional shopping experience using cutting-edge technology.",
    technologies: [
      SiOpencv,
      FaRegSmile,
      SiTensorflow,
      SiPython,
      SiFlask,
      FaFileExcel,
    ],
    techNames: [
      "OpenCV",
      "InsightFace",
      "TensorFlow",
      "Python",
      "Flask",
      "Excel",
    ],
    techLinks: [
      "https://opencv.org/",
      "https://github.com/deepinsight/insightface",
      "https://www.tensorflow.org/",
      "https://www.python.org/",
      "https://flask.palletsprojects.com/",
      "https://www.microsoft.com/en-us/microsoft-365/excel",
    ],
    //github: "https://github.com/yourusername/automated-shopping-experience",
    //demo: "https://www.automatedshopping.com/demo",
    image: "/projects/automated-shopping.png",
    available: true,
    publication: undefined,
  },
  {
    id: 1,
    name: "Accident Severity Prediction",
    description:
      "Implemented multiple ML algorithms such as HGB, SVM, KNN, with Random Forest achieveing the highest accuracy score of 94%.",
    technologies: [
      SiPython,
      SiScikitlearn,
      SiPandas,
      SiNumpy,
      FaChartBar, // Represents Data Visualization
    ],
    techNames: [
      "Python",
      "scikit-learn",
      "pandas",
      "numpy",
      "Data Visualization", // Ensure this matches the technology
    ],
    techLinks: [
      "https://www.python.org/",
      "https://scikit-learn.org/",
      "https://pandas.pydata.org/",
      "https://numpy.org/",
      "https://matplotlib.org/", // Link corresponds to Data Visualization
    ],
    github: "https://github.com/Sri-Rahul/Road-Accident-Severity-Prediction",
    //demo: "https://roadaccidentseveritydemo.netlify.app/",
    image: "/projects/road-accident-severity.png",
    available: true,
    publication: "https://ieeexplore.ieee.org/document/10962895",
  },
  {
    id: 2,
    name: "Salary Predictor",
    description:
      "ML-powered web app that predicts starting salaries based on academic background, skills, and personality traits using CatBoost and XGBoost models with 98.21% R² Score.",
    technologies: [
      SiReact,
      SiTypescript,
      SiNextdotjs,
      SiFlask,
      SiPython,
      SiScikitlearn,
      TbApi,
    ],
    techNames: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Flask",
      "Python",
      "Machine Learning",
      "API Development",
    ],
    techLinks: [
      "https://reactjs.org/",
      "https://www.typescriptlang.org/",
      "https://nextjs.org/",
      "https://flask.palletsprojects.com/",
      "https://www.python.org/",
      "https://scikit-learn.org/",
      "https://flask.palletsprojects.com/",
    ],
    github: "https://github.com/Sri-Rahul/Salary_Predictor",
    demo: "https://salarypredictor.netlify.app/",
    image: "/projects/salaryprd.png",
    available: true,
    publication: undefined,
  },
  {
    id: 3,
    name: "Link Analytics Dashboard",
    description:
      "Full-stack URL shortener with custom aliases, QR codes, JWT authentication, and comprehensive analytics dashboard.",
    technologies: [
      SiNextdotjs,
      SiMongodb,
      SiTailwindcss,
      SiNodedotjs,
      SiExpress,
      SiNetlify,
      FaChartBar,
    ],
    techNames: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Netlify",
      "Analytics",
    ],
    techLinks: [
      "https://nextjs.org/",
      "https://www.mongodb.com/",
      "https://tailwindcss.com/",
      "https://nodejs.org/",
      "https://expressjs.com/",
      "https://www.netlify.com/",
      "https://recharts.org/",
    ],
    github: "https://github.com/Sri-Rahul/linkanalysis",
    demo: "https://advanced-url-shortner.netlify.app/home",
    image: "/projects/linksht.png",
    available: true,
    publication: undefined,
  },
];
