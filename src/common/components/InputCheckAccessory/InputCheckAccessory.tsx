// src/InputAccessory.tsx

import {FC} from 'react';
import './InputCheckAccessory.scss';

interface InputCheckAccessoryProps {
    name: string;
    onChange: any;
    onBlur: any;
    value: any;
    className: any;
    label: string
}

const InputCheckAccessory: FC<InputCheckAccessoryProps> = ({
                                                               name,
                                                               onChange,
                                                               onBlur,
                                                               value,
                                                               className,

                                                               label
                                                           }) => {


    return (
        <div className='input-check-accessory'>
            <label>
                <input
                    type="checkbox"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    className={className}/>
                <span className='check-icon'></span>
                <span>{label}</span>
            </label>
        </div>
    );
};

export default InputCheckAccessory;
