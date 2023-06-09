import portfolioImg40 from "../images/multimart-ecommerce-full-stack.png";
import portfolioImg41 from '../images/weather-app.png'
import portfolioImg42 from "../images/calculator.png"
import portfolioImg43 from "../images/multi-step-form.png";
import portfolioImg44 from "../images/movies-app.png";
import portfolioImg45 from "../images/e-commerce-product.png";
import portfolioImg46 from "../images/manage-landing-page.png";
import portfolioImg47 from "../images/interactive-card-details-form-main.png";
import portfolioImg48 from "../images/agency-homepage.png";
import portfolioImg49 from "../images/news-homepage.png";
import portfolioImg50 from "../images/results-summary-component.png";
import portfolioImg100 from "../images/premitte.png"
import portfolioImg39 from "../images/memories-app.png"


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
        id: "39",
        imgUrl: portfolioImg39,
        category: "Web Design",
        title: "Full-Stack Social Media Memories App",
        description:
            [
                "Login and sign up with email or Google OAuth: Users can create an account and log in to the app using their email and password, or with Google OAuth for added convenience.",
                "Authorization middleware: The app features authorization middleware to ensure that only authorized users can access certain features of the app.",
                "Posting memories: Users can post their special memories on the app, which can be shared with other users.",
                "Delete functionality: The app offers a delete functionality that allows users to delete their own posts.",
                "Like functionality: Users can like other published memory posts, which adds an interactive element to the app.",
                "Search functionality: The app features a search functionality that allows users to search for specific posts, making it easier to find the content they're looking for.",
                "Pagination: The app uses pagination to divide content into separate pages, which helps to improve website performance and makes it easier for users to navigate through large amounts of content.",
                "State management system: The app uses Redux to implement a state management system, which allows for efficient and predictable management of data and application state.",
                "Responsive design: The app is designed to be responsive, which means that it can be accessed and used on a variety of devices, including desktops, laptops, smartphones, and tablets.",
            ],
        technologies: ["React", "Redux" , "Tailwind CSS", "Material UI", "Node.js", "Express.js", "MangoDB"],
        siteUrl: "https://memories-frontend-sigma.vercel.app/posts",
    },
    {
    id: "40",
    imgUrl: portfolioImg40,
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
        id: "41",
        imgUrl: portfolioImg41,
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
    imgUrl: portfolioImg42,
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
    imgUrl: portfolioImg43,
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
    imgUrl: portfolioImg44,
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
    imgUrl: portfolioImg45,
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
    imgUrl: portfolioImg46,
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
    imgUrl: portfolioImg47,
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
    imgUrl: portfolioImg48,
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
        imgUrl: portfolioImg100,
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
    imgUrl: portfolioImg49,
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
    imgUrl: portfolioImg50,
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