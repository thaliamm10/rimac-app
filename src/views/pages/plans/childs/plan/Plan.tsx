import {FC, useEffect, useState} from "react";
import Plans from "../../Plans.tsx";
import {ListPlansService} from "../../../../../services";
import {useQuery} from "@tanstack/react-query";
// @ts-ignore
import imgH from "../../../../../assets/media/images/IcHospitalLight.png";

interface Plans {
    name: string,
    price: number,
    description: string[],
    age: number
}

interface PersonalProps {
    edad?: number;
    opcion?: string;
    selectedPlan: (nuevoValor: Plans) => void;
}

const Plan: FC<PersonalProps> = ({edad = 0, opcion, selectedPlan}) => {

    const [plan, setPlan] = useState([])

    const {data: dataPlans = []} = useQuery({
        queryKey: ['dataPlans'],
        queryFn: ListPlansService.listPlans,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const cargarPlans = () => {
        let data = dataPlans.filter((item: { age: number; }) => item.age > edad)
        // @ts-ignore
        setPlan(data)
    }

    const selectedValor = (plan: Plans) => {
        selectedPlan({
            ...plan,
            price: opcion === '1' ? plan.price : (plan.price - plan.price * 0.05)
        })
    }

    useEffect(() => {
        if (dataPlans.length > 0)
            cargarPlans()
    }, [dataPlans.length > 0])

    return (
        <div className="planDetail">
            {
                plan.map((plan: Plans, index: number) => (
                    <div key={index}>
                        <div className="planDetail__card">
                            <div className="planDetail__card__header">
                                {/*<div className={'d-flex justify-content-between align-items-center'}>*/}
                                {plan.name === 'Plan en Casa y Clínica' ? (
                                    <span
                                        className={'planDetail__card__header__img--title-recomend'}>Plan recomendado</span>) : (<></>)}
                               <div className='planDetail__card__header__img'>
                                   <div>
                                       <p className={'planDetail__card__header__img--title'}>{plan.name}</p>
                                   </div>
                                   <div>
                                       <img src={imgH} alt="" className="img-home"/>
                                   </div>
                               </div>



                                <p className='planDetail__card__header--title'>COSTO DEL PLAN</p>
                                {opcion === '2' && <p className='planDetail__card__header--title-before'><s>{`$${plan.price}`} antes</s></p>}
                                <p className='planDetail__card__header--subtitle'>{`$${opcion === '1' ? plan.price : (plan.price - plan.price * 0.05)} al mes`}</p>
                            </div>
                            <hr className='planDetail__card__hr'/>
                            <div className="planDetail__card__body">
                                <ul>
                                    {plan.description.map((item, i) => (
                                        <li key={i} className='planDetail__card__body--li'>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {/*<p>Edad permitida: {plan.age} años</p>*/}
                                <button className={'planDetail__card__body--button'}
                                        onClick={() => selectedValor(plan)}>Seleccionar Plan
                                </button>
                            </div>
                            {/*</div>*/}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Plan;
