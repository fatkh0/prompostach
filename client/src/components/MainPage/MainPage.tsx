import React from "react";
import BannerContainer from "../Banner/BannerContainer";
import MainCompanyDescriptionContainer from "../MainCompanyDescription/MainCompanyDescriptionContainer";

type TProps = {}

const MainPage: React.FC<TProps> = React.memo(() => {

    return (
        <div>
            <section className="mb-10 ">
                <BannerContainer />
            </section>
            <section>
                <MainCompanyDescriptionContainer />
            </section>
        </div>
    )
})

export default MainPage