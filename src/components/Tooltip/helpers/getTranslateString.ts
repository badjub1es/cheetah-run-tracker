import type { Direction } from "@customTypes/Direction";

/**
 * @param {Direction} direction Direction tooltip should render
 * @param {number} childHeight Height of attached child element
 * @param {number} childWidth Width of child element
 */
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
