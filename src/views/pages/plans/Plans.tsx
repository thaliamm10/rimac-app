import {useQuery, useQueryClient} from '@tanstack/react-query';
import Step from "../../../common/components/step/Step.tsx";
import {startTransition, useState} from "react";
import Option from "./childs/option/Option.tsx";
// @ts-ignore
import {
    DetailUserService, ListPlansService
} from '../../../services'
import {useNavigate} from "react-router-dom";
import Summary from "./childs/summary/Summary.tsx";
// @ts-ignore

const Plans = () => {
    // Acceder a los datos cacheados
    const queryClient = useQueryClient();
    // Obtener los datos cacheados
    const dataRequest: any = queryClient.getQueryData(['dataRequest']);
    const [data, setData] = useState({})
    const [steps, setSteps] = useState([
        {step: 1, label: 'Planes y coberturas         ....', isActive: true, isCompleted: false},
        {step: 2, label: 'Resumen', isActive: false, isCompleted: false},
    ]);
    const [option, setOption] = useState(0)
    const navigate = useNavigate();

    const {data: dataPlans = []} = useQuery({
        queryKey: ['dataPlans'],
        queryFn: ListPlansService.listPlans,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const {data: dataUser = []} = useQuery({
        queryKey: ['dataUser'],
        queryFn: DetailUserService.detailUser,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    // console.log(dataPlans);

    const handleStepClick = (index: number) => {

        const updatedSteps = dataPlans.map((step: any, i: number) => ({
            ...step,
            isActive: i === index,
            isCompleted: i < index,
        }));

        setSteps(updatedSteps);
        setOption(index);
    };
    const selectPrice = (val: any) => {

        setOption(1)
        console.log(dataRequest)

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
        startTransition(() => {
            navigate('/');
        })
    }

    return (
        <>
           {/* /!* Documento: *!/*/}
           {/*{dataRequest && (*/}
           {/*     <p>Los datos cacheados son: {JSON.stringify(dataRequest)}</p>*/}
           {/* )}*/}

            <div className="plans">

                <div className='plans__step-container'>
                    {steps.map((step: { step: number; label: string; isActive: boolean; isCompleted: boolean; }, index: number) => (
                        <Step
                            key={index}
                            step={step.step}
                            label={step.label}
                            isActive={step.isActive}
                            isCompleted={step.isCompleted}
                            onClick={() => handleStepClick(index)}
                        />

                    ))}
                </div>

                <button className='plans__button' onClick={() => volver()}>
                    <i className="fa-solid fa-circle-chevron-left plans__button__icon"></i>
                    {/*<i className='plans__button__icon'></i>*/}
                    <label>Volver</label>
                </button>


                {(option === 0) ? (<>
                    <Option priceSelect={selectPrice}/>
                </>) : (option === 1) ? (<>
                    <Summary datos={data}/>
                </>) : (<></>)}
            </div>
        </>
    );
};

export default Plans;
