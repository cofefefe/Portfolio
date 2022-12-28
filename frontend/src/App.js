import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <>
                <Router>
                    <Routes>
                        <Route path='/' element={<EntryPage/>}/>
                    </Routes>
                </Router>
        </>
    );
}


export default App;