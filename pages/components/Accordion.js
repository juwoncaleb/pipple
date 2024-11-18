import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const content = [
    { title: "Sed gravida fringilla malesuada vel eleifend enim urna", body: "Content for section 1." },
    { title: "Sed gravida fringilla malesuada vel eleifend enim urna 2", body: "Content for section 2." },
    { title: "Sed gravida fringilla malesuada vel eleifend enim urna", body: "Content for section 3." },
    { title: "SSed gravida fringilla malesuada vel eleifend enim urna", body: "Content for section 4." },
    { title: "Sed gravida fringilla malesuada vel eleifend enim urna", body: "Content for section 5." },
  ];

  return (
    <div className="questbtn" style={{  margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {content.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ddd", marginBottom: "50px" }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <h3 className="question" >{item.title}</h3>
            <span className="plusminus" style={{ fontSize: "20px" }}>
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div style={{ padding: "10px 0", color: "#555" }}>
              {item.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
