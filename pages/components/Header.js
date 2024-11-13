import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="flex   justify-between">
      <div className="flex tab1 justify-">
        <p className="">HOME</p>
        <p className="header_text">ABOUT US</p>
        <p className="header_text">ROOM</p>
        <p className="header_text">HALL</p>
        <p className="header_text">LOUNGE</p>
      </div>
      <div className="flex">
        <img className="logo_head mr-4" src="./lg.png" />
        <p>B.Pipples Suites</p>
      </div>
      <img className="logo_head invis ml-4" src="./lg.png" />
      <div>
        <p>Book A room</p>
      </div>
    </div>
  );
}
