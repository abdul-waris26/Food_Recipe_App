import react from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App"
import Connector from "./connector"

ReactDOM.render(
    <BrowserRouter>
        <Connector>
            <App></App>
        </Connector>
    </BrowserRouter>,
    document.getElementById("root")
); 