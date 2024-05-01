import Image from "next/image";
import "./globals.css";
// import Slider from "./_compnents/slider";
// import { sliderData } from "./_compnents/sliderData";
// import { CarouselDemo } from "./_compnents/carousel";
import sliderData from "./_compnents/sliderData";
import Slider from "./_compnents/slider";

export default function Home() {
  return (
    <>
      <div className="flex mt-24 items-center justify-center text-center h-screen mb-12 bg-fixed bg-center bg-cover relative custom-img">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50"></div>

        <div className="p-5 text-white z-[2] mt-[-10rem] ">
          <h2 className=" text-5xl font-bold">
            "Satisfy Your Cravings with a Click"
          </h2>
          <p className="py-5 text-xl">
            Welcome to Pesan Makanan, where your favorite meals are just a click
            away! With our easy-to-use platform, ordering your favorite dishes
            has never been simpler. Say goodbye to waiting in line and hello to
            convenience. Order now and satisfy your cravings with a click!
          </p>
          <button className="px-8 py-2 border">Pesan!</button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-5xl font-bold">About Us</h2>
        <p className="py-5 text-xl">Deskripsi about us</p>
      </div>
      <Slider slides={sliderData}></Slider>

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
