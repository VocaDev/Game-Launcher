import { Container, Form, FormControl, Button, Navbar as BsNavbar } from 'react-bootstrap';

const Navbar = ({ onSearch, onToggleTheme, isDark }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <BsNavbar bg={isDark ? "dark" : "light"} variant={isDark ? "dark" : "light"} expand="lg" className="px-3">
      <Container fluid className="d-flex justify-content-between align-items-center">

        {/* Left - Logo */}
        <BsNavbar.Brand>🎮 G Launcher</BsNavbar.Brand>

        {/* Center - Search bar */}
        <Form className="d-flex flex-grow-1 justify-content-center">
          <FormControl
            type="search"
            placeholder="Search games..."
            onChange={handleSearch}
            style={{ width: "300px", minWidth: "200px", flex: "0 0 auto" }}
          />
        </Form>

        {/* Right - Theme toggle */}
        <Button
          className="ms-3 me-3"
          variant={isDark ? "outline-light" : "outline-dark"}
          onClick={onToggleTheme}
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </Button>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
