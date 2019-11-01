import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";
import Counter from "./Counter";
import Thumbnail from "./Thumbnail";

storiesOf("Forms", module)
  /* Email Forms */
  .add("Email", () => <Forms type="Email" />)
  .add("Email Large", () => <Forms type="Email" large />)
  .add("Email Extra Large", () => <Forms type="Email" extralarge />)
  /*
   *
   *
   *
   * Voucher Buttons */
  .add("Voucher", () => <Forms type="Voucher" label="Redeem" />)
  .add("Voucher Large", () => <Forms type="Voucher" label="Redeem" large />)
  /*
   *
   *
   *
   * Check Boxes */
  .add("Checkbox", () => <Forms type="Checkbox" />)
  .add("Checkbox Label", () => <Forms type="Checkbox" label="Label" />)
  .add("Checkbox Blue", () => <Forms type="Checkbox" blue />)
  /*
   *
   *
   *
   * Select Forms */
  .add("Select", () => <Forms type="Select" text="Select" />)
  .add("Select Large", () => <Forms type="Select" text="Select" large />)
  .add("Select Extra Large", () => (
    <Forms type="Select" text="Select" extralarge />
  ))
  .add("Select Opaque", () => <Forms type="Select" text="Select" opaque />)
  .add("Select Opaque Large", () => (
    <Forms type="Select" text="Select" opaque large />
  ))
  .add("Select Opaque Extra Large", () => (
    <Forms type="Select" text="Select" opaque extralarge />
  ))
  /*
   *
   *
   *
   * Counter */
  .add("Counter", () => <Counter />)
  /*
   *
   *
   *
   * Item Thumbnails */
  .add("Thumbnail", () => <Thumbnail />);
//
//
//end
