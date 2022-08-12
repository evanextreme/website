import React from "react";
import { Link } from "react-router-dom";

export const HomePageLink = (props: any) => {
  return <Link to="/about" {...props}></Link>;
};

export const PayPageLink = (props: any) => {
  return <Link to="/pay" {...props}></Link>;
};
