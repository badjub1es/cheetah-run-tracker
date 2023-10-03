import { Direction } from "@customTypes/Direction";

export const getTranslateString = (direction: Direction, childHeight: number = 0, childWidth: number = 0): string => {
    switch (direction) {
        case ("top"):
            return `translateY(-${childHeight / 2}px)`;
        case ("bottom"):
            return `translateY(${childHeight + 10}px)`;
        case ("left"):
            return `translateY(${childHeight / 4}px) translateX(-${childWidth}px)`;
        case ("right"):
            return `translateY(${childHeight / 4}px) translateX(${childWidth}px)`;
    }
};
