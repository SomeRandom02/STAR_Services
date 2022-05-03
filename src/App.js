import TopBar from "./Components/TopBar/TopBar";
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer";
import PreLoader from './Components/PreLoader/PreLoader'
const App = () => {
    return (
      <div >
        <PreLoader/>
        <TopBar />
        <Body />
        <Footer />
      </div>
    );
}


export default App;
