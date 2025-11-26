import "./reset.css";
import css from "./app.module.css";
import { ToastProvider, useToast } from "./toast/toast.react";

import { useState } from "react";

import { CheckboxTreeExample } from "./nested-checkboxes/checkboxes.react";
import { AccordionExample } from "./accordion/accordion.react";
import { TabsExample } from "./tabs/tabs.react";

const EXAMPLES = {
    toast: {
        id: "toast",
        name: "Toast",
        component: ToastExample,
    },
    checkbox: {
        id: "checkbox",
        name: "Checkbox",
        component: CheckboxTreeExample,
    },
    accordion: {
        id: "accordion",
        name: "Accordion",
        component: AccordionExample,
    },
    tabs: {
        id: "tabs",
        name: "Tabs",
        component: TabsExample,
    },
} as const;

type ExampleId = keyof typeof EXAMPLES;

export default function App() {
    const [selectedExampleId, setSelectedExampleId] = useState<ExampleId>("tabs");
    const ExampleComponent = EXAMPLES[selectedExampleId].component;

    return (
        <div className={css.app}>
            <div className={css.container}>
                <div className={css.sidebar}>
                    <h3>Examples</h3>
                    <ul>
                        {(Object.keys(EXAMPLES) as ExampleId[]).map((id) => (
                            <li key={id}>
                                <button
                                    className={selectedExampleId === id ? css.active : ""}
                                    onClick={() => setSelectedExampleId(id)}
                                >
                                    {EXAMPLES[id].name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={css.content}>
                    <div id="toast-container" className={css.toastContainer}></div>
                    <ToastProvider target="#toast-container">
                        <ExampleComponent />
                    </ToastProvider>
                </div>
            </div>
        </div>
    );
}

let id = 0;

function ToastExample() {
    const { toast } = useToast();
    return (
        <button
            onClick={() =>
                toast({
                    id: `${id++}`,
                    text: `Toast message: ${id}`,
                })
            }
        >
            Click on me
        </button>
    );
}
