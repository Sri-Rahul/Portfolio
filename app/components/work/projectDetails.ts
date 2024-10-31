import { IconType } from "react-icons";
import {
    SiOpencv,
    SiTensorflow,
    SiPython,
    SiFlask,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
} from "react-icons/si";
import { FaRegSmile, FaFileExcel } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs"; // Ensure correct import
import { FaChartBar } from "react-icons/fa"; // Ensure correct import

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo?: string;
    image: string;
    available: boolean;
};

export const projects: ProjectProps[] = [
    {
        id: 0,
        name: "Retail Automation",
        description: "An innovative retail solution that revolutionizes the traditional shopping experience using cutting-edge technology.",
        technologies: [SiOpencv, FaRegSmile, SiTensorflow, SiPython, SiFlask, FaFileExcel],
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
        github: ""
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
            FaChartBar // Represents Data Visualization
        ],
        techNames: [
            "Python",
            "scikit-learn",
            "pandas",
            "numpy",
            "Data Visualization" // Ensure this matches the technology
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
    },
];
