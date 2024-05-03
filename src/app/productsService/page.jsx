import React from "react";
import MenuCart from "../_compnents/menuCart";

const MenuPage = () => {
  const menu = [
    {
      image: "/beefBurger-frenchFries.jpg",
      name: "Hamburger and French Fries",
      description:
        "The classic combination of a juicy hamburger nestled between soft buns and accompanied by crispy French fries offers a mouthwatering symphony of flavors and textures in every satisfying bite.",
    },
    {
      image: "/chicken-wings.jpg",
      name: "Chicken Wings",
      description:
        "Succulent and flavorful chicken wings, crispy on the outside and tender on the inside, are the ultimate indulgence, whether doused in tangy buffalo sauce, sweet and sticky barbecue, or zesty garlic parmesan.",
    },
    {
      image: "/kentang.jpg",
      name: "French Fries",
      description:
        "Crispy, golden French fries, seasoned to perfection and served piping hot, are an irresistible classic that never fails to satisfy.",
    },
    {
      image: "/lasagna.jpg",
      name: "Lasagna",
      description:
        "Lasagna, a hearty Italian dish layered with rich tomato sauce, creamy cheese, and tender pasta sheets, is a comforting culinary masterpiece that delights with every savory bite.",
    },
    {
      image: "/kue.jpg",
      name: "Tiramisu Cake",
      description:
        "Tiramisu cake, with its delicate layers of coffee-soaked ladyfingers, velvety mascarpone cheese, and dusting of cocoa powder, is a decadent Italian dessert that tantalizes the taste buds with its luscious combination of flavors and textures.",
    },
    {
      image: "/ice-cream.jpg",
      name: "Ice Cream",
      description:
        "Creamy, indulgent ice cream, available in a myriad of tantalizing flavors, offers a delightful sensory experience with its smooth texture and refreshing taste, making it a beloved treat enjoyed by people of all ages around the world.",
    },
    {
      image: "/lemonTea.jpg",
      name: "Lemon Tea",
      description:
        "Refreshing and invigorating, lemon tea combines the zesty brightness of freshly squeezed lemon with the soothing warmth of steeped tea, creating a revitalizing beverage that delights the palate and rejuvenates the senses.",
    },
    {
      image: "/air-putih.jpg",
      name: "Water Bottle",
      description:
        "Drinking water, essential for maintaining hydration and supporting overall health, nourishes the body with its pure simplicity and quenches thirst with every refreshing sip.",
    },
  ];

  return <MenuCart menu={menu} />;
};

export default MenuPage;
