import {Container, Form} from 'react-bootstrap';

const Navbar = ({onSearch, onToggleTheme}) => {
    return ( 
        <nav className='bg-dark text-white py-2'>
        <Container className='d-flex justify-content-between align-items-center'>
        {/* Left: Logo */}
        <div className='fw-bold fs-4'>
           🎮 GLauncher
        </div>
        {/* Center: Search Bar */}
        <Form className='w-50'>
            <Form.Control 
                type='text'
                placeholder='Search games...'
                onChange={(e) => onSearch && onSearch(e.target.value)}
            />
        </Form>
        {/* Right: Darkmode toogle */}
        <div className='form-check form-switch'>
            <input 
                type="checkbox" 
                className='form-check-input'
                id='darkModeSwitch'
                onChange={(e) => onToggleTheme && onToggleTheme(e.target.checked)}
            />
        </div>
        </Container>
        </nav>
     );
}
 
export default Navbar;