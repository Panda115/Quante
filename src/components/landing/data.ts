// types
import { Demo, Feature } from './home';

// images
import homeApp from '../../assets/images/demo/landing/home-app.jpg';
import homeSaas from '../../assets/images/demo/landing/home-saas.jpg';
import homeSaas2 from '../../assets/images/demo/landing/home-saas2.jpg';
import homeStartup from '../../assets/images/demo/landing/home-startup.jpg';
import homeSoftware from '../../assets/images/demo/landing/home-software.jpg';
import homeAgency from '../../assets/images/demo/landing/home-agency.jpg';
import homeCoworking from '../../assets/images/demo/landing/home-coworking.jpg';
import homeCrypto from '../../assets/images/demo/landing/home-crypto.jpg';
import homeMarketing from '../../assets/images/demo/landing/home-marketing.jpg';
import homePortfolio from '../../assets/images/demo/landing/home-portfolio.jpg';

import company from '../../assets/images/demo/pages/company.jpg';
import contact from '../../assets/images/demo/pages/contact.jpg';
import career from '../../assets/images/demo/pages/career.jpg';
import blog from '../../assets/images/demo/pages/blog.jpg';
import blogPost from '../../assets/images/demo/pages/blog-post.jpg';
import dashboard from '../../assets/images/demo/pages/dashboard.jpg';
import settings from '../../assets/images/demo/pages/settings.jpg';
import portfolioGrid from '../../assets/images/demo/pages/portfolio-grid.jpg';
import portfolioMasonry from '../../assets/images/demo/pages/portfolio-masonry.jpg';
import portfolioItem from '../../assets/images/demo/pages/portfolio-item.jpg';
import pricing from '../../assets/images/demo/pages/pricing.jpg';
import help from '../../assets/images/demo/pages/help.jpg';

import authLogin from '../../assets/images/demo/pages/auth-login.jpg';
import authSignup from '../../assets/images/demo/pages/auth-signup.jpg';
import authPassword from '../../assets/images/demo/pages/auth-password.jpg';
import authConfirm from '../../assets/images/demo/pages/auth-confirm.jpg';

const landings: Demo[] = [
    {
        image: homeApp,
        url: '/landing/app',
        name: 'Mobile App',
    },
    {
        image: homeSaas,
        url: '/landing/saas',
        name: 'Saas Modern',
    },
    {
        image: homeSaas2,
        url: '/landing/saas2',
        name: 'Saas Classic',
    },
    {
        image: homeStartup,
        url: '/landing/startup',
        name: 'Startup',
    },
    {
        image: homeSoftware,
        url: '/landing/software',
        name: 'Software',
    },
    {
        image: homeAgency,
        url: '/landing/agency',
        name: 'Agency',
    },
    {
        image: homeCoworking,
        url: '/landing/coworking',
        name: 'Co-Working',
    },
    {
        image: homeCrypto,
        url: '/landing/crypto',
        name: 'Crypto',
    },
    {
        image: homeMarketing,
        url: '/landing/marketing',
        name: 'Marketing',
    },
    {
        image: homePortfolio,
        url: '/landing/portfolio',
        name: 'Portfolio',
    },
];

const secondaryPages: Demo[] = [
    {
        image: company,
        url: '/pages/company',
        name: 'Company',
    },
    {
        image: contact,
        url: '/pages/contact',
        name: 'Contact',
    },
    {
        image: career,
        url: '/pages/career',
        name: 'Career',
    },
    {
        image: blog,
        url: '/pages/blog',
        name: 'Blog',
    },
    {
        image: blogPost,
        url: '/pages/blog/post',
        name: 'Blog-Post',
    },
    {
        image: dashboard,
        url: '/pages/account/dashboard',
        name: 'Dashboard',
    },
    {
        image: settings,
        url: '/pages/account/settings',
        name: 'Settings',
    },
    {
        image: portfolioGrid,
        url: '/pages/portfolio/grid',
        name: 'Portfolio Grid',
    },
    {
        image: portfolioMasonry,
        url: '/pages/portfolio/masonry',
        name: 'Portfolio Masonry',
    },
    {
        image: portfolioItem,
        url: '/pages/portfolio/item',
        name: 'Portfolio-item',
    },
    {
        image: pricing,
        url: '/pages/pricing',
        name: 'Pricing',
    },
    {
        image: help,
        url: '/pages/help',
        name: 'Help',
    },
];

const accountPages: Demo[] = [
    {
        image: authLogin,
        url: '/auth/login',
        name: 'Login',
    },
    {
        image: authSignup,
        url: '/auth/signup',
        name: 'SignUp',
    },
    {
        image: authPassword,
        url: '/auth/forget-password',
        name: 'Forget Password',
    },
    {
        image: authConfirm,
        url: '/auth/confirm',
        name: 'Confirm Account',
    },
];

const features: Feature[] = [
    {
        icon: 'smartphone',
        name: 'Fully Responsive',
    },
    {
        icon: 'layout',
        name: 'Cross-browser compatible',
    },
    {
        icon: 'bold',
        name: 'Based on latest Bootstrap 5.1.3',
    },
    {
        name: 'Sass Powered',
    },
    {
        icon: 'moon',
        name: 'Easy to customize',
    },
    {
        icon: 'smile',
        name: 'Developer Friendly',
    },
    {
        icon: 'code',
        name: 'Clean & Easy to Understand Code',
    },
    {
        icon: 'image',
        name: 'Premium SVG Icons',
    },
    {
        icon: 'check',
        name: 'Free Updates',
    },
];

export { landings, secondaryPages, accountPages, features };
