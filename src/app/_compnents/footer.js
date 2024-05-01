import React from "react";

const Footer = () => {
  return (
    <footer className="bg-non text-black py-12 pr-sm pl-sm pt-0 pb-1 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-row justify-center ">
          <div className="flex flex-row pt-0 space-x-2 ">
            <div className="flex items-center space-x-4 text-sm ">
              <a href="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ORoMm1-gVoCPdjqh1AhJY1k-wtZ21UwHt7ujus2YXA&s"
                  alt="Foto logo"
                  className="w-sm h-12 "
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold pt-2">Quick Links:</h3>
            <div className="space-x-2 pt-2.5 text-md">
              <a href="/" className=" text-gray-800 hover:text-blue-500">
                Home
              </a>
              <a href="/aboutUs" className=" text-gray-800 hover:text-blue-500">
                About Us
              </a>
              <a
                href="/productsService"
                className=" text-gray-800 hover:text-blue-500"
              >
                Products/Services
              </a>
              <a href="" className=" text-gray-800 hover:text-blue-500">
                Teams
              </a>
            </div>
          </div>
          {/* Social Links */}
          {/* <div className="flex items-center space-x-4">
            <a href="#">
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div> */}
        </div>
        {/* Copyright */}
        <div className="mb-10 text-center text-sm w-full">
          <p>
            &copy; {new Date().getFullYear()} Pesan Makanan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-container bg-black text-white p-5 text-center m-0 justify-center flex flex-row ">
//         <img
//           className="h-8 w-auto bg-none pr-3 pb-2"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ORoMm1-gVoCPdjqh1AhJY1k-wtZ21UwHt7ujus2YXA&s"
//           alt="Foto logo"
//         />
//         <p>&copy; 2024 Your Company Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
