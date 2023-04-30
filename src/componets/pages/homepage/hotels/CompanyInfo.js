import React from 'react'
import "./companyInfo.css";
function CompanyInfo() {
	return (
    <div className="companyInfo">
      <div className="companyInfo-container">
        <div className="companyInfo-details">
          <h1>Handpicked Hotels</h1>
          <hr />
          <p>
            All Book Your Travel Hotels fulfil strict selection criteria. Each
            hotel is chosen individually and inclusion cannot be bought.
          </p>
        </div>
        <div className="companyInfo-details">
          <h1>Detailed Descriptions</h1>
          <hr />
          <p>
            To give you an accurate impression of the hotel, we endeavor to
            publish transparent, balanced and precise hotel descriptions.
          </p>
        </div>
        <div className="companyInfo-details">
          <h1>Exclusive Knowledge</h1>
          <hr />
          <p>
            We’ve done our research. Our scouts are always busy finding out more
            about our hotels, the surroundings and activities on offer nearby.
          </p>
        </div>
        <div className="companyInfo-details">
          <h1>Passionate Service</h1>
          <hr />
          <p>
            Book Your Travels’s team will cater to your special requests. We
            offer expert and passionate advice for finding the right hotel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo
