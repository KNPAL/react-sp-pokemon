
import Card from './UI/Card';
import { useEffect, useState } from 'react';
import { firstWordCapital, getImageUrl } from './../utiles/utils';

function PokemonList() {

    const [pokemonList, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getAllPokemon() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Something went woung')
            }
            const transformList = data.results.map((item) => {
                const id = item.url.substring(34, item.url.lastIndexOf('/'));
                return {
                    name: item.name,
                    id: id,
                    imgUrl: getImageUrl(id)
                }
            });
            setPokemons(transformList);
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getAllPokemon()
    }, []);

    return (
        <>
            {!isLoading && <div className='row m-0 py-3'>
                {pokemonList?.map((props, key) => (
                    <div className='col-md-2 col-6 p-3'>
                        <Card
                            img={props.imgUrl}
                            name={firstWordCapital(props.name)} id={props.id} />
                    </div>
                ))}
            </div>}
            {!error && isLoading && <p>Loading...</p>}
        </>
    )
}

export default PokemonList;