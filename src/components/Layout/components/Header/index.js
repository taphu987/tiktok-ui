import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faArrowUpFromBracket,
    faCircleDollarToSlot,
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faGear,
    faGlobe,
    faKeyboard,
    faSignOutAlt,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";
import {
    SearchIcon,
    UploadIcon,
    MessageIcon,
    InboxIcon,
} from "~/components/Icons";
import Image from "~/components/Images";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
        fontWeight: true,
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback & Help",
        to: "/feedback",
        fontWeight: true,
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
        fontWeight: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;

            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faAddressCard} />,
            title: "View profile",
            to: "/@nhamthao2404",
            fontWeight: true,
        },
        {
            icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
            title: "Get coins",
            to: "/coins",
            fontWeight: true,
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
            fontWeight: true,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOutAlt} />,
            title: "Log out",
            to: "/",
            fontWeight: true,
            border: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div
                                className={cx("search-result")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx("search-title")}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx("search")}>
                            <input
                                placeholder="Search accounts & videos"
                                spellCheck={false}
                            />
                            <button className={cx("clear-btn")}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={cx("loading")}
                                icon={faSpinner}
                            />
                            <button className={cx("search-btn")}>
                                <SearchIcon />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <div className={cx("icon-header")}>
                            <div>
                                <Tippy
                                    interactive
                                    delay={[0, 100]}
                                    content="Upload video"
                                    placement="bottom"
                                >
                                    <button className={cx("action-btn")}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                            </div>

                            <div>
                                <Tippy
                                    interactive
                                    delay={[0, 100]}
                                    content="Message"
                                    placement="bottom"
                                >
                                    <button className={cx("action-btn")}>
                                        <MessageIcon
                                            className={cx("icon-message")}
                                        />
                                    </button>
                                </Tippy>
                            </div>

                            <div>
                                <Tippy
                                    interactive
                                    delay={[0, 100]}
                                    content="Inbox"
                                    placement="bottom"
                                >
                                    <button className={cx("action-btn")}>
                                        <InboxIcon />
                                        <span className={cx("badge")}>12</span>
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Button
                                text
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faArrowUpFromBracket}
                                    />
                                }
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/31a2e92512606aa596df657166e5e483~c5_300x300.webp?x-expires=1656781200&x-signature=05tmcdElV%2Bg6%2FZpnZNDPv6hlxgQ%3D"
                                alt="Nhâm Phương Thảo"
                                fallback="https://35express.org/wp-content/uploads/2022/01/thao-tao-tau-duoc-so-sanh-la-vo-quoc-dan-cung-voi-tieu-hy-35express.jpg"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
