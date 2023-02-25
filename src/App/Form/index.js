import React, { useState } from "react";
import { useRatesData } from "./useRatesData";
import { Result } from "./Result";
import { Button, Fieldset, Info, Input, LabelText, Legend, Wrapper, Loading, Failed } from "./styled";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const [currency, setCurrency] = useState("EUR");
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
                {ratesData.status === "loading"
                    ? (
                        <Loading>
                            Zaczekaj chwilę! < br /> Ładuję kursy walut z Europejskiego Banku Centralnego...
                        </Loading>
                    )
                    : (
                        ratesData.status === "error" ? (
                            <Failed>
                                Coś poszło nie tak... Sprawdź czy masz połączenie z internetem!
                            </Failed>
                        ) : (
                            <>
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
                                    {Object.keys(ratesData.rates).map(((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    )))}
                                </Input>
                                <Button>Przelicz!</Button>
                                <Info>
                                    Kursy pochodzą ze strony nbp.pl z Tabeli nr 017/A/NBP/2023 z dnia 2023-01-26
                                </Info>
                                <Result result={result} />
                            </>
                        )
                    )}
            </Fieldset>
        </Wrapper>
    );
};