import Image from "next/image";
import "./globals.css";
// import Slider from "./_compnents/slider";
// import { sliderData } from "./_compnents/sliderData";
import { CarouselDemo } from "./_compnents/carousel";
import sliderData from "./_compnents/sliderData";
import Slider from "./_compnents/slider";
import Testimonial from "./_compnents/testimonials";

export default function Home() {
  return (
    <>
      <div className="flex mt-24 items-center justify-center text-center h-screen mb-12 bg-fixed bg-center bg-cover relative custom-img">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50"></div>

        <div className="p-5 text-white z-[2] mt-[-10rem] ">
          <h2 className=" text-5xl font-bold">
            "Satisfy Your Cravings with a Click"
          </h2>
          <p className="py-5 px-10 text-xl">
            Welcome to Pesan Makanan, where your favorite meals are just a click
            away! With our easy-to-use platform, ordering your favorite dishes
            has never been simpler. Say goodbye to waiting in line and hello to
            convenience. Order now and satisfy your cravings with a click!
          </p>
          <a href="/productsService">
            <button className="px-8 py-2 border">Pesan!</button>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-5xl font-bold text-blue-500">About Us</h2>
        <p className="py-5 text-xl justify-center text-wrap text-center px-[250px] ">
          Pesan Makanan! was founded in Indonesia with a mission to
          revolutionize the way people experience food ordering. What started as
          a small idea blossomed into a full-fledged platform, driven by the
          desire to connect food enthusiasts with their favorite restaurants
          effortlessly. Since its inception, Pesan makanan has undergone
          significant growth and development. From humble beginnings, it has
          expanded its operations, partnered with numerous restaurants, and
          embraced technological advancements to enhance the food ordering
          experience.
        </p>
      </div>
      <Slider slides={sliderData}></Slider>

      <div className="container mx-auto py-8 justify-center items-center b">
        <center> 
          <h1 className="text-[40px] font-semibold mb-4 text-blue-500">Customer Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <Testimonial
              name="John Doe"
              position="Food Enthusiast"
              comment="The taste of the food was amazing! I can't wait to order again."
            />
            <Testimonial
              name="Jane Smith"
              position="Food Critic"
              comment="I've tried countless dishes, and I must say, this is the best I've ever had!"
            />
           <Testimonial
              name="Food lover"
              position="Love food"
              comment="I've tried countless dishes, and I must say, this is the best I've ever had!"
            />
          </div>
        </center>
      </div>

      {/* <CarouselDemo></CarouselDemo> */}
    </>
  );
}

// {
//   /* <div className="flex justify-center items-center h-full mt-24">
// <h1 className="text-black text-4xl font-bold bg-red-600 ">Welcome to My Website</h1>
// </div>
// <img src="https://cdn.dribbble.com/users/22691/screenshots/1832066/media/8f043860ca0c9efcc70bb22101cbaa67.gif" alt="backgroudn harusnya" className="w-screen h-95" /> */
// }
