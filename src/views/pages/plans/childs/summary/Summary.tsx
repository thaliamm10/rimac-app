import React from 'react';

interface SumaryProps {
    datos?: any;
}

const Summary: React.FC<SumaryProps> = ({datos}) => {

    return (
        <>
            {/*<Row>*/}
            <div className="summary">

                <div className="summary__content">
                    <p className='summary__content__title'>Resumen del seguro</p>

                    <div style={{width: '20rem'}} className='summary__content__card'>
                        <div>
                            <p className='summary__content__card--title'>PRECIOS CALCULADOS PARA:</p>
                            <i className={'fa fa-users'}></i> <span
                            className='summary__content__card--title-name'>{datos.name}</span>
                            <hr/>
                            <h3>Responsable de pago</h3>
                            <p>DNI:{datos.dni}</p>
                            <p>Celular:{datos.celular}</p>

                            <h3>Plan elegido</h3>
                            <p>{datos.namePlan}</p>
                            <p>Costo del Plan: $ {datos.price} al mes</p>
                        </div>
                    </div>

                </div>

            </div>
            {/*</Row>*/}
        </>
    );
};

export default Summary;
