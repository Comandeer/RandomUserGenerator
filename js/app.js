import RandomUserFetcher from './RandomUserFetcher.js';
import RandomUserRenderer from './RandomUserRenderer.js';

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