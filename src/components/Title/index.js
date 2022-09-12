import { TitleContainer } from "./styles";

export default function Title({content}) {
    return (
        <TitleContainer>
            <h1>{content}</h1>
        </TitleContainer>
    )
}
