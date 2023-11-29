import { useState } from 'react';

interface Props {
  label?: string;
  value?: string;
  onChange: (v: string) => void;
}

export const FilterBar2 = ({
  label,
  value: initialValue = '',
  onChange,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex h-32 w-full flex-col place-content-center space-y-5 rounded-3xl bg-white p-3 lg:w-8/12 lg:max-w-lg">
      {label && <span className=" text-xl font-semibold">{label}</span>}
      <span>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            onChange(event.target.value);
          }}
          className="bg-turquoise-200 h-7 w-full rounded-full px-2 py-1 pl-4 focus:border-gray-100 focus:outline-none focus:ring focus:ring-gray-300 sm:text-base"
        />
      </span>
    </div>
  );
};
