//import React from "react";
import ConcertPart from "./ConcertPart"; // Correctly importing as a default export

interface ConcertListProps {
  concertId: number;
  concertTimeStart: number; // Concert start hour
  date: string; // Added date parameter to hold the concert date
}

export function ConcertList({ concertId, concertTimeStart, date }: ConcertListProps) {
  // Array of concert parts
  const concertParts = [
    {
      id: 1,
      nameToDisplay: "Ustawianie",
      hasHappened: false,
      length: 1800, // 30 minutes
      concertId: 100, 
      isSettingUp: true,
      colorId: 1,
    },
    {
      id: 2,
      nameToDisplay: "Próba",
      hasHappened: false,
      length: 5400, // 90 minutes
      concertId: 100,
      isSettingUp: false,
      colorId: 0,
    },
    {
      id: 3,
      nameToDisplay: "Piosenka 1",
      hasHappened: false,
      length: 5400, // 90 minutes
      concertId: 100,
      isSettingUp: false,
      colorId: 2,
    },
    {
      id: 4,
      nameToDisplay: "Zakończenie",
      hasHappened: false,
      length: 3600, // 60 minutes
      concertId: 100,
      isSettingUp: false,
      colorId: 3,
    },
    {
      id: 0,
      nameToDisplay: "Ustawianie 1",
      hasHappened: false,
      length: 1800, // 30 minutes
      concertId: 101,
      isSettingUp: true,
      colorId: 1,
    },
    {
      id: 1,
      nameToDisplay: "Piosenka 1",
      hasHappened: false,
      length: 5400, // 90 minutes
      concertId: 101,
      isSettingUp: false,
      colorId: 2,
    },
    {
      id: 2,
      nameToDisplay: "Ustawianie 2",
      hasHappened: false,
      length: 3600, // 60 minutes
      concertId: 101,
      isSettingUp: false,
      colorId: 1,
    },
    {
        id: 3,
        nameToDisplay: "Piosenka 2",
        hasHappened: false,
        length: 3600, // 60 minutes
        concertId: 101,
        isSettingUp: false,
        colorId: 2,
      },
      {
        id: 4,
        nameToDisplay: "Zakończenie",
        hasHappened: false,
        length: 3600, // 60 minutes
        concertId: 101,
        isSettingUp: false,
        colorId: 0,
      },
    {
      id: 0,
      nameToDisplay: "Ustawianie",
      hasHappened: false,
      length: 1800, // 30 minutes
      concertId: 102,
      isSettingUp: true,
      colorId: 1,
    },
    {
      id: 1,
      nameToDisplay: "Próba 1",
      hasHappened: false,
      length: 5400, // 90 minutes
      concertId: 102,
      isSettingUp: false,
      colorId: 0,
    },
    {
      id: 2,
      nameToDisplay: "Próba 2",
      hasHappened: false,
      length: 3600, // 60 minutes
      concertId: 102,
      isSettingUp: false,
      colorId: 0,
    },
    {
        id: 3,
        nameToDisplay: "Próba 3",
        hasHappened: false,
        length: 3600, // 60 minutes
        concertId: 102,
        isSettingUp: false,
        colorId: 0,
      },
      {
        id: 4,
        nameToDisplay: "Zakończenie",
        hasHappened: false,
        length: 3600, // 60 minutes
        concertId: 102,
        isSettingUp: false,
        colorId: 3,
      },
      {
        id: 5,
        nameToDisplay: "Ustawianie",
        hasHappened: false,
        length: 1800, // 30 minutes
        concertId: 102,
        isSettingUp: true,
        colorId: 1,
      },
      {
        id: 6,
        nameToDisplay: "Próba 1",
        hasHappened: false,
        length: 5400, // 90 minutes
        concertId: 102,
        isSettingUp: false,
        colorId: 0,
      },
      {
        id: 7,
        nameToDisplay: "Próba 2",
        hasHappened: false,
        length: 3600, // 60 minutes
        concertId: 102,
        isSettingUp: false,
        colorId: 0,
      },
      {
          id: 8,
          nameToDisplay: "Próba 3",
          hasHappened: false,
          length: 3600, // 60 minutes
          concertId: 102,
          isSettingUp: false,
          colorId: 0,
        },
        {
          id: 9,
          nameToDisplay: "Zakończenie",
          hasHappened: false,
          length: 2000, // 60 minutes
          concertId: 102,
          isSettingUp: false,
          colorId: 3,
        },
      
  ];

  // Define colors (reuse logic from ConcertPart)
  const backgroundColors = ["#000000", "#ccffcc", "#ccccff", "#ffffff"];
  const textColors = ["#ffffff", "#000000", "#000000", "#000000"];

  // Helper function to format seconds into HH:mm:ss
  const formatTime = (seconds: number): string => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 5); // Get HH:mm format
  };

  // Starting time of the concert (in seconds)
  let accumulatedTime = concertTimeStart * 3600; // Convert start time from hours to seconds

  return (
    <div>
      {/* Display the concert date */}
      <h2>Koncert: {date}</h2>

      {concertParts
        .filter((part) => part.concertId === concertId) // Filter by concertId
        .map((concertPart) => {
          // Calculate the start time for the current part
          const startTimeForPart = accumulatedTime;

          // Update the accumulated time after rendering the current part
          accumulatedTime += concertPart.length;

          const backgroundColor =
            backgroundColors[concertPart.colorId % backgroundColors.length];
          const fontColor =
            textColors[concertPart.colorId % textColors.length];

          return (
            <div
              key={concertPart.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "5px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor, // Apply the background color here
              }}
            >
              {/* Render the ConcertPart */}
              <ConcertPart
                id={concertPart.id}
                nameToDisplay={concertPart.nameToDisplay}
                hasHappened={concertPart.hasHappened}
                length={concertPart.length}
                concertId={concertPart.concertId}
                isSettingUp={concertPart.isSettingUp}
                colorId={concertPart.colorId}
              />

              {/* Render the start time */}
              <p style={{ color: fontColor, marginLeft: "10px" }}>
                {formatTime(startTimeForPart)} - {formatTime(startTimeForPart + concertPart.length)}
              </p>
            </div>
          );
        })}
    </div>
  );
}
