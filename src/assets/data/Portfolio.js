import multimartImg from "../images/multimart-ecommerce-full-stack.png";
import weatherImg from '../images/weather-app.png'
import calculatorImg from "../images/calculator.png"
import multiStepImg from "../images/multi-step-form.png";
import movieImg from "../images/movies-app.png";
import commerceImg from "../images/e-commerce-product.png";
import landingImg from "../images/manage-landing-page.png";
import interactiveCardImg from "../images/interactive-card-details-form-main.png";
import agencyImg from "../images/agency-homepage.png";
import newsImg from "../images/news-homepage.png";
import resultsSummaryImg from "../images/results-summary-component.png";
import premitteImg from "../images/premitte.png"
import memoriesImg from "../images/memories-app.png"
import airbnbImg from "../images/airbnb.png"

    // add two projects we worked on when you learned Node JS


    // Booking app (reservations)
    // XO
    // application to learn Material UI 
    // Dashboard
    // Memory Game With JS
    // tic-tac-toe Game
    // Chat App
    // fix all previous projects


    // memories app (edit memory - commant on memory)
    // booking app (complete the project)


const portfolios = [
    {
        id: "38",
        imgUrl: airbnbImg,
        category: "Web Design",
        title: "Full-Stack Room Booking App",
        description:
            [
                "The App allows users to book rooms for their travel needs and also enables property owners to list their rooms for rent.",
                "Login and sign up with email or Google OAuth",
                "To ensure the security and validity of user accounts, the app require all users to sign up and verify their email addresses through an automated email verification process.",
                "Authorization middlewares are used to ensure that only authorized users can access certain features of the app.",
                "Users can list their own properties on the app, which can be shared with other users.",
                "The app offers an edit functionality, which allows users to edit their published properties.",
                "The app offers a delete functionality that allows users to delete their own properties.",
                "Users can also favorite certain rooms, allowing them to easily access their preferred options in the future.",
                "The app features a search functionality that allows users to search for specific rooms.",
                "The app uses Redux to implement a state management system, which allows for efficient and predictable management of data and application state.",
                "The app is designed to be responsive.",
            ],
        technologies: ["React", "Redux" , "Tailwind CSS", "Material UI", "Node.js", "Express.js", "MangoDB"],
        siteUrl: "https://airbnb-clinet.vercel.app/home",
    },

    {
        id: "40",
        imgUrl: multimartImg,
        category: "Web Design",
        title: "Full-Stack E-Commerce Website",
        description:
            [
                "Created a responsive user interface using React components, including product pages, shopping cart, and checkout process, etc.",
                "dealt with a cloud-based database which is Firebase.",
                "Integrated Firebase authentication and authorization for user registration and login.",
                "Implemented a complex state management system using Redux, including product data, customer information, and order details.",
                "Built a dashboard which contributes to manage the entire website more easily.",
            ],
        technologies: ["React", "Redux" , "Bootstrap", "Firebase"],
        siteUrl: "https://mohammad-kardi-multimart-ecommerce-full-stack.vercel.app/home",
    },
    {
        id: "39",
        imgUrl: memoriesImg,
        category: "Web Design",
        title: "Full-Stack Social Media Memories App",
        description:
            [
                "Login and sign up with email or Google OAuth.",
                "Authorization middlewares are used to ensure that only authorized users can access certain features of the app.",
                "Users can post their special memories on the app, which can be shared with other users.",
                "The app offers a delete functionality that allows users to delete their own posts.",
                "Users can like other published memory posts, which adds an interactive element to the app.",
                "The app features a search functionality that allows users to search for specific posts, making it easier to find the content they're looking for.",
                "The app uses pagination to divide content into separate pages, which helps to improve website performance and makes it easier for users to navigate through large amounts of content.",
                "State management system: The app uses Redux to implement a state management system, which allows for efficient and predictable management of data and application state.",
                "The app is designed to be responsive.",
            ],
        technologies: ["React", "Redux" , "Tailwind CSS", "Material UI", "Node.js", "Express.js", "MangoDB"],
        siteUrl: "https://memories-frontend-sigma.vercel.app/posts",
    },



    {
        id: "41",
        imgUrl: weatherImg,
        category: "Web Design",
        title: "Weather App",
        description:
            [
                'Utilized APIs from OpenWeatherMap to gather and display weather data.',
                'Users can search for weather information by city name and view hourly and daily forecasts.',
                'Included a user-friendly feature that allows users to switch between Celsius and Fahrenheit units.',
                "Included a feature that displays the local time of a city based on the user's location or search query.",
                "Implemented responsive design to ensure the website is accessible on various devices."
            ],
        technologies: ["React", "ContextAPI", "RESTful API" , "Tailwind"],
        siteUrl: "https://mohammad-kardi-weather-app.vercel.app",
        },


    {
    id: "42",
    imgUrl: calculatorImg,
    category: "Web Design",
    title: "Calculator",
    description:
        [
            'Implemented calculator functionality using React Hooks to enable basic arithmetic operations, including addition, subtraction, multiplication, and division.'
        ],
    technologies: ["React", "Bootstrap"],
    siteUrl: "https://calculator-pi-hazel.vercel.app",
    },


    {
    id: "43",
    imgUrl: multiStepImg,
    category: "Web Design",
    title: "Multiple Step Form",
    description:
    [
        "Designed and developed the multi-step form using React JS, including input fields, form validation, and progress indicators.",
        "Implemented a state management system using React's Context API to manage the form data and user input across multiple steps."
    ],
    technologies: ["React", "ContextAPI" , "Bootstrap"],
    siteUrl: "https://mohammad-kardi-multi-step-form.vercel.app",
    },


    {
    id: "44",
    imgUrl: movieImg,
    category: "Web Design",
    title: "Movies App",
    description:
        [
            "Integrated a movie API into the website using JavaScript to fetch movie data and display it on the page.",
            "Implemented Redux for state management."
        ],
    technologies: ["React", "ContextAPI" , "RESTful API" ,"Bootstrap"],
    siteUrl: "https://mohammad-kardi-movies-app.vercel.app",
    },


    {
    id: "45",
    imgUrl: commerceImg,
    category: "Web Design",
    title: "E Commerce Product Page",
    description:
        [
            "A responsible website page which shows one product in an e-commerce website.",
            "Developed using HTML, CSS, bootstrap and JavaScript."
        ],
    technologies: ["React", "Bootstrap"],
    siteUrl: "https://e-commerce-product-page-navy-one.vercel.app",
    // siteUrl: "https://mohammad-kardi-e-commerce-product-yt.netlify.app",
    },


    {
    id: "46",
    imgUrl: landingImg,
    category: "Web Design",
    title: "Manage Landing Page",
    description:
    [
    ],
    technologies: ["HTML", "Bootstrap"],
    siteUrl: "https://mohammadkardi1.github.io/manage-landing-page/",
    },


    {
    id: "47",
    imgUrl: interactiveCardImg,
    category: "Web Design",
    title: "Interactive Card Details Form Main Page",
    description:
    [
    ],
    technologies: ["HTML", "Bootstrap"],
    siteUrl: "https://mohammad-kardi-interactive-card-details-form-main-page.vercel.app",
    },


    {
    id: "48",
    imgUrl: agencyImg,
    category: "Web Design",
    title: "Agency Homepage",
    description:
    [
    ],
    technologies: ["HTML", "Bootstrap"],
    siteUrl: "https://mohammadkardi1.github.io/agency-homepage/",
    },  

    {
        id: "100",
        imgUrl: premitteImg,
        category: "Web Design",
        title: "Premitte",
        description:
            [
            ],
        technologies: ["HTML", "Tailwind CSS"],
        siteUrl: "https://premitte.vercel.app/home",
    },


    {
    id: "49",
    imgUrl: newsImg,
    category: "Web Design",
    title: "News Homepage",
    description:
        [
        ],
    technologies: ["HTML", "Bootstrap"],
    siteUrl: "https://mohammadkardi1.github.io/news-homepage/",
    },


    {
    id: "50",
    imgUrl: resultsSummaryImg,
    category: "Web Design",
    title: "Results Summary Component",
    description:
    [
    ],
    technologies: ["HTML", "Bootstrap"],
    siteUrl: "https://mohammadkardi1.github.io/results-summary-component/",
    },




];

export default portfolios;