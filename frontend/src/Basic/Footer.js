import React from "react";
import { Link } from "react-router-dom";

 const Footer=()=> {
   
    return (
      <div
        className=" row text-light bg-dark p-2"
        style={{ maxWidth: "100%", margin: "auto" }}
      >
        <div className="col-12 col-md-6 w-100">
          <h4 className="white-text">Contact Us</h4>
          <p className="grey-text">
            ABES Engineering College Ghaziabd , Uttar Pradesh
          </p>
          <p className="grey-text">+918009853170</p>
        </div>

        <div className="col-12 col-md-6 w-100">
          <h4 className="white-text">Social Media</h4>
          <ul>
            <li>
              <Link to="https://github.com/Keertijanm" className="grey-text">
                Github
              </Link>
            </li>
            <li>
              <Link to="#!" className="grey-text">
                {" "}
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="#!" className="grey-text">
                {" "}
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Footer;
