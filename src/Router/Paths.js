import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Projects from "../views/Projects";
import Skills from "../views/Skills";
import Contact from "../views/Contact";

export default [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]