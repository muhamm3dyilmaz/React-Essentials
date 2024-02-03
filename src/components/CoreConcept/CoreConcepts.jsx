import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {/* The 'map' attribute returns 'CoreConcept' Components by Dynamic way. (Kinda 'ListView.builder' in Flutter)*/}
                {CORE_CONCEPTS.map((conceptItems) => (
                    <CoreConcept key={conceptItems.title} {...conceptItems} />
                ))}
            </ul>
        </section>
    );
}