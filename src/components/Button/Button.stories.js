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
  .add("Primary Border Large", () => (
    <Button label="Do Something" type="primary-colorless" large />
  ))
  .add("Primary Opaque", () => (
    <Button label="Do Something" type="primary-opacity" />
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
  .add("Danger Border Large", () => (
    <Button label="Do Something" type="danger-colorless" large />
  ))
  .add("Danger Opaque", () => (
    <Button label="Do Something" type="danger-opacity" />
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
  .add("Warning Border Large", () => (
    <Button label="Do Something" type="warning-colorless" large />
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
  .add("Success Border Large", () => (
    <Button label="Do Something" type="success-colorless" large />
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
  ))
  .add("Default Border Large", () => (
    <Button label="Do Something" type="default-colorless" large />
  ));
