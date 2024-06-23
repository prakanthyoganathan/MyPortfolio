import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>prakanth.y1@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@prakanthyoganathan</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/prakanth-y-079012114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

