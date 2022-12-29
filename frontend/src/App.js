import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Homepage from './pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact'
import Goldenbook from './pages/Goldenbook'
import Presentation from './pages/Presentation'
import Projects from './pages/Projects'


function App() {

    return (
        <>
                <Router>
                    <Routes>
                        <Route path='/' element={<EntryPage/>}/>
                        <Route path='/homepage' element={<Homepage/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/goldenbook' element={<Goldenbook/>}/>
                        <Route path='/presentation' element={<Presentation/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                    </Routes>
                </Router>
        </>
    );
}


export default App;