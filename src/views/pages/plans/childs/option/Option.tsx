import {FC} from "react";
// @ts-ignore
import imgMe from "../../../../../assets/media/images/IcProtectionLight.svg";
// @ts-ignore
import imgMore from "../../../../../assets/media/images/IcAddUserLight.svg";
import {AgeCalculator} from '../../../../../common/utilitys/AgeCalculator.utility.ts';

interface PersonalProps {
    priceSelect: (nuevoValor: any) => void;
}

import * as Yup from "yup";
import {useFormik} from "formik";

import {DetailUserService} from "../../../../../services";
import {useQuery} from "@tanstack/react-query";
import InputRadioAccessory from "../../../../../common/components/InputRadioAccessory/InputRadioAccessory.tsx";
import Plan from "../plan/Plan.tsx";

const
    Option: FC<PersonalProps> = ({priceSelect}) => {
        const {data: dataUser} = useQuery({
            queryKey: ['dataUser'],
            queryFn: DetailUserService.detailUser,
            retry: 0,
            refetchOnWindowFocus: false,
        });


        const edad: number = AgeCalculator(dataUser?.birthDay);
// console.log("La edad es:", edad);

        const initialValues = {
            opcionC: ''

        };
        const validationSchema = Yup.object({
            opcionC: Yup.boolean()
                .oneOf([true], 'Debe aceptar los términos de Política Comunicaciones Comerciales'),
        });

        const seleccionarValor = (nuevoValor: any) => {
            // console.log(nuevoValor)
            priceSelect(nuevoValor)
        };


        // console.log(dataUser)

        const formik = useFormik({
            enableReinitialize: true,
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit: values => {
                console.log(values)
            },
        });


        return (
            <>
                <div className="option">
                    <div className='option__decription'>
                        <p className='option__decription__text-title'>
                            {dataUser?.name} ¿Para quién deseas cotizar?
                        </p>
                        <p className='option__decription__text-subtitle'>
                            Selecciona opción que se ajuste más a tus necesidades
                        </p>
                    </div>
                    <div className='option__plan'>
                        <div className='option__plan__card'>
                            <div style={{width: '18rem'}} className=''>
                                <div className='option__plan__card__header'>
                                    <div className='option__plan__card__header__icon'>
                                        <img src={imgMe} alt="Para mí"/>
                                        <p>Para mí</p>
                                    </div>
                                    <div className="ml-auto">

                                        <InputRadioAccessory
                                            name='opcionC'
                                            // onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={'1'}
                                            checked={formik.values.opcionC === '1'}
                                            className=''
                                            onChange={() => {
                                                formik.setFieldValue('opcionC', '1');
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='option__plan__card__body'>
                                    <p className='option__plan__card__body--title'>Para mí</p>
                                    <p className='option__plan__card__body--subtitle'>
                                        Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='option__plan__card'>
                            <div style={{width: '18rem'}} className={'card-cotiza'}>

                                <div className='option__plan__card__header'>
                                    <div className='option__plan__card__header__icon'>
                                        <img src={imgMore} alt=""/>
                                        <p>Para alguien más</p>
                                    </div>
                                    <div className="ml-auto">
                                        <InputRadioAccessory
                                            name='opcionC'
                                            // onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={'2'}
                                            checked={formik.values.opcionC === '2'}
                                            className=''
                                            onChange={() => {
                                                formik.setFieldValue('opcionC', '2');
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='option__plan__card__body'>
                                    <p className='option__plan__card__body--title'>Para alguien más</p>
                                    <p className='option__plan__card__body--subtitle'>Realiza una cotización para uno de
                                        tus familiares o cualquier
                                        persona.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {formik.values?.opcionC && (
                    <Plan edad={edad} opcion={formik.values.opcionC} selectedPlan={seleccionarValor}/>

                )}

            </>
        );
    };

export default Option;
