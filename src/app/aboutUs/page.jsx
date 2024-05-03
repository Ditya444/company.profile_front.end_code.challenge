"use client";

import Head from "next/head";
import React, { useState, useEffect } from "react";
import title from "../data/jabatan";

const AboutUs = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount
  return (
    <div className="container mx-auto py-8 mt-24">
      <Head>
        <title>About Us - FoodOrder</title>

        <meta
          name="description"
          content="Learn more about FoodOrder, its history, team, and culture."
        />
      </Head>
      <center>
        <h2 className=" text-5xl font-bold text-blue-500">About Us</h2>
      </center>

      {/* Company History */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Company History</h2>
        <p className="text-gray-700">
          FoodOrder was founded in [Year] with a mission to revolutionize the
          way people order food online. Since then, we've grown into a leading
          platform, connecting millions of hungry customers with their favorite
          restaurants.
        </p>
      </section>

      {/* Culture */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Culture</h2>
        <p className="text-gray-700">
          At FoodOrder, we're passionate about food, technology, and making a
          positive impact on people's lives. Our culture is built on innovation,
          collaboration, and a shared love for great food. We believe in
          fostering a diverse and inclusive workplace where everyone can thrive
          and bring their unique talents to the table.
        </p>
      </section>

      <div className="container mx-auto mt-24 px-4 mb-10">
        <h2 className="text-5xl font-bold text-blue-500 text-center mb-8">
          Our Teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : userData ? (
            userData.results.map((user, index) => (
              <div key={index} className="bg-white shadow-md rounded-md p-4">
                <img
                  src={user.picture.thumbnail}
                  alt="Thumbnail"
                  className="w-24 h-24 object-cover mb-4 mx-auto rounded-full"
                />
                <p className="text-center">
                  Name: {user.name.first} {user.name.last}
                </p>
                <p className="text-center">Title: {title[index].jabatan}</p>
                <p className="text-center">
                  Work Description: {title[index].deskripsi}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">Error fetching data.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
