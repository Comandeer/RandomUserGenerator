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

// Ta klasa wyświetla dane usera.
class RandomUserRenderer {
	// Selektory mogą zostać przekazane z zewnątrz, ale renderer ma też domyślne.
	// Trzeba jedynie przekazać selektor głównego kontenera.
	constructor( container, {
		imageContainer = '[data-userImage]',
		titleContainer = '[data-userTitle]',
		emailContainer = '[data-userEmail]'
	} = {} ) {
		this.container = document.querySelector( container );
		this.imageContainer = this.container.querySelector( imageContainer );
		this.titleContainer = this.container.querySelector( titleContainer );
		this.emailContainer = this.container.querySelector( emailContainer );
	}

	// Ta funkcja przyjmuje dane usera z zewnątrz i je formatuje.
	render( { name, picture, email } ) {
		this.imageContainer.src = picture.large;
		this.titleContainer.textContent = Object.values( name ).join( ' ' );
		this.emailContainer.textContent = email;
	}
}

// Kod uruchamiający aplikację – IIAFE (https://twitter.com/rauschma/status/785203409347633152).
// Potrzebne do ładnej obsługi asynchroniczności.
( async function(){
	// Tworzę sobie potrzebne nam klasy.
	const randomUserFetcher = new RandomUserFetcher( 'https://randomuser.me/api/' );
	const randomUserRenderer = new RandomUserRenderer( '[data-userList]' );
	// Pobieram dane losowego usera.
	const randomUser = await randomUserFetcher.getUser();

	// Wyświetlam pobrane dane.
	randomUserRenderer.render( randomUser );
}() );