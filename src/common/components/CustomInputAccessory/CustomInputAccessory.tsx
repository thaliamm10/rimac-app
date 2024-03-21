import './CustomInputAccessory.scss';
import {FC} from "react";
import InputAccessory from "../InputAccessory/InputAccessory.tsx"; // Importa tus estilos Sass aquí si los tienes

interface CustomInputAccessoryProps {
    label: string;
    selectOptions: string[];
    selectValue: string;
    inputValue: string;
    onBlur: any,
    onChange: any;
    className: string,

}

const CustomInputAccessory: FC<CustomInputAccessoryProps> = ({
                                                                 label,
                                                                 selectOptions,
                                                                 selectValue,
                                                                 inputValue,
                                                                 onChange,
                                                                 onBlur,
                                                                 className,
                                                             }) => {


    return (
        <div className="custom-input-accessory">
            <div className='custom-input-accessory__select'>
                <select
                    value={selectValue}
                    name='tipoDocumento'
                    onChange={onChange}
                    onBlur={onBlur}
                    className={className}
                >
                    {selectOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                {/*<i className="fa-solid fa-chevron-down"></i>*/}
                <i className="fa-solid fa-chevron-down custom-input-accessory__select__icon"></i>
            </div>
            <InputAccessory
                placeholder={label}
                name='documento'
                onChange={onChange}
                onBlur={onBlur}
                value={inputValue}
                className={className +' input-accessory__border-left'}
                maxLength={8}
            />
        </div>
    );
}

export default CustomInputAccessory;
