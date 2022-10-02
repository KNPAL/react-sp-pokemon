import './ModalBox.css';
import React, { useEffect, useState } from 'react';
import { firstWordCapital, formateId, commaSepratedArrayValue } from '../../utiles/utils';
import { Appstring, AppColor } from './../../utiles/Constants';



function ModalBox(props) {

    //#region api need to filter
    const [pokemon, setPokemons] = useState({});

    const getTypes = (types) => {
        let type = [];
        const hasTypes = types?.types;
        if (!!hasTypes?.length) {
            hasTypes.forEach(element => {
                type.push(firstWordCapital(element.type.name));
            });
        }
        return type;
    };

    const getAblities = (ablitiesArray) => {
        let ablities = [];
        const hasAblities = ablitiesArray?.abilities;
        if (!!hasAblities?.length) {
            hasAblities.forEach(element => {
                ablities.push(firstWordCapital(element.ability.name));
            });
        }
        return ablities;
    };

    const getEggGroups = (eggGroupArray) => {
        let eggGroup = [];
        const haseggGroup = eggGroupArray?.egg_groups;
        if (!!haseggGroup?.length) {
            haseggGroup.forEach(element => {
                eggGroup.push(firstWordCapital(element.name));
            });
        }
        return eggGroup;
    };

    const getDescription = (descriptionArray) => {
        let description = '';
        const hasDescription = descriptionArray?.flavor_text_entries;
        if (!!hasDescription?.length) {
            const filterResult = hasDescription.filter(word => (word.language.name === 'en'));
            filterResult.forEach(element => {
                if (description.indexOf(element.flavor_text) < 0) {
                    description += element.flavor_text;
                }
            });
        }
        return description;
    };

    const getImageUrl = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

    }

    const getBackground = (typeArray) => {
        let count = 0;
        let colorList = '';
        for (var key of Object.keys(AppColor)) {
            if (typeArray.indexOf(key) > -1) {
                count++;
                colorList += AppColor[key] + ',';
            }
        }
        if (count > 1) {
            return `linear-gradient(${colorList.slice(0, colorList.lastIndexOf(','))})`;
        } else {
            return colorList.slice(0, colorList.lastIndexOf(','));
        }

    }

    useEffect(() => {
        const fetchPokemon = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
            const data = await res.json();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`);
            const descriptionData = await response.json();
            const dataSet = { ...data, ...descriptionData };
            setPokemons(dataSet);
            console.log(dataSet);
        }

        fetchPokemon();
    }, []);

    return (
        <>
            <div className='backdrop'>
                <div className="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content modal-bg h-100">
                            <div className="modal-body">
                                <div className='container h-100'>
                                    <div className='row m-0 h-50'>
                                        <div className='col-md-4 p-4'>
                                            <div className=' h-100 py-4 w-100 '>
                                                <div style={{  borderRadius: '15px', borderStyle: 'dashed', borderColor: 'black', background: getBackground(getTypes(pokemon)) }} className='h-100 w-100 justify-content-center align-items-center d-flex'>
                                                    <img style={{ width: '80%', height: '70%' }} src={getImageUrl(props.id)} className="card-img-top" alt="..." />

                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='d-flex'>
                                                <div className='col-md-4 my-2 justify-content-center align-items-center d-flex border-end'>
                                                    <label className='m-3 fw-bold'>   {firstWordCapital(pokemon.name).toUpperCase()}   </label>
                                                </div>
                                                <div className='col-md-4 my-2 justify-content-center align-items-center d-flex border-end'>
                                                    <label className='m-3'> {formateId(pokemon.id)}</label>
                                                </div>
                                                <div className='col-md-4 justify-content-center align-items-center d-flex'>
                                                    <button onClick={props.onModalClose} type='button' aria-label="Close" className='btn-close border border-dark fs-small rounded-circle'></button>
                                                </div>
                                            </div>
                                            <div className='col-md-12 p-2 h-75'>
                                                {getDescription(pokemon).substring(0, 500)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row m-0 h-25'>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.height}</label>
                                            <div>
                                                <span>
                                                    {parseInt(((pokemon.height / 30.48) * 10))}'
                                                    {parseInt((((pokemon.height / 30.48) * 10) % 1).toFixed(2).substring(2))}''
                                                </span>

                                            </div>

                                        </div>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.weight}</label>
                                            <div>
                                                {pokemon.weight / 10} kg
                                            </div>

                                        </div>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.gender}</label>
                                        </div>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.egg_Groups}</label>
                                            <div>
                                                {commaSepratedArrayValue(getEggGroups(pokemon))}
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.abilities}</label>
                                            <div>
                                                {commaSepratedArrayValue(getAblities(pokemon))}
                                            </div>

                                        </div>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.types}</label>
                                            <div>
                                                {getTypes(pokemon)}
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <label className='fw-bold'>{Appstring.weak_agains}</label>
                                        </div>
                                    </div>
                                    <div className='row m-0 h-25'>
                                        <label className='fw-bold'>{Appstring.stats}</label>
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