// @ts-ignore
import imgLogo from "../../../assets/media/baners/img.png";

function Plans() {
    return (
        <>
            <div className='page-plans'>
                <div className='page-plans__background'>
                    <div className='page-plans__background--image-left'></div>
                    <div className='page-plans__background--image-right'></div>
                </div>
                <div className='page-plans__content'>
                    <div className='page-plans__content--section-left'>
                        <img src={imgLogo} className='page-plans__content--section-left--img' alt="Logo"/>
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
                        <div className='page-plans__content--section-right__frame2'>

                        </div>
                        <div className='page-plans__content--section-right__frame3'>

                        </div>

                        <button type="button"
                                disabled={true}
                                className=''

                        >Un momento por favor...
                        </button>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Plans;
