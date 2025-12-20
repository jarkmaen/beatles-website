import { useLayoutEffect, useRef, useState } from "react";

type Props = {
    title: string | undefined;
};

const ShrinkWrapTitle = ({ title }: Props) => {
    const [width, setWidth] = useState<string>("auto");

    const titleRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const element = titleRef.current;

        if (!element) {
            return;
        }

        const calculate = () => {
            element.style.whiteSpace = "nowrap";
            element.style.width = "auto";
            const singleLineHeight = element.offsetHeight;

            element.style.whiteSpace = "";
            const height = element.offsetHeight;
            const maxWidth = element.offsetWidth;

            if (height <= singleLineHeight) {
                setWidth("auto");
                return;
            }

            let breakPoint = maxWidth;
            let left = 0;
            let right = maxWidth;

            while (left <= right) {
                const middle = Math.floor((left + right) / 2);

                element.style.width = `${middle}px`;

                if (element.offsetHeight <= height) {
                    breakPoint = middle;
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }

            setWidth(`${breakPoint + 1}px`);
        };

        calculate();

        let timeoutId: ReturnType<typeof setTimeout>;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(calculate, 100);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleResize);
        };
    }, [title]);

    return (
        <>
            <h1
                className="dark:text-primary-dark font-bold font-lora hidden sm:block text-6xl text-balance text-primary-light"
                ref={titleRef}
                style={{ width }}
            >
                {title}
            </h1>
            <h1 className="block dark:text-primary-dark font-bold font-lora sm:hidden text-4xl text-primary-light">
                {title}
            </h1>
        </>
    );
};

export default ShrinkWrapTitle;
