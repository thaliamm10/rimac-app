// src/InputAccessory.tsx

import {FC} from 'react';
import './InputAccessory.scss';

interface InputAccessoryProps {
    placeholder: string;
    name: string;
    onChange: any;
    onBlur: any;
    value: string;
    className: any;
    maxLength: number
}

const InputAccessory: FC<InputAccessoryProps> = ({
                                                     placeholder,
                                                     name,
                                                     onChange,
                                                     onBlur,
                                                     value,
                                                     className,
                                                     maxLength
                                                 }) => {

    return (
        <div className="input-accessory">
            <input
                type="text"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                maxLength={maxLength}
                className={className}
            />
            <span className='input-accessory__placeholder'>
                {placeholder}
            </span>
            {/*<label className="input-accessory__placeholder">{placeholder}</label>*/}
        </div>
    );
};

export default InputAccessory;
