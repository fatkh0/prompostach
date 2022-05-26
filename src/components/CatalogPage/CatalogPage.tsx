import React from "react";
import Container from "../Container/Container";


type TProps = {}

const CatalogPage: React.FC<TProps> = React.memo(() => {


    return (
        <section>
            <Container >
                <div>
                    Catalog
                </div>
            </Container>
        </section>
    )
})

export default CatalogPage