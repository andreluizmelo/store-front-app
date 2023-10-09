import Link from 'next/link'
import { HeaderContainer, HeaderTitleContainer, HeaderActionContainer } from './styles'

export const Header = () => {
    return <HeaderContainer>
        <HeaderTitleContainer>
            <Link className="btn btn-link" href="/" role="button" style={{maxWidth: '320px'}}>
                Materiais de construção
            </Link>
            <input className="form-control" type="text" placeholder="Pesquisar..."></input>
            <button className='btn btn-primary' type="button">Pesquisar</button>
        </HeaderTitleContainer>
        <HeaderActionContainer>
            <button type="button" className="btn btn-secondary">Log in</button>
        </HeaderActionContainer>
    </HeaderContainer>
}