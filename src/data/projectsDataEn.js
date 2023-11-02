import Calculator from "../assets/calculator.png";
import Filmler from "../assets/filmler.png";
import TaskYonetimi from "../assets/taskyonetimi.png";
// import WatchList from "../assets/watchlist.png";

export const projectsDataEn = () => {
    return [
        {
            id: 1,
            img: Calculator,
            title: "Calculator project",
            description: "It is a calculator application that can add, multiply, subtract and subtract numbers in any order, as well as add memory saving and callback features.",
            methodsofproject: ["node.js","react"],
            githubLink: "https://github.com/okdemilgin/fsweb-s10g1-reducer-calculator",
            deployLink: "https://main--calculatorx1.netlify.app/"
        },
        {
            id: 2,
            img: Filmler,
            title: "Films",
            description: "A web application containing a small movie database. It is an application where you can add and buy movies or stop buying them. Payment by card is available.",
            methodsofproject: ["react", "redux", "tailwindcss"],
            githubLink: "https://github.com/okdemilgin/fsweb-s10g2-redux-filmler",
            deployLink: "https://main--ilgin-films.netlify.app/"
        },
        {
            id: 3,
            img: TaskYonetimi,
            title: "Task Management",
            description: "Task tracking systems are projects where we divide the things that need to be done in a project into small tasks and add the people who need to do these tasks.",
            methodsofproject: ["react", "redux", "yup","react toastify"],
            githubLink: "https://github.com/okdemilgin/fsweb-s9g1-task-yonetimi",
            deployLink: "https://main--ilgin-task-yonetimi.netlify.app/"
        }
        // {
        //     id: 4,
        //     img: WatchList,
        //     title: "Watch List",
        //     description: "A movie management application provides tasks such as adding, deleting movies, adding to favorites, etc.",
        //     methodsofproject: ["react", "redux thunk", "logger"],
        //     githubLink: "https://github.com/okdemilgin/fsweb-s10g3-redux-watchlist",
        //     deployLink: "https://main--ilgin-watchlist.netlify.app/"
        // }
    ];
};