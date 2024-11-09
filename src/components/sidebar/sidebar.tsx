import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaCloudDownloadAlt, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      {/* Image */}
      <Image
        src="/assets/saqib.jpg"
        alt="profile-pic"
        width={300}
        height={300}
        className={styles.profileImage}
      />

      {/* Name here */}
      <div className={styles.nameContainer}>
        <h1 className={styles.nameTitle}>Saqib Sattar</h1>
        <h2 className={styles.subtitle}>
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      {/* Social Media Accounts */}
      <div className={styles.socialIconsGrid}>
        {/* LinkedIn */}
        <div className={styles.iconContainer}>
          <Link
            href="https://www.linkedin.com/in/saqib-sattar-0317b0272/"
            target="_blank"
          >
            <FaLinkedin className={`${styles.icon} ${styles.linkedinIcon}`} />
          </Link>
        </div>
        {/* Twitter */}
        <div className={styles.iconContainer}>
          <Link href="https://x.com/saqib_sattar01" target="_blank">
            <FaSquareXTwitter
              className={`${styles.icon} ${styles.twitterIcon}`}
            />
          </Link>
        </div>
        {/* GitHub */}
        <div className={styles.iconContainer}>
          <Link href="https://github.com/saqibsattar07" target="_blank">
            <FaGithubSquare className={`${styles.icon} ${styles.githubIcon}`} />
          </Link>
        </div>
      </div>

      {/* Download Resume Button */}
      <Link
        href={"/assets/resume/Resume.pdf"}
        target="_blank"
        className={styles.downloadButton}
      >
        <Button>
          <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </Link>
    </div>
  );
}
