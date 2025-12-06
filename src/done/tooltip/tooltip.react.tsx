import React, { useEffect } from 'react';
import css from './tooltip.module.css';
import { cx } from '../../utilities/utility';
import flex from '../../utilities/flex.module.css';

type TooltipProps = {
    position?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
    children: React.ReactNode;
    content: React.ReactNode;
};

const positions = {
    top: css.top,
    bottom: css.bottom,
    left: css.left,
    right: css.right,
} as const;

const OFFSET = 8; // 0.5rem

const getAutoPosition = (
    tooltipRect: DOMRect,
    triggerRect: DOMRect,
    windowWidth: number,
    windowHeight: number
): 'top' | 'bottom' | 'left' | 'right' => {
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;

    // 1. Try Top
    const topY = triggerRect.top - tooltipHeight - OFFSET;
    const topX = triggerRect.left + (triggerRect.width / 2) - (tooltipWidth / 2);
    if (topY >= 0 && topX >= 0 && topX + tooltipWidth <= windowWidth) {
        return 'top';
    }

    // 2. Try Right
    const rightX = triggerRect.right + OFFSET;
    const rightY = triggerRect.top + (triggerRect.height / 2) - (tooltipHeight / 2);
    if (rightX + tooltipWidth <= windowWidth && rightY >= 0 && rightY + tooltipHeight <= windowHeight) {
        return 'right';
    }

    // 3. Try Left
    const leftX = triggerRect.left - tooltipWidth - OFFSET;
    const leftY = triggerRect.top + (triggerRect.height / 2) - (tooltipHeight / 2);
    if (leftX >= 0 && leftY >= 0 && leftY + tooltipHeight <= windowHeight) {
        return 'left';
    }

    // 4. Try Bottom
    const bottomY = triggerRect.bottom + OFFSET;
    const bottomX = triggerRect.left + (triggerRect.width / 2) - (tooltipWidth / 2);
    if (bottomY + tooltipHeight <= windowHeight && bottomX >= 0 && bottomX + tooltipWidth <= windowWidth) {
        return 'bottom';
    }

    // Fallback
    return 'top';
};

export function Tooltip({ children, content, position = 'top' }: TooltipProps) {
    const [isVisible, setIsVisible] = React.useState(false);
    const [tooltipPosition, setTooltipPosition] = React.useState<'top' | 'bottom' | 'left' | 'right'>(position === 'auto' ? 'top' : position);
    const tooltipRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible && position === 'auto' && tooltipRef.current && containerRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const triggerRect = containerRef.current.getBoundingClientRect();

            const newPosition = getAutoPosition(
                tooltipRect,
                triggerRect,
                window.innerWidth,
                window.innerHeight
            );

            if (newPosition !== tooltipPosition) {
                setTooltipPosition(newPosition);
            }
        }
    }, [isVisible, position, tooltipPosition]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => {
                setIsVisible(false);
                if (position === 'auto') setTooltipPosition('top'); // Reset to default for next hover
            }}
            className={css.container}
        >
            <div>{children}</div>
            {isVisible && <div ref={tooltipRef} className={cx(css.tooltip, positions[tooltipPosition])}>{content}</div>}
        </div>
    );
}


export function TooltipExample() {
    return (
        <div className={cx(flex.flexColumnCenter, flex.flexGap24, flex.paddingVer32, flex.paddingHor32)}>
            <div className={cx(flex.flexRowCenter, flex.flexGap32)}>
                <Tooltip position="top" content="Top tooltip">
                    <button>Top</button>
                </Tooltip>
                <Tooltip position="auto" content="Top tooltip">
                    <button>Auto</button>
                </Tooltip></div>

            <div className={cx(flex.flexRowCenter, flex.flexGap32)}>
                <Tooltip position="left" content="Left tooltip">
                    <button>Left</button>
                </Tooltip>
                <Tooltip position="right" content="Right tooltip">
                    <button>Right</button>
                </Tooltip>
            </div>
            <Tooltip position="bottom" content="Bottom tooltip">
                <button>Bottom</button>
            </Tooltip>
        </div>
    );
}
