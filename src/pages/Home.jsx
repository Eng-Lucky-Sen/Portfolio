import React from 'react'
import Hero from '../components/Hero.jsx'
import WorkProcess from '../components/WorkProcess.jsx'
import CallToAction from "../components/CallToAction.jsx"
import CaseStudy from "../components/CaseStudy.jsx"
const Home = () => {
  return (
    <div>
      <Hero/>
      <WorkProcess/>
      <CallToAction/>
      <CaseStudy/>
    </div>
  )
}

export default Home
