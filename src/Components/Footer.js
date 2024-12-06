import React from 'react';
import githublogo from '../Images/github-sign.png';
import linkden from '../Images/linkedin-logo.png';

function Footer() {
    return(


<div className="container-xl ">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
     <span className="mb-3 mb-md-0 text-body-secondary foot">Made By Rohit Gardi</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3v li"><a className="text-body-secondary" href="#">
      <img src={linkden} className="f-img w-100" alt="Second Slide" /> 
        </a>
        </li>
      <li className="ms-3 li">
        <a className="text-body-secondary" href="https://github.com/rohitgardi039" target="_blank" rel="noopener noreferrer">
          <img src={githublogo} className="f-img w-100" alt="Second Slide" /> 
        </a>
        </li>
      <li className="ms-3 li"><a className="text-body-secondary" href="https://www.linkedin.com/in/rohitgardi039"></a></li>
    </ul>
  </footer>
</div>

    );
}

export default  Footer;