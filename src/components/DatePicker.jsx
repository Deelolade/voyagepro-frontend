// DatePicker.jsx
import React from 'react';
import { Controller } from "react-hook-form";
const DatePicker = ({ control, name, error }) => {

  return (
    <div className="mt-4">
      <label htmlFor={name} className="text-zinc-800 text-lg font-semibold">
        Travel Date
      </label>

      <div className="flex items-center border-2 border-zinc-500 w-full px-3 bg-lightgray py-2 rounded-md">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type="date"
              {...field}
              value={field.value || ""}
              className="text-lg outline-none w-full bg-lightgray shadow-none"
              placeholder="Select travel date"
            />
          )}
        />
      </div>

      {error && <p className="text-red mt-1 text-sm">{error.message}</p>}
    </div>
  );
};

export default DatePicker;
