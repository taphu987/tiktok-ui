import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

import styles from "./Menu.module.scss";
import Header from "./Header";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        <Header title="Language" />
                        {renderItems()}
                        {/* <div>{renderItems()}</div> */}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
