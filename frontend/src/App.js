import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Homepage from './pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <>
                <Router>
                    <Routes>
                        <Route path='/' element={<EntryPage/>}/>
                        <Route path='/homepage' element={<Homepage/>}/>
                    </Routes>
                </Router>
        </>
    );
}


export default App;