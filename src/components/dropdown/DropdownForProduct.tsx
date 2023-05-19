import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { className as classNameUtil } from '~/utils/className';

type PropTypes = {
    name: string;
    control: any;
    dropdownLabel: string;
    setValue: Function;
    list: Array<any>;
    className: string;
    selected?: any;
};

const DropdownForProduct = ({
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
        defaultValue: selected?.name ? selected?.name : dropdownLabel, // default value before the render
    });

    const handleGetValue = (e: any) => {
        setValue(name, e.target.value);
    };
    useEffect(() => {
        if (selected) {
            setValue(name, selected.id);
        }
    });

    return (
        <select
            defaultValue={selected?.name ? selected?.name : dropdownLabel}
            onChange={handleGetValue}
            className={classNameUtil('px-5 py-3 rounded-md border border-c6', className)}
        >
            <option value={dropdownLabel} disabled>
                {dropdownLabel}
            </option>
            {list.map((item, index) => (
                <option value={item.id} key={index}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default DropdownForProduct;
