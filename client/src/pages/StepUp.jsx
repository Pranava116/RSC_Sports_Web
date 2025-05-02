import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Text from "../components/Text";
const StepUp = () => {
  return (
    <div className="text-white">
      <Navbar />
      <div className="flex text-center justify-center">
        <Text text="StepUp" />
      </div>
      <Footer />
    </div>
  );
};

export default StepUp;
