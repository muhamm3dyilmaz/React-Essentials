export default function Tabs({ ButtonsContainer, buttons, children }) {
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}