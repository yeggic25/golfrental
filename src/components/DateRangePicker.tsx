'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: Date | null, end: Date | null) => void;
  minDate?: Date;
}

export default function DateRangePicker({
  startDate,
  endDate,
  onChange,
  minDate = new Date(),
}: DateRangePickerProps) {
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate' | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    onChange(date, endDate);
    setFocusedInput('endDate');
  };

  const handleEndDateChange = (date: Date | null) => {
    onChange(startDate, date);
    setFocusedInput(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pickup Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          placeholderText="Select pickup date"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          dateFormat="MMM d, yyyy"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Return Date
        </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || minDate}
          placeholderText="Select return date"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          dateFormat="MMM d, yyyy"
        />
      </div>
    </div>
  );
} 