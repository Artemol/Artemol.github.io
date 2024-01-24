import React from "react";
import Prompt from "./Prompt";

const Contacts = () => (
  <>
    <Prompt cmd="ls contacts/" />
    <div>
      - Email <br />
      <a href="mailto:artemit163@gmail.com">artemit163@gmail.com</a>
    </div>
    <br />
  </>
);

export default Contacts;
