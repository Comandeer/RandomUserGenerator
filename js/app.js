import fetchRandomUser from './fetchRandomUser.js';
import renderRandomUser from './renderRandomUser.js';

( async function(){
	const randomUser = await fetchRandomUser( 'https://randomuser.me/api/' )

	renderRandomUser( '[data-userList]', randomUser );
}() );