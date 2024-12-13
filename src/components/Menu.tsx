import React, { useState } from "react";
import DropDown from "./DropDown";
import { ConcertList } from "./ConcertList";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectConcert, setSelectConcert] = useState<string>(""); // Name of the selected concert
  const [concertId, setConcertId] = useState<number>(100); // Default concertId to 100
  const [concertDate, setConcertDate] = useState<string>("11/11/2024 Piątek 18:00"); // Default date for concert

  // Array of concert data, which includes date, name and start time
  const concerts = () => {
    return [
      "11/11/2024 Piątek 18:00",
      "12/11/2024 Sobota 10:30",
      "12/11/2024 Sobota 18:00",
    ];
  };

  const concertIds = () => {
    return [100, 101, 102]; // Array of concert IDs
  };

  const concertTimeStart = () => {
    return [18, 10.5, 18]; // Array of concert start times (e.g., 18:00 for the first concert)
  };

  /**
   * Toggle the drop-down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop-down menu if a click occurs outside of the drop-down element.
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the concert name, concertId, and concert date from the child component
   */
  const concertSelection = (concert: string, concertId: number): void => {
    setSelectConcert(concert);
    setConcertId(concertId); // Update the concertId state
    setConcertDate(concert); // Update the concert date state
  };

  // Get the start time based on the selected concertId
  const concertStartTime = concertTimeStart()[concertIds().indexOf(concertId)];

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
      >
        <div>{selectConcert ? "Wybrano: " + selectConcert : "Wybierz koncert"}</div>
        {showDropDown && (
          <DropDown
            concerts={concerts()} // Pass concert names
            concertIds={concertIds()} // Pass concert IDs
            showDropDown={showDropDown} // Pass the state to control visibility
            toggleDropDown={toggleDropDown} // Toggle visibility of the dropdown
            concertSelection={concertSelection} // Callback for concert selection
          />
        )}
      </button>

      {/* Pass the concertId, concertTimeStart, and concertDate to ConcertList */}
      <ConcertList concertId={concertId} concertTimeStart={concertStartTime} date={concertDate} />
    </>
  );
};

export default Menu;
