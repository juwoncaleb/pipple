import React from "react";
import Header from "./components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

export default function LandingPage() {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <div  className="landingImage ">
      <div >
        <Header />
        <div className="flex page_container gap-8 justify-between ">
          <div>
            <img className="bedImage" src="./bed.jpg" />
            <div className=" flex justify-between mt-14">
             
            </div>
          </div>
          <div className="gasSubText">
            <p className="dedicated">
              We are dedicated to create moments of joy & delight for every guest
            </p>
            <p>
              Venenatis sed habitant tempus malesuada condimentum suspendisse
              nec auctor egestas quis augue non ultricies elit odio diam
              faucibus convallis.
            </p>
            <button className="view_rooms booking_btn mt-10" >
              Book now
            </button>
            <div className=" flex totalguest justify-between ">
            
            </div>
            <div></div>
          </div>
          <div>
            <img className="gasImage" src="./gas.jpg" />
          </div>
        </div>

        <div className="flex page_container justify-between top_div">
          <p className="reviews">EXPLORE ROOM</p>
          <div className="flex gap-4">
            <button className="view_rooms" >View All Rooms</button>
          </div>
        </div>
        <div className="flex gap-10 mt-10  page_container justify-between">
          <div>
            <img src="./liv.jpg" />
            <div className="flex mt-4">
              <div className="flex">
                <img
                  className="room_icon"
                  width="25"
                  height="64"
                  src="https://img.icons8.com/external-outline-berkahicon/64/external-floor-linely-interior-design-outline-berkahicon-3.png"
                  alt="external-floor-linely-interior-design-outline-berkahicon-3"
                />
                <p className="hotel_dets"> 400 sq ft</p>
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="25"
                  height="50"
                  src="https://img.icons8.com/ios/50/bedroom.png"
                  alt="bedroom"
                />
                <p className="hotel_dets"> 1 bed</p>
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="25"
                  height="64"
                  src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                  alt="user-male-circle"
                />
                <p className="hotel_dets"> 3 people</p>
              </div>
            </div>
            <p className="mt-2 Hotel_class">Pent house room</p>
          </div>

          <div>
            <img src="./hus.jpg" />
            <div className="flex mt-4">
              <div className="flex">
                <img
                  className="room_icon"
                  width="25"
                  height="64"
                  src="https://img.icons8.com/external-outline-berkahicon/64/external-floor-linely-interior-design-outline-berkahicon-3.png"
                  alt="external-floor-linely-interior-design-outline-berkahicon-3"
                />
                <p className="hotel_dets"> 400 sq ft</p>
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="25"
                  height="50"
                  src="https://img.icons8.com/ios/50/bedroom.png"
                  alt="bedroom"
                />
                <p className="hotel_dets"> 1 bed</p>
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="25"
                  height="64"
                  src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                  alt="user-male-circle"
                />
                <p className="hotel_dets"> 3 people</p>
              </div>
            </div>
            <p className="mt-2 Hotel_class">Pent house room</p>
          </div>
        </div>

        <div className="flex services top_div page_container gap-20 justify-between">
          <img className="ward" src="./int.jpg" />
          <div className="service_tab">
            <p className="service_text">OUR SERVICES</p>
            <div>
              <div className="flex">
                <p className="services_header mr-10">1.</p>
                <div className="service_head_text">
                  <p className="services_header">Daily Housekeeping</p>
                  <p>
                    Semper vulputate commodo urna id. Est feugiat aliquam
                    bibendum nulla mauris elit. Eu maecenas neque nibh purus.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <p className="services_header mr-10">2.</p>
                <div className="service_head_text">
                  <p className="services_header">Daily Housekeeping</p>
                  <p>
                    Semper vulputate commodo urna id. Est feugiat aliquam
                    bibendum nulla mauris elit. Eu maecenas neque nibh purus.
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="services_header mr-10">3.</p>
                <div className="service_head_text">
                  <p className="services_header">Daily Housekeeping</p>
                  <p>
                    Semper vulputate commodo urna id. Est feugiat aliquam
                    bibendum nulla mauris elit. Eu maecenas neque nibh purus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="facts_div ">
          <div className="flex page_container justify-between">
            <p className="reviews">FACTS & FIGURES</p>
            <div>
              <button className="contact_btn">Contact us</button>
            </div>
          </div>

          <div className="flex mt-10 justify-around">
            <div className="flex">
              <p className="mr-2 fact_num">40</p>
              <p className="fact_sub_num">LISTED ROOM</p>
            </div>
            <p className="fact_sub_txt">
              Display a high customer satisfaction rate or positive reviews
            </p>
            <img className="facts_img" src="./liv.jpg" />
          </div>

          <hr className="factline" />
          <div className="flex mt-10 justify-around">
            <p className="fact_sub_txt">
              Display a high customer satisfaction rate or positive reviews
            </p>

            <img className="facts_img" src="./gas.jpg" />
            <div className="flex">
              <p className="mr-2 fact_num">40</p>
              <p className="fact_sub_num">LISTED ROOM</p>
            </div>
          </div>

          <hr className="factline" />
          <div className="flex mt-10 justify-around">
            <img className="facts_img" src="./rev.jpg" />

            <div className="flex">
              <p className="mr-2 fact_num">40</p>
              <p className="fact_sub_num">LISTED ROOM</p>
            </div>
            <p className="fact_sub_txt">
              Display a high customer satisfaction rate or positive reviews
            </p>
          </div>
        </div>

        <div className="page_container top_div">
          <div className="flex mt-10 mb-8 justify-between">
            <div>
              <p className="tet">TESTIMONIALS</p>
              <p className="reviews">CUSTOMER REVIEWS</p>
            </div>
            <div>
              <button className="view_reviews">View All Reviews</button>
            </div>
          </div>
        </div>

        <div className="flex justify-between page_container testimonial_tab gap-10">
          <img className="robe" src="./ward.jpg" />
          <div className="testimonial_div">
            <p className="testinomola_text">
              Ac porttitor gravida non commodo etiam ornare. Eget feugiat sed
              ullamcorper vestibulum non pellentesque nisl mattis. Odio turpis
              donec praesent tellus amet viverra nec mattis amet. Urna ut sit
              sed molestie enim. Facilisis luctus pulvinar ut fermentum neque
              consequat. Molestie porttitor.
            </p>
            <hr className="testimonail_line" />
            <div className="flex justify-between">
              <div className="flex ">
                <img className="testimonial_img mr-8" src="./pfp.jpg" />
                <div>
                  <p className="testimonial_person">Soneye omojuwon</p>
                  <p className="testimonial_occ">Ceo</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="arrowss lan"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/100/circled-chevron-left.png"
                  alt="circled-chevron-left"
                />
                <img
                  className="arrowss lan"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/100/circled-chevron-left.png"
                  alt="circled-chevron-left"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hook top_div page_container">
          <center>
            <img
              className="hotel"
              src="/hotel.svg"
              alt="Hotel Icon"
              width={70}
              height={100}
            />
            <div className="hotel_div ">
              <p className="hotel_header">
                SURPRISE YOUR LOVED ONES WITH HOTEL CRUISE GIFT CARDS.
              </p>
            </div>
          </center>
          <div className="flex justify-between btn_carr gap-10">
            <img className="tv" src="./tv.jpg" />
            <div className="card_div">
              <p>
                Sed gravida fringilla malesuada vel eleifend enim urna maecenas
                id. Neque turpis volutpat mollis donec odio velit faucibus. Non
                nibh dapibus faucibus diam fringilla volutpat sollicitudin.
              </p>
              <button className="reservation">Make a reservation</button>
            </div>
            <img className="hall" src="./int.jpg" />
          </div>
        </div>
      </div>
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="./bed.jpg" />
          </div>
          <div>
            <img src="./du.jpg" />
          </div>
          <div>
            <img src="./hus.jpg" />
          </div>
          <div>
            <img src="./liv.jpg" />
          </div>
          <div>
            <img src="./rev.jpg" />
          </div>
          <div>
            <img src="./delux.jpg" />
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
}
