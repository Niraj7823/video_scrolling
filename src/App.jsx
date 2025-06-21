import HederNav from "./components/HederNav";
import VideoFeed from "./components/VideoFeed";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <HederNav />
      <VideoFeed />
      <BottomNav />
    </div>
  );
}

export default App;
