import "./style.css";
import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <h1 className="form__legend">
                    Przelicznik walut
                </h1>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w PLN:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpisz kwotę w PLN"
                            className="form__field"
                            type="number"
                            required
                            step="0.01"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Wybierz walutę:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <p className="form__info">
                Kursy pochodzą ze strony nbp.pl z Tabeli nr 017/A/NBP/2023 z dnia 2023-01-26
            </p>

            <Result result={result} />
        </form>
    );
};