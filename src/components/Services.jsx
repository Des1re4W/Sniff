import { useState } from "react";
import "./css/Services.css";

const videos = [
  { src: "/assets/video1.mp4", title: "Deep Clean" },
  { src: "/assets/video2.mp4", title: "Ceramic Coating" },
  { src: "/assets/video3.mp4", title: "Vinyl Wrap" },
  { src: "/assets/video4.mp4", title: "Repaint" },
];
const extraVideos = [
  { src: "/assets/video1.mp4", title: "Engine Detailing" },
  { src: "/assets/video2.mp4", title: "Interior Shampoo" },
  { src: "/assets/video3.mp4", title: "Headlight Restoration" },
];
function VideoLoader({ src, title }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="video-container">
      {loading && <div className="loader">Loading...</div>}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setLoading(false)}
        className="service-video"
      />
      <p className="video-title">{title}</p>
    </div>
  );
}

export default function Services() {
  const [showExtras, setShowExtras] = useState(false);

  return (
    <section id="services" className="services-section">
      <h2>Services</h2>

      <div className="videos-grid">
        {videos.map((video, index) => (
          <VideoLoader key={index} src={video.src} title={video.title} />
        ))}
      </div>

      {/* TRIGGER */}
      <div
        className="extraServices"
        onClick={() => setShowExtras(true)}
      >
        <h1 className="extras">OTHER SERVICES</h1>
      </div>

      {/* BACKDROP */}
      <div
        className={`extras-backdrop ${showExtras ? "active" : ""}`}
        onClick={() => setShowExtras(false)}
      />

      <div className={`extras-panel ${showExtras ? "active" : ""}`}>
        <div className="drag-indicator" />
        <h3>Other Services</h3>

        <div className="extras-videos-grid">
          {extraVideos.map((video, index) => (
            <VideoLoader
              key={index}
              src={video.src}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

