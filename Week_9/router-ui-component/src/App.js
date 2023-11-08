import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'

export default function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/button">Go to buttons</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}