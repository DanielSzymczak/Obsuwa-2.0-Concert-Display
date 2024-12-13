type ConcertPartProps = {
    id: number;
    nameToDisplay: string;
    hasHappened: boolean;
    length: number;
    concertId: number;
    isSettingUp: boolean;
    colorId: number;
  };
  
  const textColors = ["#ffffff", "#000000", "#000000", "#000000"]; // Array of possible text colors
  
  const ConcertPart: React.FC<ConcertPartProps> = ({
    nameToDisplay,
    colorId,
  }: ConcertPartProps): JSX.Element => {
    // Get the corresponding text color based on colorId
    const textColor = textColors[colorId % textColors.length]; // Use modulo in case colorId exceeds the length of textColors
  
    return (
      <div style={{  borderRadius: "5px", color: textColor}}>
        <h3>{nameToDisplay}</h3>
      </div>
    );
  };
  
  export default ConcertPart;
  