import React from "react";
import MainCompanyDescription from './MainCompanyDescription'

type TProps = {
}

const MainCompanyDescriptionContainer: React.FC<TProps> = React.memo(() => {

    const title: string = `Цветной металлопрокат со склада и под заказ`
    const description: string = `Компания «Prompostach» имеет большой опыт в поставках 
    цветного металлопроката ООО «Завод цветных металлов» – ведущего предприятия 
    металлургии Украины и одного из крупнейших производителей цветного 
    металлопроката в странах Европы. Цветной металлопрокат с авторитетной 
    маркой завода завоевал высокое признание у наших партнеров.`


    return <MainCompanyDescription title={title} description={description} />
})

export default MainCompanyDescriptionContainer