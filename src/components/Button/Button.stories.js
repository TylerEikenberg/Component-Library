import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" hover />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Large Primary", () => <Button label="Primary" type="primary" large />)
  .add("Large Danger", () => <Button label="Danger" type="danger" large />);
