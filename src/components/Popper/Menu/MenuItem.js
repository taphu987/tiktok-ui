import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx(
        "menu-item",
        {
            fontWeight: data.fontWeight,
            border: data.border,
        },
        // {},
    );
    return (
        <Button
            className={classes}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
