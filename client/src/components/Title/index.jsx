import { MyTitle } from "./styles"


function Title({ children, ...props }) {
    return (

        <MyTitle>{children}</MyTitle>
    )
}


export default Title
