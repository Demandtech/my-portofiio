import { ReactComponent as ReactIcon } from '../../assets/svgs/react-icon.svg'
import { ReactComponent as JsIcon } from '../../assets/svgs/javascript-icon.svg'
import { ReactComponent as NextIcon } from '../../assets/svgs/next-icon.svg'
import { ReactComponent as SassIcon } from '../../assets/svgs/sass-icon.svg'
import { ReactComponent as HtmlIcon } from '../../assets/svgs/html-icon.svg'
import { ReactComponent as CssIcon } from '../../assets/svgs/css-icon.svg'
import { ReactComponent as TailwindIcon } from '../../assets/svgs/tailwind-icon.svg'
import { ReactComponent as GitIcon } from '../../assets/svgs/git-icon.svg'
import { ReactComponent as BootstrapIcon } from '../../assets/svgs/bootstrap-icon.svg'

const skills = [
  {
    icon: <JsIcon />,
    name: 'JavaScript',
    about:
      'JavaScript is a programming language that is commonly used in web development.',
  },
  {
    icon: <HtmlIcon />,
    name: 'Html',
    about:
      'HTML is the standard markup language for creating web pages.',
  },
  {
    icon: <CssIcon />,
    name: 'Css',
    about:
      'CSS is a stylesheet language used for describing the formatting of a Html document',
  },
  {
    icon: <ReactIcon />,
    name: 'ReactJs',
    about:
      'React is a Js library for building user interfaces. It used in the development of single-page applications',
  },
  {
    icon: <NextIcon />,
    name: 'NextJs',
    about:
      'Next.js is a Js framework It is used to make the process of building universal React apps.',
  },
  {
    icon: <SassIcon />,
    name: 'Sass',
    about:
      'Sass is a CSS preprocessor, which means that it extends the functionality of CSS',
  },
  {
    icon: <BootstrapIcon />,
    name: 'Bootstrap',
    about:
      'Bootstrap is a front-end framework for building responsive websites.',
  },
  {
    icon: <TailwindIcon />,
    name: 'Tailwind',
    about:
      'Tailwind CSS is a utility-first CSS framework that makes it easy to style websites.',
  },
  {
    icon: <GitIcon />,
    name: 'Git',
    about:
      'Git is a version control system that is commonly used for software development.',
  },
]

export default skills
