// @ts-ignore
import imgLogo from "../../../assets/media/baners/img.png";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {
    CAMPO_CANTIDAD_CARACTERES,
    CAMPO_NUMERICO,
    CAMPO_OBLIGATORIO, CAMPO_POLITICA_COMERCIAL,
    CAMPO_POLITICA_PRIVACIDAD
} from "../../../common/constants/plans.contant.ts";
import CustomInputAccessory from "../../../common/components/CustomInputAccessory/CustomInputAccessory.tsx";
import InputAccessory from "../../../common/components/InputAccessory/InputAccessory.tsx";
import InputCheckAccessory from "../../../common/components/InputCheckAccessory/InputCheckAccessory.tsx";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {startTransition} from "react";


// Inicialización de campos
const initialValues = {
    tipoDocumento: 'DNI',
    documento: '',
    telefono: '',
    terminos1: false,
    terminos2: false,

};

function QuoteRequest() {
    const navigate = useNavigate();
    // const navigate = useNavigate();
    /**
     * Validación de atributos
     */
    const validationSchema =
        Yup.object({
            documento: Yup.string()
                .required(CAMPO_OBLIGATORIO)
                .matches(/^[0-9]+$/, CAMPO_NUMERICO)
                .min(8, ` ${CAMPO_CANTIDAD_CARACTERES} 8 dígitos`),
            telefono: Yup.string()
                .required(CAMPO_OBLIGATORIO)
                .matches(/^[0-9]+$/, CAMPO_NUMERICO)
                .min(9, ` ${CAMPO_CANTIDAD_CARACTERES} 9 dígitos`),
            terminos1: Yup.boolean()
                .oneOf([true], CAMPO_POLITICA_PRIVACIDAD),
            terminos2: Yup.boolean()
                .oneOf([true], CAMPO_POLITICA_COMERCIAL),
        });
    /**
     * Cambia clase de Estilos de campos según validación
     */

    const getValidationClass = (touched: boolean | undefined, error: string | undefined) => (touched && error ? 'is-invalid' : '');

    // const fetchRegister = (): Promise<any> =>
    //     axios.post('/register', formik.values).then((response) => response.data);
    const getData = async () => {
        // Simula una respuesta con datos simulados
        return new Promise((resolve) => {
            // setTimeout(() => {
                const data = {
                    ...formik.values
                };
                resolve(data);

            // }, 1000);
        });
    };
    const {data, isLoading} = useQuery({
        queryKey: ['dataRequest'],
        queryFn: getData,
        retry: 0,
        refetchOnWindowFocus: false,

    });


    // console.log('Data:', data);
    // console.log('Loading:', isLoading);

    const handleSubmit = () => {
        console.log('entraaa')
        if (!isLoading) {
            console.log(data)
        }

        startTransition(() => {
            if (!isLoading) {
                navigate('/plans');
            }
        })
    };


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <>

            <div className='page-plans'>
                <div className='page-plans__background'>
                    <div className='page-plans__background--image-left'></div>
                    <div className='page-plans__background--image-right'></div>
                </div>
                <div className='page-plans__content'>
                    <div className='page-plans__content--section-left'>
                        <img className='page-plans__content--section-left--img' src={imgLogo}/>
                    </div>
                    <div className='page-plans__content--section-right'>
                        <div className='page-plans__content--section-right__frame1'>
                            <span className='page-plans__content--section-right__frame1--tag'>
                                <label className='page-plans__content--section-right__frame1--tag--label'>
                                    Seguro Salud Flexible
                                </label>
                                </span>
                            <p className='page-plans__content--section-right__frame1--text1'>Creado para ti y tu
                                familia</p>
                            <p className='page-plans__content--section-right__frame1--text2'>Tú eliges cuánto pagar.
                                Ingresa tus datos, cotiza y recibe nuestra
                                asesoría. 100% online.</p>

                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <div className="page-plans__content--section-right__frame2">
                                    {/* Nro de documento */}
                                    <CustomInputAccessory
                                        label="Nro de documento"
                                        selectOptions={['DNI', 'PASAPORTE']}
                                        selectValue={formik.values.tipoDocumento}
                                        inputValue={formik.values.documento}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={getValidationClass(formik.touched.documento, formik.errors.documento)}
                                    />
                                    {formik.errors.documento && formik.touched.documento && (
                                        <div className="invalid-feedback">
                                            {formik.errors.documento}</div>
                                    )}
                                    {/* Telefono */}
                                    <InputAccessory
                                        name='telefono'
                                        placeholder="Celular"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.telefono}
                                        className={getValidationClass(formik.touched.telefono, formik.errors.telefono)}
                                        maxLength={9}
                                    />

                                    {formik.errors.telefono && formik.touched.telefono && (
                                        <div className="invalid-feedback">
                                            {formik.errors.telefono}</div>
                                    )}

                                </div>
                                <div className='page-plans__content--section-right__frame3'>
                                    {/* Terminos privacidad */}
                                    <InputCheckAccessory
                                        name='terminos1'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.terminos1}
                                        className={getValidationClass(formik.touched.terminos1, formik.errors.terminos1)}
                                        label='Acepto la Política de Privacidad'
                                    />

                                    {formik.errors.terminos1 && formik.touched.terminos1 && (
                                        <div className="invalid-feedback">
                                            {formik.errors.terminos1}</div>
                                    )}
                                    {/* Terminos comerciales */}
                                    <InputCheckAccessory
                                        name='terminos2'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.terminos2}
                                        className={getValidationClass(formik.touched.terminos2, formik.errors.terminos2)}
                                        label='Acepto la Política Comunicaciones Comerciales'
                                    />

                                    {formik.errors.terminos2 && formik.touched.terminos2 && (
                                        <div className="invalid-feedback">
                                            {formik.errors.terminos2}</div>
                                    )}

                                    <br/>
                                    <span className={'lsection2__span'}>Aplican Términos y Condiciones.</span>

                                </div>

                                <br/>

                                <button
                                    type="submit"
                                    className='page-plans__content--section-right--button'
                                    onClick={handleSubmit}
                                >
                                    Cotiza aquí
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </>
    )
        ;
}

export default QuoteRequest;
