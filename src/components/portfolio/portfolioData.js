import jobfilterImg from '../../assets/images/joblisting.png'
import urlShortnerImg from '../../assets/images/url-shortner.png'
import calculatorImg from '../../assets/images/calculator.png'
import ipTrackerImg from '../../assets/images/ip-tracker.png'
import confyImg from '../../assets/images/gadgetgalore.png'
import githubImg from '../../assets/images/github-user.png'

const projects = [
  {
    id: 1,
    name: 'Url Shortner',
    about: 'Landing page of Url Shortner created (React & Sass)',
    img: urlShortnerImg,
    url: 'https://url-shortener-brown-pi.vercel.app/',
    git: 'https://github.com/Demandtech/Url-Shortener',
  },
  {
    id: 2,
    name: 'GadgetGalore E-commerce',
    about: 'E-commerce website created with React & styled component)',
    img: confyImg,
    url: 'https://comfy-e-commerce.vercel.app/',
    git: 'https://github.com/Demandtech/Comfy-E-commerce',
  },
  {
    id: 3,
    name: 'Github User',
    about: 'Github Users search (React, styled, Api)',
    img: githubImg,
    url: 'https://github-user-nu.vercel.app/',
    git: 'https://github.com/Demandtech/Github-User',
  },
  {
    id: 4,
    name: 'Job Listing',
    about: 'Job Listing with filter created using (React)',
    img: jobfilterImg,
    url: 'https://joblisting-virid.vercel.app/',
    git: 'https://github.com/Demandtech/joblisting',
  },

  {
    id: 5,
    name: 'Ip Tracker',
    about:
      'Ip Location Tracker created using (Hmtl, Css, JavaScript, leaflet js Library)',
    img: ipTrackerImg,
    url: 'https://ip-tracker-9rccosk2v-demandtech.vercel.app/',
    git: 'https://github.com/Demandtech/Ip-Tracker',
  },
  {
    id: 6,
    name: 'Calculator',
    about: 'Mathematical Calculator created using (html, css, javaScript)',
    img: calculatorImg,
    url: 'https://calculator-five-ruddy.vercel.app/',
    git: 'https://github.com/Demandtech/calculator',
  },
]


export default projects