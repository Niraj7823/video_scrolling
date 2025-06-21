import { useEffect, useRef, useState } from "react";
import styles from "../css/VideoCard.module.css";
import { Avatar, Button } from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AddIcon from "@mui/icons-material/Add";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiFullscreen } from "react-icons/bi";

const VideoCard = ({
  videoUrl,
  title,
  description,
  userName,
  userImage,
  hashtag,
  likes,
  comments,
  shares,
  earnings,
  isMuted,
  isActive,
  onMuteToggle,
}) => {
  const videoRef = useRef(null);
  const [showMuteIcon, setShowMuteIcon] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      if (!hasPlayedRef.current) {
        videoRef.current.currentTime = 0;
        hasPlayedRef.current = true;
      }
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      hasPlayedRef.current = false;
    }

    videoRef.current.muted = isMuted;
  }, [isActive, isMuted]);

  const handleMuteClick = () => {
    onMuteToggle();
    setShowMuteIcon(true);
    setTimeout(() => setShowMuteIcon(false), 1000);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const current = (video.currentTime / video.duration) * 100;
      setProgress(current);
    }
  };

  const handleSeek = (e) => {
    const bar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const ratio = clickX / bar.offsetWidth;
    videoRef.current.currentTime = videoRef.current.duration * ratio;
  };

  return (
    <>
      <div className={styles.card}>
        <video
          ref={videoRef}
          src={videoUrl}
          onTimeUpdate={handleTimeUpdate}
          loop
          playsInline
          className={styles.video}
          onClick={handleMuteClick}
        />

        {showMuteIcon && (
          <div className={styles.muteIcon}>
            {isMuted ? (
              <VolumeOffIcon fontSize="large" />
            ) : (
              <VolumeUpIcon fontSize="large" />
            )}
          </div>
        )}

        <div className={styles.leftOverlay}>
          <div className={styles.hashtagSection}>
            <span className={styles.hashtag}>#</span>
            <span>{hashtag}</span>
            <AddIcon className={styles.plusIcon} />
          </div>

          <div className={styles.creatorSection}>
            <Avatar src={userImage} className={styles.avatar} />
            <span className={styles.userName}>{userName}</span>
            <Button
              variant="outlined"
              size="small"
              className={styles.followBtn}
            >
              Follow
            </Button>
          </div>

          <div className={styles.titleSection}>
            <span className={styles.title}>{title}</span>
            <span className={styles.episode}>Ep 01</span>
          </div>

          <div className={styles.descriptionContainer}>
            <p
              className={`${styles.description} ${
                isExpanded ? styles.expanded : ""
              }`}
            >
              {description}
            </p>
            {description.length > 100 && (
              <button
                className={styles.readMoreBtn}
                onClick={toggleDescription}
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>

        <div className={styles.rightOverlay}>
          <div className={styles.icon}>
            <MdFavoriteBorder size={25} />
            <span>{likes}</span>
          </div>
          <div className={styles.icon}>
            <FiMessageCircle size={24} />
            <span>{comments}</span>
          </div>
          <div className={styles.icon}>
            <FaRegPaperPlane size={20} />
            <span>{shares}</span>
          </div>
          <div className={styles.icon}>
            <LuIndianRupee size={22} />
            <span>{earnings}</span>
          </div>
          <div className={styles.icon}>
            <TfiMoreAlt size={22} />
          </div>
          <div className={styles.rightBadge}>Paid</div>
          <div className={styles.icon}>
            <BiFullscreen size={22} />
          </div>
        </div>
      </div>
      <div className={styles.progressBarWrapper} onClick={handleSeek}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
          <div
            className={styles.progressDot}
            style={{ left: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default VideoCard;
