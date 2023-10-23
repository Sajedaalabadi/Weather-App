import React from "react";
import "../Css/AboutUs.css"; // Import the CSS file for styling
import img1 from "../image/University_of_Jordan_Logo.svg.png";
import img2 from "../image/22.jpg"

const about = () => {
    return (
        <div className="about-us-container">
          <h1>About Us</h1>
          <div className="about-us-content">
            
            <div className="about-us-images">
              {/* أضف صورك هنا وقم بضبط أبعادها حسب الحاجة */}
              <img src={img1} alt="Image 1" />
              <img src={img2} alt="Image 2" />
            </div>
            <div className="about-us-text">
              <p>
                We, students from the University of Jordan, have designed a graduation project to serve our society and be active people in Arab society.
              </p>The King Abdullah II College of Information Technology was established in 2000 under the directives of His Majesty King Abdullah II bin Al-Hussein the Great, in order to develop the information technology sector in Jordan and the region.
            </div>
          </div>
        </div>
      );
    
};

export default about;
