// Ta klasa pobiera dane
class RandomUserFetcher {
	// URL API przekazujemy z zewnątrz.
	constructor( apiURL ) {
		this.apiURL = apiURL;
	}

	async fetchData() {
		const response = await fetch( this.apiURL );

		return response.json();
	}

	async getUser() {
		const { results } = await this.fetchData();

		// Zadaniem tej klasy jest zwrócenie danych pierwszego, losowego usera.
		return results[ 0 ];
	}
}

export default RandomUserFetcher;