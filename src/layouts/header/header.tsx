"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import Typography from "@/ui-kit/typography/typography";
import Button from "@/ui-kit/button/button";
import Dropdown from "@/components/dropdown/dropdown";
import { staticUrl } from "@/utils/static-urls";
import { useCart } from "@/store/cart";
import classNames from "classnames";
import { motion } from "motion/react";
import { useState } from "react";
const Header = ({ menu_list }: any) => {
  const cartLengrth = useCart((elem: any) => elem.items);

  const [clickOnBurger, isClickedOnBurger] = useState(false);

  const handleClick = () => {
    isClickedOnBurger(!clickOnBurger);
    console.log(clickOnBurger);
  };

  const animatedMenu = {
    initial: {
      x: -100,
      opacity: 0,
      display: "none",
    },
    visible: {
      x: 0,
      opacity: 1,
      display: "block",
    },
  };

  return (
    <header className={styles.main_header}>
      <div className="main-container">
        <div>
          <div className={styles.menu_container}>
            <Link href={staticUrl.main} className={styles.headerLogoContainer}>
              <Image
                className={styles.headerLogoImage}
                src={"/logo-icon.svg"}
                width={150}
                height={150}
                alt="Logo Mantis"
              />
            </Link>
            <nav>
              <ul className={styles.mainLinks}>
                <li className={styles.header_linkItem}>
                  <div>
                    <Dropdown
                      button={
                        <Typography
                          className={styles.directionsBtn}
                          variant="span"
                          outline="bold"
                          register="18"
                        >
                          Направления
                        </Typography>
                      }
                    >
                      <div className={styles.sub_menu_container}>
                        <div style={{ height: "45px" }}></div>
                        <ul className={styles.subMenu_area}>
                          {menu_list.map((el: any) => (
                            <li key={el.id}>
                              <Typography
                                className={styles.menuTitle}
                                outline="semibold"
                                register="18"
                              >
                                {el.title}
                              </Typography>
                              <div>
                                {el.list.map((el: any) => (
                                  <Link
                                    key={el.id}
                                    className={styles.link_group}
                                    href={el.link}
                                  >
                                    <div className={styles.link_group_item}>
                                      <div
                                        className={
                                          styles.link_group_item_imgContainer
                                        }
                                      >
                                        <Image
                                          className={styles.link_group_item_img}
                                          src={"/test-icon.svg"}
                                          width={24}
                                          height={24}
                                          alt=""
                                        />
                                      </div>
                                      <div>
                                        <Typography
                                          register="14"
                                          outline="bold"
                                        >
                                          {el.title}
                                        </Typography>
                                        <div>{el.description}</div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Dropdown>
                  </div>
                </li>
                <li className={styles.header_linkItem}>
                  <Link href={staticUrl.about}>
                    <Typography variant="span" outline="bold" register="18">
                      О нас
                    </Typography>
                  </Link>
                </li>
                <li className={styles.header_linkItem}>
                  <Link href={staticUrl.cases}>
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
                className={classNames(
                  styles.header_socialsIconContainer,
                  styles.headerCart
                )}
                href={"/cart"}
              >
                <div className={styles.headerCartInfo}>
                  {cartLengrth.length}
                </div>
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
                  href={"https://vk.com"}
                >
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
                  href={"https://vk.com"}
                >
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
          <div className={styles.mobile_menuContainer}>
            <div
              onClick={() => handleClick()}
              className={styles.mobile_menuBurgerContainer}
            >
              <Image
                src={"/burger.svg"}
                width={28}
                height={19}
                alt="Burger Icon"
              />
            </div>
            <motion.ul
              variants={animatedMenu}
              initial={"hidden"}
              animate={clickOnBurger ? "visible" : "initial"}
              className={styles.hidden_mobile_menu}
            >
              <li className={styles.item_mobile_link_container}>
                <Link className={styles.item_link} href={`/about`}>
                  О нас
                </Link>
              </li>
              <li className={styles.item_mobile_link_container}>
                <Link className={styles.item_link} href={`/cases`}>
                  Кейсы
                </Link>
              </li>
              <li className={styles.item_mobile_link_container}>
                <Link className={styles.item_link} href={`/blog`}>
                  Блог
                </Link>
              </li>
              {menu_list.map((el: any) => (
                <li className={styles.item_mobile_link_container} key={el.id}>
                  <Link
                    className={styles.item_link}
                    href={`/directions/${el.title}`}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
            <div className={styles.mobile_logoContainer}>
              <Link
                href={staticUrl.main}
                className={styles.headerLogoContainer}
              >
                <Image
                  className={styles.headerLogoImage}
                  src={"/logo-icon.svg"}
                  width={40}
                  height={40}
                  alt="Logo Mantis"
                />
              </Link>
            </div>

            <Link
              className={classNames(
                styles.header_socialsIconContainer,
                styles.headerCart
              )}
              href={"/cart"}
            >
              <div className={styles.headerCartInfo}>{cartLengrth.length}</div>
              <Image
                className={styles.header_socialsIcon}
                src={"/cart.svg"}
                width={24}
                height={24}
                alt="Cart Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
