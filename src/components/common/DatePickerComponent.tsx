import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Box, Text, CSSObject, Flex } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface DatePickerType {
  setSearchDateString: Dispatch<SetStateAction<string>>;
  setSelectedEndDateString: Dispatch<SetStateAction<string>>;
  isRangeSearch: boolean;
}

const DatePickerComponent = (props: DatePickerType) => {
  const { setSearchDateString, setSelectedEndDateString, isRangeSearch } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dateToString = (date: Date): string => {
    return date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
  };

  const CustomInput = ({ value, onClick }: { value: string; onClick: () => void }) => (
    <div onClick={onClick}>
      {value}
      {isCalendarOpen ? "업" : "다운"}
    </div>
  );
  useEffect(() => {
    setSearchDateString(dateToString(startDate));
    setSelectedEndDateString(dateToString(endDate));
  }, [startDate, endDate]);

  const DateBox: CSSObject = {
    padding: "10px 15px",
    border: "1px solid #ddd",
    borderRadius: "30px",
    fontSize: "13px",
    bg: "#fff",
    width: "260px",
  };

  return (
    <Box sx={DateBox}>
      <Flex alignItems="center" gap="10px" justifyContent="space-between">
        <Flex alignItems="center" gap="5px">
          <div>시작:</div>
          <Box className="date-picker-input">
            <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} selectsStart minDate={new Date()} onChange={(date: Date) => setStartDate(date)} />
          </Box>
        </Flex>

        {isRangeSearch && (
          <React.Fragment>
            <Flex alignItems="center" gap="5px">
              <div>-</div>
              <div> 끝:</div>
              <Box className="date-picker-input">
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  minDate={startDate}
                  onChange={(date: Date) => setEndDate(date)}
                />
              </Box>
            </Flex>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

export default DatePickerComponent;
