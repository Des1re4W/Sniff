import { useState } from "react";
import "./css/Services.css";

const videos = [
  { src: "/assets/video1.mp4", title: "Deep Clean" },
  { src: "/assets/video2.mp4", title: "Ceramic Coating" },
  { src: "/assets/video3.mp4", title: "Vinyl Wrap" },
  { src: "/assets/video4.mp4", title: "Repaint" },
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
  return (
    <section id="services" className="services-section">
      <h2>Services</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <VideoLoader key={index} src={video.src} title={video.title} />
        ))}
      </div>
    </section>
  );
}
