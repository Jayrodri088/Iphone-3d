import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import Webgi from "./components/Webgi";
import Loader from "./components/Loader";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlerPreview = () => {
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlerPreview} />
      </div>
      <Webgi contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
