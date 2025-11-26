import React, {
    useRef,
    useState,
    type PropsWithChildren,
    type ReactElement,
    type RefObject,
} from "react";
import { createPortal } from "react-dom";
import css from "./Tabs.module.css";

type TabProps<Name extends string> = PropsWithChildren<{
    name: Name;
    selected?: boolean;
    className?: string;
    portalRef?: RefObject<HTMLElement | null>;
}>;

// More explicit extraction
type ExtractTabNameFromChild<T> = T extends ReactElement<TabProps<infer Name>> ? Name : never;
type ExtractTabNamesFromChildren<Children> =
    Children extends readonly [infer First, ...infer Rest]
    ? ExtractTabNameFromChild<First> | ExtractTabNamesFromChildren<Rest>
    : Children extends readonly [infer First]
    ? ExtractTabNameFromChild<First>
    : never;

// Tabs component with proper inference
const Tabs = <Children extends readonly ReactElement<TabProps<string>>[]>({
    children,
    defaultTab,
}: {
    children: Children;
    defaultTab: ExtractTabNamesFromChildren<Children>;
}) => {
    const portalRef = useRef<HTMLElement | null>(null);
    const [tab, setTab] = useState<string>(defaultTab);

    const onTabSelect: React.MouseEventHandler<HTMLUListElement> = ({ target }) => {
        if (target instanceof HTMLElement && target.dataset.tab != null) {
            setTab(target.dataset.tab);
        }
    };

    const items = React.Children.toArray(children) as ReactElement<TabProps<string>>[];

    return (
        <nav className={css.container}>
            <ul onClickCapture={onTabSelect}>
                {items.map((child, idx) => (
                    <li key={idx}>
                        {React.cloneElement(child, {
                            portalRef,
                            selected: child.props.name === tab,
                        })}
                    </li>
                ))}
            </ul>
            <section ref={portalRef} />
        </nav>
    );
};

export function Tab<Name extends string>(
    props: TabProps<Name>
) {
    const { name, children, portalRef, selected } = props;

    return (
        <>
            <button data-tab={name}>{name}</button>
            {portalRef?.current && selected && createPortal(children, portalRef.current)}
        </>
    );
}

export { Tabs };

export const TabsExampleWithError = () => {
    return (
        <Tabs defaultTab="Tab 3">
            <Tab name="Tab 1">
                <div>Content 1</div>
            </Tab>
            <Tab name="Tab 2">
                <div>Content 2</div>
            </Tab>
            <Tab name="Tab 3">
                <div>Content 3</div>
            </Tab>
        </Tabs>
    );
};