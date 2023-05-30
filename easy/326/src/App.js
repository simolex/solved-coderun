import { useState } from "react";
import { Form } from "./Form/Form";

function App() {
    const [flight, setFlight] = useState("-empty-");
    const [avaFl, setAvaFl] = useState([]);

    return (
        <div>
            <div>{`Выбранный рейс: ${flight}`}</div>
            <ul>
                {avaFl.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
            <Form
                onReserveFlight={setFlight}
                onAvailableFlights={setAvaFl}
                getSuggestionsFromServer={(callback) => {
                    callback(["Moscow", "Paris", "Milan"]);
                }}
            />
            ;
        </div>
    );
}

export default App;
