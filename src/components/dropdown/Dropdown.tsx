import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { className as classNameUtil } from '~/utils/className';

type PropTypes = {
    name: string;
    control: any;
    dropdownLabel: string;
    setValue: Function;
    list: Array<string>;
    className: string;
    selected?: string;
};

const Dropdown = ({
    name,
    control,
    dropdownLabel = '',
    setValue,
    list = [],
    className,
    selected,
}: PropTypes) => {
    const dropdownValue = useWatch({
        control,
        name,
        defaultValue: selected ? selected : dropdownLabel, // default value before the render
    });
    const [isDeclare, setIsDeclare] = useState(true);
    const handleGetValue = (e: any) => {
        setValue(name, e.target.value);
    };
    useEffect(() => {
        if (isDeclare) {
            setValue(name, selected);
            setIsDeclare(false);
        }
    });
    return (
        <select
            defaultValue={selected ? selected : dropdownLabel}
            onChange={handleGetValue}
            className={classNameUtil('px-5 py-3 rounded-md border border-c6', className)}
        >
            <option value={dropdownLabel} disabled>
                {dropdownLabel}
            </option>
            {list.map((item, index) => (
                <option data-value={item} key={index}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
