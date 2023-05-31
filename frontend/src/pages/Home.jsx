import React from "react";
import { Box } from "@mantine/core";
import { Navbar } from "../components/Navbar";
import heroImage from "../assets/heroImage.jpg";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Box className="home">
        <Box className="text-box">
          {" "}
          <h1>
            Welcome to Fake Product Identification System using blockchain
            Technology
          </h1>
          <p>
            Harnessing the power of blockchain to authenticate products,
            ensuring transparency and trust in an era of counterfeit goods.
          </p>
        </Box>
        <Box className="image-box">
          <img src={heroImage} alt="Hero Image" />
        </Box>
      </Box>
    </div>
  );
};
