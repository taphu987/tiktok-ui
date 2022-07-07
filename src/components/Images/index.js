import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "~/components/Images/Images.module.scss";
import classNames from "classnames";

// console.log(images.noImage);

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState("");

        const handleError = () => {
            setFallback(customFallback);
        };

        // eslint-disable-next-line jsx-a11y/alt-text
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
