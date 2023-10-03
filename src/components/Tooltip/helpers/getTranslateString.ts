import type { Direction } from "@customTypes/Direction";

/**
 * Helper function to determine translation string for Tooltip styling
 * 
 * @param {Direction} direction Direction tooltip should render
 * @param {number} childHeight Height of attached child element
 * @param {number} childWidth Width of child element
 * @returns {string} string
 */
export const getTranslateString = (direction: Direction, childHeight = 0, childWidth = 0): string => {
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
