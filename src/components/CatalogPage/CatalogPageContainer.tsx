import React from "react";
import CatalogPage from "./CatalogPage";


type TProps = {}

const CatalogPageContainer: React.FC<TProps> = React.memo((props) => {


    return <CatalogPage {...props}/>
})

export default CatalogPageContainer