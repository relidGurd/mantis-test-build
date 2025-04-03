"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import Typography from "@/ui-kit/typography/typography";
import Button from "@/ui-kit/button/button";
import Dropdown from "@/components/dropdown/dropdown";
const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className="main-container">
        <div className={styles.menu_container}>
          <Link href={"/"} className={styles.headerLogoContainer}>
            <Image
              className={styles.headerLogoImage}
              src={"/mantis.svg"}
              width={150}
              height={150}
              alt="Logo Mantis"
            />
          </Link>
          <nav>
            <ul className={styles.mainLinks}>
              <li className={styles.header_linkItem}>
                <Link href={"/"}>
                  <Dropdown
                    button={
                      <Typography variant="span" outline="bold" register="18">
                        Направления
                      </Typography>
                    }>
                    <ul>
                      <li>test</li>
                    </ul>
                  </Dropdown>
                </Link>
              </li>
              <li className={styles.header_linkItem}>
                <Link href={"/"}>
                  <Typography variant="span" outline="bold" register="18">
                    О нас
                  </Typography>
                </Link>
              </li>
              <li className={styles.header_linkItem}>
                <Link href={"/"}>
                  <Typography variant="span" outline="bold" register="18">
                    Кейсы
                  </Typography>
                </Link>
              </li>
              <li className={styles.header_linkItem}>
                <Link href={"/"}>
                  <Typography variant="span" outline="bold" register="18">
                    Блог
                  </Typography>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header_socialsContainer}>
            <Link
              className={styles.header_socialsIconContainer}
              href={"https://vk.com"}>
              <Image
                className={styles.header_socialsIcon}
                src={"/cart.svg"}
                width={24}
                height={24}
                alt="Cart Icon"
              />
            </Link>
            <div className={styles.header_socials}>
              <Link
                className={styles.header_socialsIconContainer}
                href={"https://vk.com"}>
                <Image
                  className={styles.header_socialsIcon}
                  src={"/vk.svg"}
                  width={24}
                  height={24}
                  alt="VK Icon"
                />
              </Link>
              <Link
                className={styles.header_socialsIconContainer}
                href={"https://vk.com"}>
                <Image
                  className={styles.header_socialsIcon}
                  src={"/tg.svg"}
                  width={24}
                  height={24}
                  alt="Telegram Icon"
                />
              </Link>
            </div>
            <div>
              <Button
                className={styles.headerButton}
                color="blackButton"
                label="Связаться"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
