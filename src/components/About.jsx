import React, { useState } from 'react';
import './css/About.css';

const extraVideos = [
  { src: "/assets/video1.mp4", title: "Engine Detailing" },
  { src: "/assets/video2.mp4", title: "Interior Shampoo" },
  { src: "/assets/video3.mp4", title: "Headlight Restoration" },
];

function VideoStack({ videos }) {
  const [stack, setStack] = useState(videos);

  const handleClick = (index) => {
    const newStack = [...stack];
    const [clicked] = newStack.splice(index, 1);
    newStack.push(clicked);
    setStack(newStack);
  };

  return (
    <div className="stack-container">
      {stack.map((video, index) => {
        const offset = index * 20; // vertical spacing
        const scale = 1 - index * 0.05; // depth scaling
        const rotate = index === 0 ? 0 : (index % 2 === 0 ? -3 : 3); // slight rotation for depth

        const style = {
          zIndex: stack.length - index,
          transform: `translateY(${offset}px) scale(${scale}) rotate(${rotate}deg)`,
          filter: index === 0 ? "drop-shadow(0 8px 20px rgba(0,0,0,0.5))" : "brightness(0.85)",
        };

        return (
          <div
            key={video.src}
            className="video-container stack"
            style={style}
            onClick={() => handleClick(index)}
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="service-video"
            />
            <p className="video-title">{video.title}</p>
          </div>
        );
      })}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Sniff.</h2>

        <p className="about-text">
          <strong>Sniff</strong> is a premium auto detailing and car wash service
          dedicated to bringing back the true shine of every vehicle.
          We believe your car deserves more than just a wash — it deserves
          precision, care, and attention to detail.
        </p>

        <p className="about-text">
          From exterior deep cleaning to interior detailing, we use
          high-quality products and modern techniques to ensure your vehicle
          looks, feels, and smells brand new.
        </p>

        <p className="about-text highlight">
          Clean. Protected. Refreshed.
        </p>
      </div>

      <div className="gallery-section">
        <h1>Gallery</h1>
        <VideoStack videos={extraVideos} />
      </div>
    </section>
  );
}

export default About;
