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
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Popup from "@/components/popup/popup";
import QuickForm from "@/components/quick-form/quick-form";

const Header = ({ menu_list }: any) => {
  const cartLengrth = useCart((elem: any) => elem.items);
  const [clickOnBurger, isClickedOnBurger] = useState(false);
  const router = usePathname();
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        clickOnBurger &&
        menuRef.current &&
        menuRef.current.contains(e.target as Node)
      ) {
        isClickedOnBurger(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [menuRef, clickOnBurger]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    isClickedOnBurger(!clickOnBurger);
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
    <header>
      <nav className={styles.main_header}>
        <div ref={menuRef} className="main-container">
          <div>
            <div className={styles.menu_container}>
              <Link
                href={staticUrl.main}
                className={styles.headerLogoContainer}
              >
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
                                <Link href={`/directions${el.link}`}>
                                  <Typography
                                    className={styles.menuTitle}
                                    outline="semibold"
                                    register="18"
                                  >
                                    {el.title}
                                  </Typography>
                                </Link>

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
                                            className={
                                              styles.link_group_item_img
                                            }
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
                      <Typography
                        className={classNames(
                          styles.item_link,
                          router === staticUrl.about && styles.active_menu
                        )}
                        variant="span"
                        outline="bold"
                        register="18"
                      >
                        О нас
                      </Typography>
                    </Link>
                  </li>
                  <li className={styles.header_linkItem}>
                    <Link href={staticUrl.cases}>
                      <Typography
                        className={classNames(
                          styles.item_link,
                          router === staticUrl.cases && styles.active_menu
                        )}
                        variant="span"
                        outline="bold"
                        register="18"
                      >
                        Кейсы
                      </Typography>
                    </Link>
                  </li>
                  <li className={styles.header_linkItem}>
                    <Link href={"/blog"}>
                      <Typography
                        className={classNames(
                          styles.item_link,
                          router === staticUrl.blog && styles.active_menu
                        )}
                        variant="span"
                        outline="bold"
                        register="18"
                      >
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
                  <Popup
                    button={
                      <Button
                        className={styles.headerButton}
                        color="blackButton"
                        label="Связаться"
                      />
                    }
                  >
                    <QuickForm />
                  </Popup>
                </div>
              </div>
            </div>
            <div className={styles.mobile_menuContainer}>
              <div
                onClick={() => handleClick()}
                className={classNames(
                  !clickOnBurger
                    ? styles.mobile_menuBurgerContainer
                    : styles.mobile_menuBurgerContainer__opened
                )}
              ></div>

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
            </div>
          </div>
        </div>
      </nav>

      <motion.ul
        variants={animatedMenu}
        initial={"hidden"}
        animate={clickOnBurger ? "visible" : "initial"}
        className={styles.hidden_mobile_menu}
      >
        <li className={styles.item_mobile_link_container}>
          <Link
            style={router === "/about" ? { color: "rgba(36, 210, 57, 1)" } : {}}
            onClick={() => isClickedOnBurger(false)}
            className={classNames(
              styles.item_link,
              router === "/about" && styles.active_menu
            )}
            href={`/about`}
          >
            О нас
          </Link>
        </li>
        <li className={styles.item_mobile_link_container}>
          <Link
            onClick={() => isClickedOnBurger(false)}
            className={classNames(
              styles.item_link,
              router === "/cases" && styles.active_menu
            )}
            href={`/cases`}
          >
            Кейсы
          </Link>
        </li>
        <li className={styles.item_mobile_link_container}>
          <Link
            onClick={() => isClickedOnBurger(false)}
            className={classNames(
              styles.item_link,
              router === "/blog" && styles.active_menu
            )}
            href={`/blog`}
          >
            Блог
          </Link>
        </li>
        {menu_list.map((el: any) => (
          <li className={styles.item_mobile_link_container} key={el.id}>
            <Link
              onClick={() => isClickedOnBurger(false)}
              className={styles.item_link}
              href={`/directions${el.link}`}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
