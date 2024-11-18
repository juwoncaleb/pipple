import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="flex   hd_foot  justify-between">
      <div className="flex tab1 justify-">
        <p  className="header_text">Home</p>
        <p className="header_text">About Us</p>
        <p className="header_text">Rooms</p>
        <p className="header_text">Hall</p>
        <p className="header_text">Lounge</p>
      </div>
      <div className="flex">
        <img className="logo_head " src="./lg.png" />
        <p className="header_text">B.Pipples Suites</p>
      </div>
      <img className="logo_head invis ml-4" src="./lg.png" />
      <div>
      <button className="contact_btn">Contact us</button>
      </div>
    </div>
  );
}
