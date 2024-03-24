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
    checked:any
}

const InputCheckAccessory: FC<InputCheckAccessoryProps> = ({
                                                               name,
                                                               onChange,
                                                               onBlur,
                                                               value,
                                                               className,
                                                               checked,
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
                    checked={checked}
                    className={className}/>
                <span className='check-icon'></span>
                <span>{label}</span>
            </label>
        </div>
    );
};

export default InputCheckAccessory;
