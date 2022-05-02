import {render} from "react-dom";
import 'antd/dist/antd.min.css'
import Main from "./Main";

const rootElement = document.getElementById("root");
render(
    <Main />,
    rootElement
)