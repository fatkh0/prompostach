import React from "react";
import ContactsPage from "./ContactsPage";


type TProps = {}

const ContactsPageContainer: React.FC<TProps> = React.memo((props) => {


    return <ContactsPage {...props}/>
})

export default ContactsPageContainer