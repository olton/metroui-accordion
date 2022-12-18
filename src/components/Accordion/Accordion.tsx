import React, {Children, cloneElement, MouseEventHandler} from "react";
import classNames from "classnames";
import "./Accordion.less"
import Frame from "./Frame";

export enum ACCORDION_MODE {
    SINGLE_FRAME,
    MULTI_FRAME
}

interface IAccordionProps {
    opened: number[],
    mode: ACCORDION_MODE.SINGLE_FRAME,
    children: React.ReactNode,
    duration: number,
    frameHeight: any
}

interface IAccordionState {
    opened: boolean[],
}

class Accordion extends React.Component<IAccordionProps, IAccordionState> {
    state: IAccordionState = {
        opened: []
    }

    constructor(props: IAccordionProps) {
        super(props)

        const openFrames: boolean[] = []

        Children.forEach(this.props.children, (child, index) => {
            // @ts-ignore
            openFrames[index] = !!child.props.open
        })

        this.state = {
            opened: openFrames
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e: any){
        const mode = this.props.mode
        let {opened} = this.state
        // @ts-ignore
        const index = e.target.parentNode.getAttribute("data-index")
        const isOpen = opened[index]

        // @ts-ignore
        if (mode === ACCORDION_MODE.MULTI_FRAME) {
            opened[index] = !isOpen
        } else {
            // if (isOpen) return
            opened = opened.map(f=>false)
            opened[index] = !isOpen
        }

        this.setState({
            opened: opened
        })
    }

    render(){
        const {frameHeight = "auto", duration = 300, children, ...props} = this.props
        const {opened} = this.state
        const classes = classNames(
            "accordion",
        )

        return (
            <div className={classes} {...props}>
                {Children.map(children, (el: any, index)=>{
                    const frameProps = {
                        caption: el.props.caption,
                        open: opened[index],
                        onClick: this.handleClick,
                        index,
                        duration,
                        disabled: el.props.disabled,
                        frameHeight,
                    }

                    return (
                        <Frame {...frameProps}>
                            {el.props.children}
                        </Frame>
                    )
                })}
            </div>
        )
    }
}

export default Accordion