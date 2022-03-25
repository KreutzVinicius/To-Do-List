import { Container, Content } from "./styles";

import logoImg from '../../assets/checkbox.png'

interface HeaderProps {
    onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="To do" />
                <button type="button" onClick={onOpenNewTaskModal}> +</button>

            </Content>
        </Container >
    )
}