"use client";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import Typography from "@/ui-kit/typography/typography";

const Footer = () => {
  return (
    <footer>
      <div className="main-container">
        <div className={styles.footerContainer}>
          <div className={styles.footer_content}>
            <div className={styles.footer_logoSection}>
              <div className={styles.footer_logoImageContainer}>
                <Image
                  className={styles.footer_logoImage}
                  src={"/black-mantis.svg"}
                  width={220}
                  height={31}
                  alt="footer-logo"
                />
              </div>
              <Link href={"tel:+79999999999"}>
                <Typography variant="span" outline="regular" register="18">
                  +7 999 999-99-99
                </Typography>
              </Link>

              <Link href={"mailto:mantis@gmail.com"}>
                <Typography variant="span" outline="regular" register="18">
                  mantis@gmail.com
                </Typography>
              </Link>
            </div>
            <div className={styles.footer_menus}>
              <div className={styles.footer_menuSection}>
                <Typography register="24" outline="bold">
                  Оборудование
                </Typography>
              </div>
              <div className={styles.footer_menuSection}>
                <Typography register="24" outline="bold">
                  О нас
                </Typography>
              </div>
              <div className={styles.footer_menuSection}>
                <Typography register="24" outline="bold">
                  Кейсы
                </Typography>
              </div>
              <div className={styles.footer_menuSection}>
                <Typography register="24" outline="bold">
                  Блог
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.footer_socials}>
            <Typography variant="span" outline="regular" register="16">
              © 2024, All rights reserved <br />
              MANTIS
            </Typography>
            <div className={styles.footer_socialsContainer}>
              <div className={styles.footer_socialsIcons}>
                <Link
                  className={styles.footer_socialsIconContainer}
                  href={"https://vk.com"}
                >
                  <Image
                    className={styles.footer_socialsIcon}
                    src={"/vk.svg"}
                    width={24}
                    height={24}
                    alt="VK Icon"
                  />
                </Link>
                <Link
                  className={styles.footer_socialsIconContainer}
                  href={"https://vk.com"}
                >
                  <Image
                    className={styles.footer_socialsIcon}
                    src={"/tg.svg"}
                    width={24}
                    height={24}
                    alt="Telegram Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
