import React from "react";
import Footer from "../Basic/Footer";
import Navbar from "../Basic/Navbar";
import RegistrationForm from "../Doctorlogin/RegistrationForm";

const DoctorRegistration = () => {
  return (
    <div>
      <div style={{ height: "71vh" }}>
        <Navbar />
        <RegistrationForm />
      </div>

      <div className="fixed-bottom" style={{ width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default DoctorRegistration;
