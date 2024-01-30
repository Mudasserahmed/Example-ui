import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className={styles.footerSocial}>
        <span>Follow us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // xml:space="preserve"
          width={"20px"}
          // style="enable-background:new 0 0 409.592 409.592"
          viewBox="0 0 409.592 409.592"
        >
          <path d="M403.882 107.206c-2.15-17.935-19.052-35.133-36.736-37.437a1316.32 1316.32 0 0 0-324.685 0C24.762 72.068 7.86 89.271 5.71 107.206c-7.613 65.731-7.613 129.464 0 195.18 2.15 17.935 19.052 35.149 36.751 37.437a1316.32 1316.32 0 0 0 324.685 0c17.684-2.284 34.586-19.502 36.736-37.437 7.614-65.71 7.614-129.449 0-195.18zM170.661 273.074V136.539l102.4 68.27-102.4 68.265z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // xml:space="preserve"
          width={"20px"}
          // style="enable-background:new 0 0 155.139 155.139"
          viewBox="0 0 155.139 155.139"
        >
          <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path>
        </svg>
      </div>
      <hr />
      <div className={styles.footerList}>
        <div className={styles.links}>
          <h2>Internal Links</h2>
          <ul>
            <li>Documentries </li>
            <li>Themes </li>
            <li>Chrome Casts </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Enterprise</h2>
          <ul>
            <li>Download Chrome Browser</li>
            <li>Chrome Browser for Enterprise</li>
            <li>Chrome Browser Devices</li>
            <li>ChromeOS</li>
            <li>Google Cloud</li>
            <li>Google Workspace</li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Internal Links</h2>
          <ul>
            <li>Documentries </li>
            <li>Themes </li>
            <li>Chrome Casts </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Enterprise</h2>
          <ul>
            <li>Download Chrome Browser</li>
            <li>Chrome Browser for Enterprise</li>
            <li>Chrome Browser Devices</li>
            <li>ChromeOS</li>
            <li>Google Cloud</li>
            <li>Google Workspace</li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Internal Links</h2>
          <ul>
            <li>Documentries </li>
            <li>Themes </li>
            <li>Chrome Casts </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <div>
          <span className={styles.similar}>Similar</span>
          <span class={styles.watch}>
            <span>Watch</span>
          </span>
        </div>
        <div className={styles.policy}>
          <ul>
            <li >Privacy Policy</li>
            <li >Terms and Conditions</li>
            <li >Cookies Policy</li>
            <li >About Us</li>
            <li >EULA</li>
            <li >Contact</li>
            <button className={styles.moon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path></svg>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
