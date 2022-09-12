import { TitleContainer } from "./styles";

export default function Title({content, img}) {
    return (
        <TitleContainer>
            <h1>{content}</h1>
        </TitleContainer>
    )
}