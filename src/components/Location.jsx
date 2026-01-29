import React from "react";
import "./css/Location.css";

function LocationSection() {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <h2>Location</h2>
        <p>For more inquiries visit us</p>

        {/* Map with pinned location */}
    <div className="map-container">
      <iframe
        title="SNIFF Premium Detailing Wash"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.411576523067!2d124.7531904!3d6.3833181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7f72286209f4d:0x1bae8dbd9563843d!2sSNIFF+PREMIUM+DETAILING+WASH,+INFRONT+OF+SURALLAH+ICE+PLANT+(TULOY+PO,+BARANGAY+ZONE+2B,+Surallah,+9506)!5e0!3m2!1sen!2sph!4v1699999999999!5m2!1sen!2sph"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

        {/* Button for Google Maps directions */}
        <a
          href="https://www.google.com/maps/dir/6.3635456,124.7412224/SNIFF+PREMIUM+DETAILING+WASH,+INFRONT+OF+SURALLAH+ICE+PLANT+(TULOY+PO,+BARANGAY+ZONE+2B,+Surallah,+9506/@6.3735267,124.7366075,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x32f7f72286209f4d:0x1bae8dbd9563843d!2m2!1d124.7531904!2d6.3833181?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="route-btn"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}

export default LocationSection;
