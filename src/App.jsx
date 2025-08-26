import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Container,Row, Col } from 'react-bootstrap'
import GameCard from './components/GameCard'

function App() {

  const genres = ['Action', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports']

    const games = [
    { title: "Elden Ring", genre: "RPG" },
    { title: "FIFA 24", genre: "Sports" },
    { title: "Civilization VI", genre: "Strategy" },
    { title: "The Witcher 3", genre: "RPG" },
    { title: "Call of Duty", genre: "Action" },
  ]

  return (
    <>
      <Navbar 
        onSearch={(val) => console.log('Search:', val)}
        onToggleTheme={(isDark) => console.log('Dark mode:', isDark)} 
      />
      <Container fluid>
        <Row className='min-vh-100'>
          <Col md={3} lg={2} className="bg-light p-0">
          <Sidebar 
            genres={genres} 
            onSelectGenre={(genre) => console.log('Selected genre:', genre)}
          />
          </Col>
          <Col md={9} lg={10} className="p-3">
            <h2>All Games</h2>
            <Row>
              {games.map((game, index) => (
                <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                  <GameCard game={game} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
