import './ModalBox.css';
import React, { useEffect, useState } from 'react';


function ModalBox(props) {

    //#region api need to filter
    const [pokemon, setPokemon] = useState({});

    async function getPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
            const data = await response.json();
            // pokemon = data;
            setPokemon(data);
            console.log(data);

            const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`);
            const data1 = await response1.json();
            console.log(data1);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPokemon()
    }, []);

    //#endregion

    return (
        <>
            <div className='backdrop'>
                <div className="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content h-100">
                            <div className="modal-body">
                                <div className='container h-100'>
                                    <div className='row m-0 h-50'>
                                        <div className='col-md-4'>
                                            <div className='border border-dark h-100 w-100'>

                                            </div>
                                        </div>
                                        <div className='col-md-8'>
                                            <label className='m-3'>
                                                {props.name}
                                            </label>
                                            <div className='vr'></div>
                                            <label className='m-3'>
                                                {props.id}
                                            </label>
                                            <div className='vr'></div>
                                            <button onClick={props.onModalClose} className='m-3 btn btn-outline-primary'>close</button>
                                            <div className='col-md-12 border h-75'>
                                                afafa
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row m-0 h-25'>
                                        <div className='col-md-3'>
                                            height
                                        </div>
                                        <div className='col-md-3'>
                                            weight
                                        </div>
                                        <div className='col-md-3'>
                                            genders
                                        </div>
                                        <div className='col-md-3'>
                                            egg grops
                                        </div>
                                        <div className='col-md-3'>
                                            ablities
                                        </div>
                                        <div className='col-md-3'>
                                            types
                                        </div>
                                        <div className='col-md-3'>
                                            weak against
                                        </div>
                                    </div>
                                    <div className='row m-0 h-25'>
                                        stats
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalBox;