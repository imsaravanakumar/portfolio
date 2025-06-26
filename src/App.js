import Header from './componants/Header'
import Hero from './componants/Hero';
import './App.css'
import Projects from './componants/Projects';
import Skills from './componants/Skills';
import About from './componants/About ';
import Contactus from './componants/Contactus';
import Footer from './componants/footer';
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
function App() {
  useEffect(()=>{
          ScrollReveal().reveal('.herotext',{origin:'left',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.heroimg',{origin:'right',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.pro0',{origin:'left',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.pro1',{origin:'right',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.ab-l',{origin:'left',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.ab-r',{origin:'right',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.sec-up',{origin:'bottom',delay:300,distance:'50px',duration:1000,reset:false})
          ScrollReveal().reveal('.Advanced',{beforeReveal:(el)=>{el.classList.add('ar')}, origin:'width',delay:300,distance:'0px',duration:1000,reset:false})
          ScrollReveal().reveal('.Regular',{beforeReveal:(el)=>{el.classList.add('rr')}, origin:'width',delay:300,distance:'0px',duration:1000,reset:false})
          ScrollReveal().reveal('.Beginner',{beforeReveal:(el)=>{el.classList.add('br')}, origin:'width',delay:300,distance:'0px',duration:1000,reset:false})

      },[])
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Projects/>
     <Skills/>
     <About/>
     <Contactus/>
     <Footer/>
    </div>
  );
}
export default App;
