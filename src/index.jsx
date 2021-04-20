import React from "react";
import ReactDOM from "react-dom";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import "./index.scss";

ReactDOM.render(
  <div>
    <ul className="leading-4">
      <li className="flex mb-3"><i className="fas fa-check h-4 w-4 w-4 pt-1 mr-1"/> <p>eliminating <b>false&#8209;positives</b> and <b>false&#8209;negatives</b></p></li>
      <li className="flex mb-3"><i className="fas fa-check h-4 w-4 w-4 pt-1 mr-1"/> <p>well&#8209;designed functions</p></li>
      <li className="flex mb-3"><i className="fas fa-check h-4 w-4 w-4 pt-1 mr-1"/> <p>solutions for building patterns and using potentially&#8209;harmful data</p></li>
    </ul>
  </div>,
  document.getElementById('root')
);
