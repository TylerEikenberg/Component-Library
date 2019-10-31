import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  /* Primary Buttons */
  .add("Primary", () => <Button label="Do Something" type="primary" />)
  .add("Large Primary", () => (
    <Button label="Do Something" type="primary" large />
  ))
  .add("Primary Border", () => (
    <Button label="Do Something" type="primary-colorless" />
  ))
  /**
   *
   *
   *
   */
  /* Danger Buttons */
  .add("Danger", () => <Button label="Do Something" type="danger" />)
  .add("Large Danger", () => (
    <Button label="Do Something" type="danger" large />
  ))
  .add("Danger Border", () => (
    <Button label="Do Something" type="danger-colorless" />
  ))
  /**
   *
   *
   *
   */
  /* Warning Buttons */
  .add("Warning", () => <Button label="Do Something" type="warning" />)
  .add("Large Warning", () => (
    <Button label="Do Something" type="warning" large />
  ))
  .add("Warning Border", () => (
    <Button label="Do Something" type="warning-colorless" />
  ))
  /**
   *
   *
   *
   */
  /* Success Buttons */
  .add("Success", () => <Button label="Do Something" type="success" />)
  .add("Large Success", () => (
    <Button label="Do Something" type="success" large />
  ))
  .add("Success Border", () => (
    <Button label="Do Something" type="success-colorless" />
  ))
  /**
   *
   *
   *
   */
  /* Default Buttons */
  .add("Default", () => <Button label="Do Something" type="default" />)
  .add("Large Default", () => (
    <Button label="Do Something" type="default" large />
  ))
  .add("Default Border", () => (
    <Button label="Do Something" type="default-colorless" />
  ));
