import { useState } from "react";
import Nav from "./nav";
import Form from "./Form";
import LandingPage from "./LandingPage";

export default function Home() {
  const navLinks = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  
 
  return (
    <>
      <div className="h-screen">
        <div>
          <Nav title="Hello Rashid" links={navLinks} />
        </div>
        <div>
          <LandingPage/>
        </div>
        <div className="h-screen flex justify-center items-center">
          <Form />
        </div>
      </div>
    </>
  );
}
