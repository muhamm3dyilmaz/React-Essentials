export default function Section({ title, children, ...proxyProps }) {
    return (
        <section {...proxyProps}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}