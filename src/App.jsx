import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import GameCard from './components/GameCard'
import { Container,Row, Col } from 'react-bootstrap'
import './App.css'

function App() {

  const genres = ['All', 'Action', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports']

  const games = [
  { 
    title: "Cyberpunk 2077", 
    genre: "RPG", 
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg" 
  },
  { 
    title: "Elden Ring", 
    genre: "Action", 
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg" 
  },
  { 
    title: "Stardew Valley", 
    genre: "Simulation", 
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg" 
  },
  { 
    title: "FIFA 24", 
    genre: "Sports", 
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg" 
  },
  { 
    title: "Age of Empires IV", 
    genre: "Strategy", 
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg" 
  },
  { 
    title: "Minecraft", 
    genre: "Adventure", 
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" 
  },
]

//States

const [searchQuery, setSearchQuery] = useState("")
const [selectedGenre, setSelectedGenre] =useState("All")
const [isDark, setIsDark] = useState(true)

//Filter Logic

const filteredGames = games.filter(game => {
  const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
  const matchesGenre = selectedGenre   === "All" || game.genre === selectedGenre 
  return matchesSearch && matchesGenre
})


  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <Navbar 
        onSearch={(val) => setSearchQuery(val)}
        onToggleTheme={() => setIsDark(!isDark)}
        isDark={isDark}  
      />
      <Container fluid>
        <Row className='min-vh-100 min-vw-100'>
          <Col md={3} lg={2} className="sidebar p-0">
          <Sidebar 
            genres={genres} 
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
          </Col>
          <Col md={9} lg={10} className="p-3">
            <h2 className='mb-4'>Game Library</h2>
            {filteredGames.length > 0 ? (
              <Row className={`g-4 ${filteredGames.length === 1 ? 'justify-content-start' : ''}`}>
                {filteredGames.map((game, idx) => (
                  <Col xs={12} sm={6} md={4} lg={3} className='d-flex justify-content-center' >
                    <GameCard game={game} />
                  </Col>
                ))}
              </Row>
            ) : (
              <p>No games found 😢</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
