async function fetchRandomUser( apiURL ) {
	const response = await fetch( apiURL );
	const { results } = await response.json();

	// Zadaniem tej klasy jest zwrócenie danych pierwszego, losowego usera.
	return results[ 0 ];
}

export default fetchRandomUser;