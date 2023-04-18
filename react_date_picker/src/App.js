import React from "react";
import DatePicker from "react-datepicker";

function App() {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <DatePicker
  // selected={date}
  // onChange={handleDateChange}
  showTimeSelect
  dateFormat="Pp"
/>
    </>
  );
}

export default App;
