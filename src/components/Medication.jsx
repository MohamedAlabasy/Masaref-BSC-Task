import React from 'react'


export default function Medication({ medicationData }) {
    return (
        <div
            className={'card p-0 mb-3 border-1 border border-primary border border-dark'}>
            <div className="card-footer fs-6 font-weight-bold border border-bottom-2 text-center">
                {medicationData.name}
            </div>
            <div className="card-body py-0 ">
                <div className="book-content ">
                    <div className="row d-flex justify-content-around">
                        {medicationData.dose && <div className="col-12">
                            <span>Dose </span> : {medicationData.dose}
                        </div>
                        }
                        <div className="col-12">
                            <div style={{
                                display: 'block', width: 600, paddingLeft: 30
                            }}>
                            </div>
                            <span>Strength </span> : {medicationData.strength}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

