/**
 * onReserveFlight: (flight: string) => void; - Функция, в которую передается выбранный рейс. Вызвать один раз
 * onAvailableFlights: (availableFlights: string[]) => void; - Функция, в которую передаются все доступные рейсы. Вызывать на каждом обновлении списка доступныъх рейсов
 * getSuggestionsFromServer: (callback: (suggestions: string[]) => void) => void; - Функция, в коллбек которой приходит список доступных рейсов.
 */

import React from "react";

const Form = ({ onReserveFlight, onAvailableFlights, getSuggestionsFromServer }) => {
    // Модифицировать код можно только внутри компонента Form
    const [availableFlights, setAvailableFlights] = React.useState([]); // Например, ['Moscow', 'Paris', 'Milan']
    const [pickedFlight, setPickedFlight] = React.useState(null);

    React.useEffect(() => {
        getSuggestionsFromServer((data) => {
            setAvailableFlights(data);

            // Не удаляйте эту строчку
            setPickedFlight(data[0]);
        });
    }, []);

    React.useEffect(() => {
        if (onAvailableFlights) {
            onAvailableFlights(availableFlights);
        }
    }, [onAvailableFlights, availableFlights]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        onReserveFlight(pickedFlight);
    };

    const onChooseFlight = (choosenFlight) => {
        setPickedFlight(choosenFlight);
    };

    return (
        <form>
            <ul>
                Доступные рейсы:
                {availableFlights.map((availableFlight) => (
                    <li
                        key={availableFlight}
                        onClick={() => onChooseFlight(availableFlight)}
                        style={{
                            ...(availableFlight === pickedFlight && {
                                border: "1px solid red",
                            }),
                        }}
                    >
                        {availableFlight}
                    </li>
                ))}
            </ul>

            {/* Не меняйте аттрибут value у этого элемента */}
            <input type='button' value='Submit' onClick={onFormSubmit} />
        </form>
    );
};

export { Form };
