
//import './App.css';
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import Header from "./Header";
import Post from "./Post.js";
import Side from "./Side.js";

 export function App() {

  const firstArtical= `sdfsdfsdfsd
  dfsdfsdfsdf
  sdfsdfsdfsdfsdfsdf
  sdfsfsdfwerwerwerwer`;
  return (
    <div>
            <Header/>
            <div style={{display:"flex", justifyContent:"center",}}>  
            {/* POST & SIDE MENU CONTAINER */}
            <div style={{display:"flex", width:"60%", }}>
              {/*POST CONTAINER*/}
              <div style={{width:"70%"}}>
                <Post title="Artical 01 with Props" details="swefdfgdfgdfgdfgdfgdgdgdgdhgrjtfthhn"/>
                <Post title="Artical 02" details="kflgmblfkgmlfkgmkl fgmhklfmghlfmglk mfghklmfl"/>
                <Post title = " New Artical with Props" details="none"/>
                <Post title="This is after props use" details="none"/>
              </div>
              {/*SIDE MENU CONTAINER */}
              <div style={{width:"30%",}}>
                <Side/>
              </div>
            </div>
            </div>

    </div>
  );
}
export default App;