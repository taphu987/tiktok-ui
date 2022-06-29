import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItems from "./MenuItems";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItems key={index} data={item} />
        ));
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx("content")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h2>{renderItems()}</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
