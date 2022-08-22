import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:1824801040014@student.tdmu.edu.vn">
        <Button>Contact: 1824801040014@student.tdmu.edu.vn</Button>
      </a>
    </div>
  );
};

export default Contact;
