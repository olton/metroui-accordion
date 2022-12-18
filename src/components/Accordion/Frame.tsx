import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import AnimateHeight, {Height} from "react-animate-height";

interface IFrameProps {
    children: React.ReactNode,
    className?: string,
    caption?: string,
    open: boolean,
    disabled: boolean,
    onClick: MouseEventHandler,
    index: number,
    duration?: number,
    frameHeight: Height
}

const Frame: FC<IFrameProps> = ({
    children,
    className,
    caption,
    open = false,
    onClick,
    index,
    duration,
    disabled = false,
    frameHeight= "auto",
    ...props
}) => {
    const classes = classNames(
        "accordion-frame",
        open ? "frame-open" : "",
        className,
    )

    return (
        <div className={classes} {...props} data-index={index}>
            <div className={`accordion-frame-heading ${disabled ? "disabled" : ""}`} onClick={onClick}>{caption}</div>
            <AnimateHeight height={open ? frameHeight : 0} duration={duration}>
                <div className="accordion-frame-content">{children}</div>
            </AnimateHeight>
        </div>
    )
}

export default Frame