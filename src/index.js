import {createRoot} from "react-dom/client";
import Cad,{Cadburry} from "./app"

const root = createRoot(document.getElementById("root"));

root.render(
    <>
     <h1>All Cadburry</h1>
     <Cad name="kitkat" emoji="🍫"/>
     <Cad  name="kitkat" emoji="🍫"/>
     <Cad  name="kitkat" emoji="🍫"/>
     <Cadburry/>
    </>
)