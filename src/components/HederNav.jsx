import styles from "../css/VideoCard.module.css";
import { FaRegBell } from "react-icons/fa";
import { LiaWalletSolid } from "react-icons/lia";

export default function HederNav() {
  return (
    <>
      <div className={styles.topOverlay}>
        <div className={styles.topIcon}>
          <LiaWalletSolid size={25} />
        </div>
        <div className={styles.topIcon}>
          <FaRegBell size={23} className={styles.slimIcon} />
        </div>
      </div>
    </>
  );
}
