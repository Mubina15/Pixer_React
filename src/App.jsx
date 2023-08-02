import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Intro } from './Components/Intro/Intro';
import { Main } from './Components/Main/Main';


function App() {
    return(
        <div>
           <Header />
           <Intro />
           <Main />
           <Footer />
        </div>

    )
}

export default App;
