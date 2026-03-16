// import Hero from './components/Hero'
// import WorkProcess from './components/WorkProcess'
// // import About from './components/About'
// // import Projects from './components/Projects'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import CallToAction from "./components/CallToAction";
// // import Contact from './components/Contact'

// import CaseStudy from "./components/CaseStudy"
// import './index.css'; // or './index.css' depending on your file name

// export default function App() {
//   return (
//     <div className="font-sans text-gray-800">

//      <Header/>
//       <Hero />
//       <WorkProcess />
//       <CallToAction/>
//       <CaseStudy />
//       <Services />
//  {/* <section id="about"><About /></section>
//         <section id="projects"><Projects /></section>
//         <section id="services"><Services /></section>
//         <section id="contact"><Contact /></section> */}
//       {/* <About /> */}
//       {/* <Projects /> */}
//       <Testimonials />
//       <Footer />
//     </div>
//   )
// }

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router/Router'; 
import './index.css'
export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Router /> {/* Use your routing setup here */}
      <Footer />
    </div>
  );
}
