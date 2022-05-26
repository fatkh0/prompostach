import React from "react";
import Container from "../Container/Container";


type TProps = {}

const ContactsPage: React.FC<TProps> = React.memo(() => {


    return (
        <section>
            <Container >
                <div>
                    Contacts
                </div>
            </Container>
        </section>
    )
})

export default ContactsPage