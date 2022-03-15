import ps5Controller from "../../assets/products/ps5-controller.png";
import logitechMouse from "../../assets/products/logitech-mouse.png";
import farcry from "../../assets/products/farcry.jpeg";
import razerHeadphone from "../../assets/products/razer-headphone.png";
import xboxController from "../../assets/products/xbox-controller.png";
import ps5 from "../../assets/products/ps5.png";
import lenovoLaptop from "../../assets/products/lenovo-laptop.png";
import acerPredator from "../../assets/products/acerPredator.png";
import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "sony",
    name: "DualSense Gamepad",
    price: 5999,
    discountedPrice: 4599,
    img: ps5Controller,
    category: "Gaming Accessories",
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "acer",
    name: "Acer Predator Helios 300",
    price: 179999,
    discountedPrice: 138800,
    img: acerPredator,
    category: "Gaming Laptops",
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "PS5",
    name: "Farcry 6",
    price: 3399,
    discountedPrice: 2699,
    img: farcry,
    category: "Games",
    rating: 3,
  },
  {
    _id: uuid(),
    brand: "RAZER",
    name: "Razer BlackShark V2 X",
    price: 12399,
    discountedPrice: 10699,
    img: razerHeadphone,
    category: "Gaming Accessories",
    rating: 1,
  },
  {
    _id: uuid(),
    brand: "Songy",
    name: "Playstation 5 Standard Console",
    price: 49999,
    discountedPrice: 49999,
    img: ps5,
    category: "Gaming Consoles",
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "Microsoft",
    name: "Xbox 360 Controller",
    price: 3899,
    discountedPrice: 2999,
    img: xboxController,
    category: "Gaming Accessories",
    rating: 2,
  },
  {
    id: 7,
    brand: "lenovo",
    name: "HP Pavilion Gaming AMD",
    price: 78935,
    discountedPrice: 62983,
    img: lenovoLaptop,
    category: "Gaming Laptops",
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "LOGITECH",
    name: "Logitech G102 Gaming",
    price: 1999,
    discountedPrice: 1299,
    img: logitechMouse,
    category: "Gaming Accessories",
    rating: 4,
  },
];
