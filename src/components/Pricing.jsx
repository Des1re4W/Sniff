import "./css/Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <h2>Service Pricing</h2>
      <p className="pricing-sub">
        Premium auto detailing & protection — prices may vary by vehicle size and condition
      </p>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Deep Wash</h3>
          <p className="price">
           Starts at ₱499.00
          </p>
          <ul>
            <li>Snow foam wash</li>
            <li>Interior vacuum</li>
            <li>Wheel & tire cleaning</li>
            <li>Dashboard wipe</li>
          </ul>
          <button className="price-btn">Book Now</button>
        </div>

        <div className="price-card">
          <h3>Ceramic Coating</h3>
          <p className="price">
         Starts at ₱3,000.00
          </p>
          <ul>
            <li>Paint decontamination</li>
            <li>Light paint correction</li>
            <li>Hydrophobic protection</li>
            <li>High gloss finish</li>
          </ul>
          <button className="price-btn">Inquire</button>
        </div>

        <div className="price-card">
          <h3>Vinyl Wrap</h3>
          <p className="price">
            Starts at ₱12,000.00
          </p>
          <ul>
            <li>Full exterior wrap</li>
            <li>Premium vinyl material</li>
            <li>Paint protection</li>
            <li>3–5 year durability</li>
          </ul>
          <button className="price-btn">View Options</button>
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
          <button className="price-btn">Request Quote</button>
        </div>
      </div>
    </section>
  );
}
