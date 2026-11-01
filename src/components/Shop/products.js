import gamepad from '../../assets/Home/gamepad.png'
import keyboard from '../../assets/Home/keyboard.png'
import monitor from '../../assets/Home/monitor.png'
import chair from '../../assets/Home/chair.png'
import coat from '../../assets/Catalog/coat.png'
import bag from '../../assets/Catalog/bag.png'
import cooler from '../../assets/Catalog/cooler.png'
import bookself from '../../assets/Catalog/bookself.png'
import dog from '../../assets/Shop/dog.png'
import camera from '../../assets/Shop/camera.png'
import cream from '../../assets/Shop/cream.png'
import joystick from '../../assets/Shop/joystick.png'
import ket from '../../assets/Shop/ket.png'
import laptop from '../../assets/Shop/laptop.png'
import mont from '../../assets/Shop/mont.png'
import car from '../../assets/Shop/car.png'

export const products = [
  { id: 1, img: gamepad, name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, sale: "-40%", reviews: 88, stars: 5 },
  { id: 2, img: keyboard, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, sale: "-35%", reviews: 75, stars: 4 },
  { id: 3, img: monitor, name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, sale: "-30%", reviews: 90, stars: 5 },
  { id: 4, img: chair, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, sale: "-25%", reviews: 90, stars: 4.5 },
  { id: 5, img: coat, name: "The north coat", price: 260, oldPrice: 360, reviews: 65, stars: 5 },
  { id: 6, img: bag, name: "Gucci duffle bag", price: 960, oldPrice: 1160, reviews: 65, stars: 4.5 },
  { id: 7, img: cooler, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, reviews: 65, stars: 4.5 },
  { id: 8, img: bookself, name: "Small Bookshelf", price: 360, reviews: 65, stars: 5 },
  { id: 9, img: dog, name: "Breed Dry Dog Food", price: 100, reviews: 35, stars: 3 },
  { id: 10, img: camera, name: "CANON EOS DSLR Camera", price: 360, reviews: 95, stars: 4 },
  { id: 11, img: cream, name: "Curology Product Set", price: 500, reviews: 145, stars: 4 },
  { id: 12, img: joystick, name: "GP11 Shooter USB Gamepad", price: 660, reviews: 55, stars: 4.5 },
  { id: 13, img: ket, name: "Jr. Zoom Soccer Cleats", price: 1165, reviews: 35, stars: 5 },
  { id: 14, img: laptop, name: "ASUS FHD Gaming Laptop", price: 700, reviews: 325, stars: 5 },
  { id: 15, img: mont, name: "Quilted Satin Jacket", price: 660, reviews: 55, stars: 4.5 },
  { id: 16, img: car, name: "Kids Electric Car", price: 960, reviews: 65, stars: 5 },
]

export const getProduct = (id) => products.find((item) => item.id === Number(id))
