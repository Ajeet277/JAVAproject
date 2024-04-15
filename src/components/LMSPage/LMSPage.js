import React from "react";
import './LMSPage.css'; // Assuming the CSS file is named LMSPage.css and is in the same directory as your component

const LMSPage = () => {
  return (
    <div className="lms-page">
      <h2>LMS Portal</h2>
      <div className="video-list">
        <div className="video">
          <h3>Video 1: Introduction to Mathematics</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/aaJo07SrSWQ?si=S-15fa4Z0Z4bxHn3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video">
          <h3>Video 2: History's Greatest Scientists</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WV7OIIVYS84?si=dDdIVhiuc2NWKqGy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        {/* Add more videos as needed */}
      </div>
    </div>
  );
};

export default LMSPage;
