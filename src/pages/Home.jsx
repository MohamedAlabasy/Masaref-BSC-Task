import React, { useEffect, useState } from 'react'

import Medication from '../components/Medication';
import { getAll } from '../utils/MedicationsAPI'

export default function Home() {
    const [analgesicsData, setAnalgesicsData] = useState([]);
    const [painkillersData, setPainkillersData] = useState([]);

    useEffect(() => {
        const getAllBooksData = async () => {
            const medicationAPIData = await getAll()

            // To get an array of analgesics data correctly then can loop on it
            const analgesicsArray = medicationAPIData.Analgesics.map((_analgesicsData, index) => {
                let myArr = []
                for (let i = 0; i < Object.keys(_analgesicsData).length; i++) {
                    myArr.push([Object.values(_analgesicsData)[i]][0][0])
                }
                return myArr
            })
            setAnalgesicsData(analgesicsArray[0])


            // To get an array of painkillers data correctly then can loop on it
            const painkillersArray = medicationAPIData.painkillers.map((_painkillersData) => {
                let myArr = []
                for (let i = 0; i < Object.keys(_painkillersData).length; i++) {
                    myArr.push([Object.values(_painkillersData)[i]][0][0])
                }
                return myArr
            })
            setPainkillersData(painkillersArray[0])
        }

        getAllBooksData()
    }, [])



    return (
        <>
            <div className="container-fluid mt-5 col-9 text-center">
                <div className="row d-flex mt-3 justify-content-center text-center">
                    <h1>Analgesics</h1>
                    {analgesicsData.map((_analgesicsData) => {
                        return <Medication key={_analgesicsData.name} medicationData={_analgesicsData} />
                    })}
                    <h1>painkillers</h1>
                    {painkillersData.map((_painkillersData) => {
                        return <Medication key={_painkillersData.name} medicationData={_painkillersData} />
                    })}
                </div>
            </div >
        </>
    )
}
