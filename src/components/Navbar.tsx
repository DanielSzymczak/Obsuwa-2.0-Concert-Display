import {Container,Navbar as NavbarBs} from 'react-bootstrap'
import Menu from './Menu'
export function Navbar(){
    return <NavbarBs className='bg-white shadow-sm mb-3'>
        <Container>
            <Menu/>
        </Container>

    </NavbarBs>
}