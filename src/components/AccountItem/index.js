import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "../Images";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/31a2e92512606aa596df657166e5e483~c5_300x300.webp?x-expires=1656781200&x-signature=05tmcdElV%2Bg6%2FZpnZNDPv6hlxgQ%3D"
                alt="Thao"
            />
            <div className={cx("info")}>
                <h4 className={cx("username")}>
                    <span>nhamthao2404</span>
                    <FontAwesomeIcon
                        className={cx("check-icon")}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx("name")}>Nhâm Phương Thảo</p>
            </div>
        </div>
    );
}

export default AccountItem;
