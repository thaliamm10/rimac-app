import './Progressr.scss'
// @ts-ignore
import img from '../../../assets/media/images/Icon-button.png'
import {FC, startTransition} from "react";
import {useNavigate} from "react-router-dom";




interface ProgressBarProps {
    steps: number;
    currentStep: number;
}

const ProgressBar: FC<ProgressBarProps> = ({steps, currentStep}) => {
    const navigate = useNavigate();
    let progressWidth: string;

    const volver = () => {
        startTransition(() => {
            navigate('/');
        })
    }

    if (currentStep === 1) {
        progressWidth = '5%';
    } else {
        const percentage = Math.floor((currentStep / steps) * 100);
        progressWidth = `${percentage}%`;
    }

    return (
        <div className='progressr'>
            <div className='progressr__icon' onClick={() => volver()}></div>
            <label className='progressr__label'>PASO {currentStep} DE {steps}</label>

            <div className='progressr__progress'>
                <div className='progressr__progress__fill' style={{width: progressWidth}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

