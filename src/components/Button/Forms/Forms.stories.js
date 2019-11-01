import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";

storiesOf("Forms", module)
  /* Email Forms */
  .add("Email", () => <Forms type="Email" />)
  .add(
    "Email Large",
    () => <Forms type="Email" large />
    //
    //
    //end
  );
console.log();
