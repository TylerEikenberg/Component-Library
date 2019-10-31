import React from "react";
import { storiesOf } from "@storybook/react";
import cart from "./assets/cart_2.svg";
import Button from "./Button";

storiesOf("Button", module)
  /* Primary Buttons */
  .add("Primary", () => <Button label="Do Something" type="primary" />)
  .add("Large Primary", () => (
    <Button label="Do Something" type="primary" large />
  ))
  .add("Primary Border", () => (
    <Button label="Do Something" type="primary" colorless />
  ))
  .add("Primary Border Large", () => (
    <Button label="Do Something" type="primary" colorless large />
  ))
  .add("Primary Opaque", () => (
    <Button label="Do Something" type="primary-opacity" />
  ))
  .add("Primary Opaque Large", () => (
    <Button label="Do Something" type="primary-opacity" large />
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
    <Button label="Do Something" type="danger" colorless />
  ))
  .add("Danger Border Large", () => (
    <Button label="Do Something" type="danger" colorless large />
  ))
  .add("Danger Opaque", () => (
    <Button label="Do Something" type="danger-opacity" />
  ))
  .add("Danger Opaque Large", () => (
    <Button label="Do Something" type="danger-opacity" large />
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
    <Button label="Do Something" type="warning" colorless />
  ))
  .add("Warning Border Large", () => (
    <Button label="Do Something" type="warning" colorless large />
  ))
  .add("Warning Opaque", () => (
    <Button label="Do Something" type="warning-opacity" />
  ))
  .add("Warning Opaque Large", () => (
    <Button label="Do Something" type="warning-opacity" large />
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
    <Button label="Do Something" type="success" colorless />
  ))
  .add("Success Border Large", () => (
    <Button label="Do Something" type="success" colorless large />
  ))
  .add("Success Opaque", () => (
    <Button label="Do Something" type="success-opacity" />
  ))
  .add("Success Opaque Large", () => (
    <Button label="Do Something" type="success-opacity" large />
  ))
  /**
   *
   *
   *
   */
  /* Default Buttons */
  .add("Default", () => <Button label="Do Something" />)
  .add("Large Default", () => <Button label="Do Something" large />)
  .add("Default Border", () => <Button label="Do Something" colorless />)
  .add("Default Border Large", () => (
    <Button label="Do Something" colorless large />
  ))
  .add("Default Opaque", () => (
    <Button label="Do Something" type="default-opacity" />
  ))
  .add("Default Opaque Large", () => (
    <Button label="Do Something" type="default-opacity" large />
  ))
  /**
   *
   *
   *
   */
  /* Add To Cart Buttons */
  .add("Add To Cart", () => <Button label="Add To Cart" type="cart" cart />)
  .add("Add To Cart No Text", () => <Button type="cart-notext" notext />)
  /** 
  /* Add To Favorites Buttons */
  .add("Add To Favorites", () => (
    <Button label="Add To Favorites" type="favorites" />
  ))
  .add("Add To Favorites No Text", () => (
    <Button type="favorites-notext" notext />
  ));
/**
 *
 *
 *
 */
/* Email Forms */
