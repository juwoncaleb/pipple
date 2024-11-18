import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black footer_div">
      <center className="">
        <img className="logo_footer mr-10" src="./lg.png" />
      </center>
      <div className="footer flex justify-between ">
        <div className="newsletter">
          <p className="join_news"> JOIN OUR NEWSLETTER</p>
          <p className="join_inv">
            Keep up with the latest news and updates from Hotel Bipple
          </p>
          <div className="mt-4">
            <input className="input_mail" />
            <button className="sub_btn">Submit</button>
          </div>
        </div>

        <div className="grid  grid-cols-5 gap-8">
          <div>
            <p className="join_news_head">Pages</p>
            <p className="join_news">About us</p>
            <p className="join_news">Rooms</p>
            <p className="join_news">Blogs</p>
            <p className="join_news">Review</p>
            <p className="join_news">FAQ</p>
          </div>
          <div>
            <p className="join_news_head">RESOURCES</p>
            <p className="join_news">Contact us</p>
            <p className="join_news">Privacy Policy</p>
            <p className="join_news">Terms & Conditions</p>
            <p className="join_news">Chnagelog</p>
            <p className="join_news">License</p>
          </div>
          <div>
            <p className="join_news_head">CONNECTED</p>
            <p className="join_news">Instagram</p>
            <p className="join_news">Facebook</p>
            <p className="join_news">Youtube</p>
            <p className="join_news">Twitter</p>
          </div>

          <div>
            <p className="join_news_head"> By Email</p>
            <p className="join_news">dfghjklkjhgh</p>
          </div>

          <div>
            <p className="join_news_head">BY PHONE</p>
            <p className="join_news">2345678922</p>
          </div>
        </div>
      </div>
    </div>
  );
}
