import React from "react";
import { Form } from './Form';
import { Clock } from './Clock';
import { Wrapper } from "./styled";
import { hello } from "../utils/hello";

hello();

function App() {

    return (
        <Wrapper>
            <Clock />
            <Form />
        </Wrapper>
    );
}

export default App;