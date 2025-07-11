import React, { useEffect, useRef, useState } from "react";
import styles from "../css/VideoFeed.module.css";
import VideoCard from "./VideoCard";
import data from "../data/VideoData.json";

const VideoFeed = () => {
  const containerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(containerRef.current.children).indexOf(
              entry.target
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.8 }
    );

    const children = containerRef.current.children;
    Array.from(children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.feedContainer} ref={containerRef}>
      {data.map((video, index) => (
        <div key={video.id} className={styles.videoWrapper}>
          <VideoCard
            {...video}
            isMuted={isMuted}
            isActive={index === activeIndex}
            onMuteToggle={() => setIsMuted((prev) => !prev)}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
