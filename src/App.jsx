import { Route, Routes } from 'react-router-dom'
import Header from './components/Cefer/Header.jsx'
import Hero from './components/Cefer/Hero.jsx'
import FlashSales from './components/Cefer/FlashSales.jsx'
import Categories from './components/Minaye/Categories.jsx'
import BestSelling from './components/Minaye/BestSelling.jsx'
import MusicBanner from './components/Xalid/MusicBanner.jsx'
import ExploreProducts from './components/Xalid/ExploreProducts.jsx'
import NewArrival from './components/Nusret/NewArrival.jsx'
import NusretServices from './components/Nusret/Services.jsx'
import Footer from './components/Nusret/Footer.jsx'
import OurStory from './components/Seccad/OurStory.jsx'
import Stats from './components/Seccad/Stats.jsx'
import Team from './components/Seccad/Team.jsx'
import SeccadServices from './components/Seccad/Services.jsx'
import SignUp from './components/Elvin/SignUp.jsx'
import Login from './components/Elvin/Login.jsx'

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <div className="flex w-full flex-col gap-[90px]">
        <Hero />
        <FlashSales />
        <Categories />
        <BestSelling />
        <MusicBanner />
        <ExploreProducts />
        <NewArrival />
        <NusretServices />
      </div>
      <Footer />
    </div>
  )
}

const About = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <div className="flex w-full flex-col gap-[120px]">
        <OurStory />
        <Stats />
        <Team />
        <SeccadServices />
      </div>
      <Footer />
    </div>
  )
}

const LoginPage = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Login />
      <Footer />
    </div>
  )
}

const SignUpPage = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <SignUp />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
