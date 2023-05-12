import { useController } from 'react-hook-form';
import { isLightColor } from '~/utils/Color';
import { className as ClassName } from '~/utils/className';

const InputDefault = ({ name, control, className, maxLenght, ...props }: any) => {
    const { field } = useController({
        name,
        control,
        defaultValue: '',
    });
    return (
        <div className={className}>
            <input
                className='px-5 rounded-md py-3 border border-c6 w-full'
                {...field}
                {...props}
                maxLength={maxLenght ? maxLenght : '524288'}
            />
            {field.name === 'colorValue' ? (
                <div
                    className={ClassName(
                        'w-[50%] h-[50px] rounded-2xl text-black border',
                        field.name === 'colorValue' && isLightColor(field.value)
                            ? ' border-black'
                            : 'border-gray-c3',
                    )}
                    style={{ backgroundColor: field.value }}
                ></div>
            ) : (
                ''
            )}
        </div>
    );
};

export default InputDefault;
