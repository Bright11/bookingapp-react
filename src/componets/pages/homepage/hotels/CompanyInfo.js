import React from 'react'
import "./companyInfo.css";
import { Link } from 'react-router-dom';
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

        <div className="companyInfo-details">
          <h1>Best Price Guarantee</h1>
          <hr />
          <p>
            We offer the best hotels at the best prices. If you find the same
            room category on the same dates cheaper elsewhere, we will refund
            the difference. Guaranteed, and quickly.
          </p>
        </div>
        <div className="companyInfo-details">
          <h1>Secure Booking</h1>
          <hr />
          <p>
            Book Your Travel reservation system is secure and your credit card
            and personal information is encrypted.We work to high standards and
            guarantee your privacy.
          </p>
        </div>
        <div className="companyInfo-details">
          <h1>Benefits for Hoteliers</h1>
          <hr />
          <p>
            We provide a cost-effective model, a network of over 5000 partners
            and a personalised account management service to help you optimise
            your revenue.
          </p>
        </div>

        <div className="companyInfo-details">
          <h1>Any Question</h1>
          <hr />
          <p>
            Call us on 1-555-555-555 for individual, tailored advice for your
            perfect stay or <Link to="">send us a message</Link> with your hotel
            booking query.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo
