import { createPortal } from "react-dom";

type Props = {
    children: React.ReactNode;
    position: { top: number; left: number };
};

const TooltipPortal = ({ children, position }: Props) => {
    return createPortal(
        <div
            className="fixed pointer-events-none"
            style={{
                left: position.left,
                top: position.top
            }}
        >
            {children}
        </div>,
        document.body
    );
};

export default TooltipPortal;
