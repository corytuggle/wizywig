import Header from "./components/Header";
import TextEditor from './components/TextEditor';
import Progress from "./components/ProgressBar";
import RandomTheme from './components/themes/ThemeRandomizer';

function App() {
    return (
        <div id="page" >
            <Header />
            <TextEditor />
            {/* <Progress /> */}
            {/* <RandomTheme /> */}
        </div>
    )
}

export default App;