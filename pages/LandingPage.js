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
    <div className="landingImage">
      <div className=" ">
        <Header />
        <div className="flex gap-8 justify-between ">
          <div>
            <img className="bedImage" src="./bed.jpg" />
            <div className=" flex justify-between mt-14">
              <div>
                <p>70%</p>
                <p>Our guest are repeat visitors</p>
              </div>
              <img className="repeat" src="./repeat.jpg" />
            </div>
          </div>
          <div className="gasSubText">
            <p>
              We're dedicated to create moments of joy & delight for every guest
            </p>
            <p>
              Venenatis sed habitant tempus malesuada condimentum suspendisse
              nec auctor egestas quis augue non ultricies elit odio diam
              faucibus convallis.
            </p>
            <div className=" flex totalguest justify-between ">
              <div>
                <p>4000+</p>
                <p>Total guest of</p>
              </div>
              <img
                width="50"
                height="100"
                src="https://img.icons8.com/ios/100/family--v1.png"
                alt="family--v1"
              />{" "}
            </div>
            <div></div>
          </div>
          <div>
            <img className="gasImage" src="./gas.jpg" />
          </div>
        </div>

        <div className="flex justify-between mt-20">
          <p>EXPLORE ROOM</p>
          <div className="flex gap-4">
            <button>View All Rooms</button>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/circled-up-right-2.png"
              alt="circled-up-right-2"
            />
          </div>
        </div>
        <div className="flex gap-10  page_container justify-between">
          <div>
            <img src="./liv.jpg" />
            <div className="flex">
              <div className="flex">
                <img
                  className="room_icon"
                  width="30"
                  height="64"
                  src="https://img.icons8.com/external-outline-berkahicon/64/external-floor-linely-interior-design-outline-berkahicon-3.png"
                  alt="external-floor-linely-interior-design-outline-berkahicon-3"
                />
                400 sq ft
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/bedroom.png"
                  alt="bedroom"
                />
                1 bed
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="30"
                  height="64"
                  src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                  alt="user-male-circle"
                />
                3 people{" "}
              </div>
            </div>
            <p className="mt-2">Pent house room</p>
          </div>

          <div>
            <img src="./hus.jpg" />
            <div className="flex">
              <div className="flex">
                <img
                  className="room_icon"
                  width="30"
                  height="64"
                  src="https://img.icons8.com/external-outline-berkahicon/64/external-floor-linely-interior-design-outline-berkahicon-3.png"
                  alt="external-floor-linely-interior-design-outline-berkahicon-3"
                />
                <p>                400 sq ft
                </p>
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="30"
                  height="50"
                  src="https://img.icons8.com/ios/50/bedroom.png"
                  alt="bedroom"
                />
                1 bed
              </div>
              <div className="flex">
                <img
                  className="room_icon"
                  width="30"
                  height="64"
                  src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png"
                  alt="user-male-circle"
                />
                3 people{" "}
              </div>
            </div>
            <p className="mt-2">Pent house room</p>
          </div>
        </div>

        <div className="flex services page_container gap-20 justify-between">
          <img className="ward" src="./int.jpg" />
          <div className="service_tab">
            <p className="service_text">OUR SERVICES</p>
            <div>
              <div className="flex">
                <p className="services_header mr-10">1.</p>
                <div>
                  <p className="services_header">Daily Housekeeping</p>
                  <p>
                    Semper vulputate commodo urna id. Est feugiat aliquam
                    bibendum nulla mauris elit. Eu maecenas neque nibh purus.
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="services_header mr-10">2.</p>
                <div>
                  <p className="services_header">Daily Housekeeping</p>
                  <p>
                    Semper vulputate commodo urna id. Est feugiat aliquam
                    bibendum nulla mauris elit. Eu maecenas neque nibh purus.
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="services_header mr-10">3.</p>
                <div>
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

        <div className="facts_div">
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

        <div className="page_container">
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

        <div className="hook page_container">
          <center>
            <img
              className="hotel"
              src="/hotel.svg"
              alt="Hotel Icon"
              width={70}
              height={100}
            />
            <div className="hotel_div">
              <p className="hotel_header">
                SURPRISE YOUR LOVED ONES WITH HOTEL CRUISE GIFT CARDS.
              </p>
            </div>
          </center>
          <div className="flex justify-between gap-10">
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
