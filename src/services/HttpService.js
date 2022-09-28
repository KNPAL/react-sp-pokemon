export async function getAllList() {

    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
