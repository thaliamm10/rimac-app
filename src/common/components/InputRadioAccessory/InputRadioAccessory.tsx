

import {FC} from 'react';
import './InputRadioAccessory.scss';

interface InputRadioAccessoryProps {
    name: string;
    onChange: any;
    onBlur: any;
    value: string;
    className: any;
    checked:boolean

}

const InputRadioAccessory: FC<InputRadioAccessoryProps> = ({

                                                               name,
                                                               onChange,
                                                               onBlur,
                                                               value,
                                                               className,
                                                               checked
                                                           }) => {

    return (
        <div className='input-radio-accessory'>
            <label>
                <input
                    type="radio"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    checked={checked}
                    className={className}/>
                <span className='check-icon'></span>
            </label>
        </div>
    );
};

export default InputRadioAccessory;
