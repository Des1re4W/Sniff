import { useState } from "react";
import "./css/Pricing.css";
import { supabase } from "./supabase";

export default function Pricing() {
  const [showBooking, setShowBooking] = useState(false);
  const [service, setService] = useState("");

  const openBooking = (serviceName) => {
    setService(serviceName);
    setShowBooking(true);
  };

  const closeBooking = () => {
    setShowBooking(false);
    setService("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const booking = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      service,
      vehicle: formData.get("vehicle"),
      booking_date: formData.get("date"),
      notification: formData.get("notification") || true,
    };

    const { error } = await supabase
      .from("bookings")
      .insert([booking]);

    if (error) {
      console.error(error);
      alert("Booking failed.");
    } else {
      alert("Booking confirmed!");
      closeBooking();
    }
  };


  return (
    <section className="pricing-section" id="pricing">
      <h2>Service Pricing</h2>
      <p className="pricing-sub">
        Premium auto detailing & protection — prices may vary by vehicle size and condition
      </p>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Deep Clean</h3>
          <p className="price">Starts at ₱499.00</p>
          <ul>
            <li>Snow foam wash</li>
            <li>Interior vacuum</li>
            <li>Wheel & tire cleaning</li>
            <li>Dashboard wipe</li>
          </ul>
          <button className="price-btn" onClick={() => openBooking("Deep Clean")}>
            Book Now
          </button>
        </div>

        <div className="price-card">
          <h3>Ceramic Coating</h3>
          <p className="price">Starts at ₱3,000.00</p>
          <ul>
            <li>Paint decontamination</li>
            <li>Light paint correction</li>
            <li>Hydrophobic protection</li>
            <li>High gloss finish</li>
          </ul>
          <button className="price-btn" onClick={() => openBooking("Ceramic Coating")}>
            Book Now
          </button>
        </div>

        <div className="price-card">
          <h3>Vinyl Wrap</h3>
          <p className="price">Starts at ₱12,000.00</p>
          <ul>
            <li>Full exterior wrap</li>
            <li>Premium vinyl material</li>
            <li>Paint protection</li>
            <li>3–5 years durability</li>
          </ul>
          <button className="price-btn" onClick={() => openBooking("Vinyl Wrap")}>
            Book Now
          </button>
        </div>

        <div className="price-card">
          <h3>Repaint</h3>
          <p className="price">Inspection Based</p>
          <ul>
            <li>Surface prep & sanding</li>
            <li>Panel or full repaint</li>
            <li>Clear coat finish</li>
            <li>Polish & curing</li>
          </ul>
          <button className="price-btn" onClick={() => openBooking("Repaint")}>
            Book Now
          </button>
        </div>
      </div>

      {showBooking && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <h3>Book {service}</h3>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="service" value={service} />

              <input
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                pattern="[0-9]{10,11}"
                required
              />


              <input
                name="date"
                type="date"
                required
              />

              <input
                name="vehicle"
                list="vehicle-options"
                placeholder="Vehicle Type (type or select)"
                required
              />

              <datalist id="vehicle-options">
                <option value="Motorcycle" />
                <option value="Sedan" />
                <option value="Hatchback" />
                <option value="SUV" />
                <option value="Pickup / Truck" />
                <option value="Van" />
                <option value="Bus" />
              </datalist>


              <div className="booking-actions">
                <button type="submit" className="price-btn">
                  Confirm Booking
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeBooking}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
