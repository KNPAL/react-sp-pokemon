import './ModalBox.css';
import React, { useEffect, useState } from 'react';


function ModalBox(props) {

    //#region api need to filter
    const [pokemon, setPokemons] = useState({});

    const getTypes = (types) => {
        let type = [];
        const hasTypes = types?.types;
        if (!!hasTypes?.length) {
            hasTypes.forEach(element => {
                type.push(element.type.name);
            });
        }
        return type;
    };

    const getAblities = (ablitiesArray) => {
        let ablities = [];
        const hasAblities = ablitiesArray?.abilities;
        if (!!hasAblities?.length) {
            hasAblities.forEach(element => {
                ablities.push(element.ability.name);
            });
        }
        return ablities;
    };

    const getEggGroups = (eggGroupArray) => {
        let eggGroup = [];
        const haseggGroup = eggGroupArray?.egg_groups;
        if (!!haseggGroup?.length) {
            haseggGroup.forEach(element => {
                eggGroup.push(element.name);
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

    //#endregion

    return (
        <>

            <div className='backdrop'>
                <div className="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content modal-bg h-100">
                            <div className="modal-body">
                                <div className='container h-100'>
                                    <div className='row m-0 h-50'>
                                        <div className='col-md-4'>
                                            <div className='border border-dark h-100 w-100'>
                                                <img src={getImageUrl(props.id)} className="card-img-top img-size" alt="..." />
                                            </div>
                                        </div>
                                        <div className='col-md-8'>
                                            <label className='m-3'>
                                                {pokemon.name}
                                            </label>
                                            <div className='vr'></div>
                                            <label className='m-3'>
                                                {pokemon.id}
                                            </label>
                                            <div className='vr'></div>
                                            <button onClick={props.onModalClose} className='m-3 btn btn-outline-primary'>close</button>
                                            <div className='col-md-12 border h-75'>
                                                {getDescription(pokemon).substring(0, 500)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row m-0 h-25'>
                                        <div className='col-md-3'>
                                            height
                                            <div>
                                                {pokemon.height}
                                            </div>

                                        </div>
                                        <div className='col-md-3'>
                                            weight
                                            <div>
                                                {pokemon.weight}
                                            </div>

                                        </div>
                                        <div className='col-md-3'>
                                            genders
                                        </div>
                                        <div className='col-md-3'>
                                            egg grops
                                            <div>
                                                {getEggGroups(pokemon)}
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            ablities
                                            <div>
                                                {getAblities(pokemon)}
                                            </div>

                                        </div>
                                        <div className='col-md-3'>
                                            types
                                            <div>
                                                {getTypes(pokemon)}
                                            </div>
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