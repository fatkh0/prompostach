import React from "react";
import Container from '../Container/Container'
import BannerContainer from "../Banner/BannerContainer";
import { Route, Routes } from "react-router-dom";
import MainPageContainer from "../MainPage/MainPageContainer";
import AboutPageContainer from "../AboutPage/AboutPageContainer";
import CatalogPageContainer from "../CatalogPage/CatalogPageContainer";
import ContactsPageContainer from "../ContactsPage/ContactsPageContainer";




type TProps = {
}

const Content: React.FC<TProps> = React.memo(() => {




    return (
        <React.Fragment>
                <Routes>

                            <Route path=""  element={<MainPageContainer /> }/>
                            <Route path="about"  element={<AboutPageContainer /> }/>
                            <Route path="catalog"  element={<CatalogPageContainer /> }/>
                            <Route path="contacts"  element={<ContactsPageContainer /> }/>
                            
                </Routes>

        </React.Fragment>
        
    )
})

export default Content