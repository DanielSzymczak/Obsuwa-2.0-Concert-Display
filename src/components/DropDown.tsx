import React from 'react';

type DropDownProps = {
  concerts: string[];         // Concert names array
  concertIds: number[];       // Concert IDs array
  showDropDown: boolean;      // Whether the dropdown is visible or not
  toggleDropDown: () => void; // Function to toggle dropdown visibility
  concertSelection: (concert: string, concertId: number) => void; // Callback to pass selected concert and ID
};

const DropDown: React.FC<DropDownProps> = ({
  concerts,
  concertIds,
  showDropDown,
  toggleDropDown,
  concertSelection,
}: DropDownProps): JSX.Element => {
  
  // Handle concert selection and pass both the concert name and concertId
  const onClickHandler = (concert: string, concertId: number): void => {
    concertSelection(concert, concertId); // Pass both name and ID
    toggleDropDown(); // Close dropdown after selection
  };

  return (
    <div className={showDropDown ? 'dropdown active' : 'dropdown'}>
      {concerts.map((concert, index) => (
        <p
          key={index}
          onClick={() => onClickHandler(concert, concertIds[index])} // Pass name and ID to the handler
        >
          {concert}
        </p>
      ))}
    </div>
  );
};

export default DropDown;
