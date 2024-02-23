import Select, { ActionMeta } from "react-select";
import { SelectData } from "@utils/data/selectData";

interface CustomSelectProps {
  options: SelectData[];
  defaultValue: SelectData;
  onChange?: (
    value: SelectData | null,
    actionMeta: ActionMeta<SelectData>
  ) => void;
  isSearchable?: boolean;
  className?: string;
  id?: string;
  name?: string;
  classNames?: {
    control?: () => string;
    singleValue?: () => string;
  };
}

const CustomSelect = ({
  options,
  defaultValue,
  onChange,
  isSearchable,
  className,
  classNames,
  id,
  name,
}: CustomSelectProps) => {
  return (
    <Select
      id={id}
      name={name}
      classNamePrefix={"custom-select"}
      options={options}
      defaultValue={defaultValue}
      isSearchable={isSearchable}
      onChange={onChange}
      className={className}
      classNames={classNames}
      styles={{
        menuList: (base) => ({
          ...base,
          "::-webkit-scrollbar": {
            width: "4px",
            height: "1px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#8C8C8C",
            borderRadius: "8px",
          },
        }),
      }}
    />
  );
};

export default CustomSelect;
