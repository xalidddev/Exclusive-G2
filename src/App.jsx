import { useEffect } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Header from './components/Home/Header.jsx'
import Hero from './components/Home/Hero.jsx'
import FlashSales from './components/Home/FlashSales.jsx'
import Categories from './components/Catalog/Categories.jsx'
import BestSelling from './components/Catalog/BestSelling.jsx'
import MusicBanner from './components/Shop/MusicBanner.jsx'
import ExploreProducts from './components/Shop/ExploreProducts.jsx'
import Contact from './components/Shop/Contact.jsx'
import ProductDetail from './components/Shop/ProductDetail.jsx'
import Cart from './components/Shop/Cart.jsx'
import { CartProvider } from './components/Shop/CartContext.jsx'
import NewArrival from './components/Showcase/NewArrival.jsx'
import HomeServices from './components/Showcase/Services.jsx'
import Footer from './components/Showcase/Footer.jsx'
import OurStory from './components/About/OurStory.jsx'
import Stats from './components/About/Stats.jsx'
import Team from './components/About/Team.jsx'
import AboutServices from './components/About/Services.jsx'
import SignUp from './components/Auth/SignUp.jsx'
import Login from './components/Auth/Login.jsx'

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
        <HomeServices />
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
        <AboutServices />
      </div>
      <Footer />
    </div>
  )
}

const ContactPage = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Contact />
      <Footer />
    </div>
  )
}

const ProductPage = () => {
  const { id } = useParams()

  return (
    <div className="flex w-full flex-col">
      <Header />
      <ProductDetail key={id} id={id} />
      <Footer />
    </div>
  )
}

const CartPage = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Cart />
      <Footer />
    </div>
  )
}

const ScrollTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
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
    <CartProvider>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </CartProvider>
  )
}

export default App
