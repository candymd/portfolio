import {useEffect, useState} from "react";

export const useScrollHandler = () => {
    const [scrollPosition, setScrollPosition] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 10;
            setScrollPosition(scrollCheck);
        };

        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [scrollPosition, setScrollPosition]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return {scrollPosition, scrollToTop};
};
