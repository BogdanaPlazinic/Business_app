# Business_app

Following the design from the Adobe XD file (download XD file from Business_app design folder), a demo one-page site was created. It consists of various components including a hamburger menu for mobile phones, a carousel for businesses portfolio, and a blog section, as well as a subscribe form (not connected to the service), which checks the correctness of the email form.

It is fully responsive (min-width: 320px).

At my own discretion, I modified the design to a lesser extent and added a dark mode feature.

**Plan for the next branch** - create support real-time chat.

I have already made this project some time ago using html and css, if you want to compare my progress you can look at the following link: https://github.com/BogdanaPlazinic/Business-Landing-Page/tree/master/business-landing-page/public/business

Technology used in this project: **ReactJS, Vite, Tailwind, Swiper.js**.

**Live demo:** https://business-app-demo.netlify.app

**Desktop view:**
![business_app desktop_view](https://user-images.githubusercontent.com/117298517/233653700-53f77ff7-ae8d-4a23-937f-5f7e89ba174b.gif)

**Mobile view:**


# Folder structure

Using [Vite](https://vitejs.dev/) for a development environment.
Using Node.js v18.12.1
Using [Tailwind](https://tailwindcss.com/) for style
Using [Swiper.js](https://swiperjs.com/) for carousels
Using [Netlify](https://www.netlify.com) for deployment

## Install Vite

Create react template:

    npm create vite@latest business_app -- --template react

Move to folder:

    cd  business_app

Install and run local server:

    npm  install  
    npm  run  dev

## Install Tailwind

Stop the server with **ctrl+c** (on windows) command and install:

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

Run server: 

    npm run dev

### Setting tailwind.config.js file

> **Note:** Some of these settings are entered during project development.

Setting theme colors:

    /** @type  {import('tailwindcss').Config} */
    module.exports  =  {
    theme:  {
    colors:  {
    'light':  '#F8F5FF',
    'dark':  '#B28AF8',
    'dark2':  '#956AE1',
    'font-light':  '#51495F',
    'dark-font':  '#FFFFFF',
    'shadow-clr':  '#C4A3FD',
    'header-clr':  '#956AE1',
    },
    },
    };
    
Setting breakpoints:

    /** @type  {import('tailwindcss').Config} */
    module.exports  =  {
    screens:  {
    xxs:"50px",
    xs:  "480px",
    ss:  "620px",
    sm:  "768px",
    md:  "1060px",
    lg:  "1200px",
    xl:  "1700px",
    },
    };

Setting dark mode to trigger a class:

    /** @type  {import('tailwindcss').Config} */
    module.exports  =  {
    darkMode:  'class',
    };

### Setting tailwind index.css file

    @tailwind  base;
    @tailwind  components;
    @tailwind  utilities;

## Install React icons

    npm install react-icons


## Install Swiper.js


    npm i swiper


# Prerequisites
Before you begin, ensure you have met the following requirements: - [Git](https://git-scm.com/downloads) must be installed on your operating system.

## Run locally
To run **business_app** locally, run this command on your git bash:

Linux and macOS:

    sudo git clone https://github.com/BogdanaPlazinic/Business_app.git

Windows:


    git clone https://github.com/BogdanaPlazinic/Business_app.git


## Contact
If you want to contact me you can reach me at [LinkedIn](https://www.linkedin.com/in/bogdana-plazinic/).

## Licence
This project is **free to use** and does not contains any license.
