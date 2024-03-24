import {useQuery, useQueryClient} from '@tanstack/react-query';
import Step from "../../../common/components/step/Step.tsx";
import { useState} from "react";
import Option from "./childs/option/Option.tsx";
// @ts-ignore
import {
    DetailUserService
} from '../../../services'
import {useNavigate} from "react-router-dom";
import Summary from "./childs/summary/Summary.tsx";

// @ts-ignore
import imgAtras from '../../../assets/media/images/Icon-button.png'
import ProgressBar from "../../../common/components/progress/ProgressBar.tsx";
// @ts-ignore

const Plans = () => {
    // Acceder a los datos cacheados
    const queryClient = useQueryClient();
    // Obtener los datos cacheados
    const dataRequest: any = queryClient.getQueryData(['dataRequest']);

    const [data, setData] = useState({})
    const [steps, setSteps] = useState([
        {step: 1, label: 'Planes y coberturas', isActive: true, isCompleted: false},
        {step: 2, label: 'Resumen', isActive: false, isCompleted: false},
    ]);
    const [option, setOption] = useState(0)
    const navigate = useNavigate();

    const [step, setStep] = useState(1)

    const {data: dataUser = []} = useQuery({
        queryKey: ['dataUser'],
        queryFn: DetailUserService.detailUser,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const handleStepClick = (index: number) => {
        const updatedSteps = steps.map((step: any, i: number) => ({
            ...step,
            isActive: i === index,
            isCompleted: i < index,
        }));

        setSteps(updatedSteps);
        setOption(index);
    };
    const selectPrice = (val: any) => {
        setStep(2)
        setOption(1)
        const arr = steps.map(i => ({
            ...i,
            isActive: !i.isActive
        }))
        setSteps(arr)

        // @ts-ignore
        setData({
            namePlan: val.name,
            price: val.price,
            name: `${dataUser.name} ${dataUser.lastName}`,
            dni: dataRequest?.documento,
            celular: dataRequest?.telefono
        })
    }

    const volver = () => {
            navigate('/');
    }

    return (
        <>
            <div className="plans">

                <div className='plans__step-container'>
                    {steps.map((step: {
                        step: number;
                        label: string;
                        isActive: boolean;
                        isCompleted: boolean;
                    }, index: number) => (
                        <Step
                            key={index}
                            step={step.step}
                            label={step.label}
                            isActive={step.isActive}
                            isCompleted={step.isCompleted}
                            onClick={() => handleStepClick(index)}
                        />


                    ))}
                    <ProgressBar steps={2} currentStep={step}/>
                </div>
                <div className='plans__volver'>
                    <button className='plans__volver__button' onClick={() => volver()}>

                        <img src={imgAtras} className='plans__volver__button__icon'></img>
                        <label>Volver</label>
                    </button>
                </div>

                <div className='plans__prices'>
                    {(option === 0) ? (<>
                        <Option priceSelect={selectPrice}/>
                    </>) : (option === 1) ? (<>
                        <Summary datos={data}/>
                    </>) : (<></>)}
                </div>

            </div>
        </>
    );
};

export default Plans;
