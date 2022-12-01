import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Huy©</h2>
      <p>
        <ul>
          <a href="https://github.com/idahuy/">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/huy-nguyen-9ab15b139/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;