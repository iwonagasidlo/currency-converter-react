import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Button, Fieldset, Info, Input, LabelText, Legend, Wrapper } from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <Wrapper onSubmit={onSubmit}>
            <Fieldset>
                <Legend>
                    Przelicznik walut
                </Legend>
                <LabelText>
                    Kwota w PLN:
                </LabelText>
                <Input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę w PLN"
                    type="number"
                    required
                    step="0.01"
                />
                <LabelText>
                    Wybierz walutę:
                </LabelText>
                <Input
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )))}
                </Input>
            </Fieldset>
            <Button>Przelicz!</Button>
            <Info>
                Kursy pochodzą ze strony nbp.pl z Tabeli nr 017/A/NBP/2023 z dnia 2023-01-26
            </Info>
            <Result result={result} />
        </Wrapper>
    );
};