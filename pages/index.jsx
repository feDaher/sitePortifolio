import Nav from "../src/components/Nav"
import Home from '../src/components/Home'
import About from "../src/components/About"
import Portfolio from "../src/components/Portfolio"
import Resume from "../src/components/Resume"

function HomePage () {
  
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Resume />
      <Portfolio />
    </>
  )
}

export default HomePage