import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "../Section.jsx";
import { EXAMPLES } from "../../data";

export default function TabButtons() {
    //Hook functions 'her zaman!' en üst seviyede çağırılır buradaki gibi
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        //selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent =
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>

                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
    }

    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton
                    label="Components"
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}
                />
                <TabButton
                    label="JSX"
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}
                />
                <TabButton
                    label="Props"
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}
                />
                <TabButton
                    label="State"
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}
                />
            </menu>

            {tabContent}
        </Section>
    );
}