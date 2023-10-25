import React from "react";
import styles from "./footer.module.css";
import { TextField } from "@mui/material";
const Footer = () => {
  return (
    <div className={styles.footerComponent}>
      <div className={styles.app_Title}>
        <div className={styles.social_media_Div}>
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"
            title="facebook"
          />
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"
            title="Instagram"
          />
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-512.png"
            title="Pinterest"
          />
          <img
            className={styles.social_media}
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png"
            title="Twitter"
          />
        </div>
        <div className={styles.audio} >
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
        </div>
      </div>

      {/* Contact us section  */}
      <div className={styles.description}>
        <p>Audio Description</p>
        <p>Investor Relations</p>
        <p>Legal Notices</p>
        <p>Term of use</p>
      </div>

      {/* Jwellery Type us section  */}

      <div className={styles.help}>
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Corporate Information</p>
        <p>Contact Us</p>
      </div>

      {/* Email us section */}
      <div className={styles.email_Section}>
        <h1>Discover the latest collections, news and exclusive launches</h1>
        <TextField
          label="Email us"
          sx={{ width: "70%", color: "white" }}
          variant="standard"
        ></TextField>

        <div className={styles.policy}>
          <p>Legal notice</p>
          <p>Private policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
