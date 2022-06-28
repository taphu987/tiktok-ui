import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1656572400&x-signature=tGCXWFa3ZVtdEAodRyGvH1jk8ZM%3D"
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
