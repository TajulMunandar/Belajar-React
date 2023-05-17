import NavigationBar from "./component/navbar";
import Intro from "./component/intro";
import Trending from "./component/Trending";
import Superhero from "./component/Superhero";
import "./style/Landing.css"

function App() {
  return (
    <>
      <div>
        {/* Intro */}
        <div className="Bg">
          <NavigationBar />
          <Intro />        
        </div>
        {/* end intro */}

        {/* trending */}
        <div className="trending">
          <Trending />
        </div>
        {/* end trending */}

        {/* superhero */}
        <div className="superhero">
          <Superhero />
        </div>
        {/* endsuperhero */}
      </div>
    </>
  );
}

export default App;
