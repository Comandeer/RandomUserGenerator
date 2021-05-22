function renderRandomUser( container, { name, picture, email }, {
	imageContainer = '[data-userImage]',
	titleContainer = '[data-userTitle]',
	emailContainer = '[data-userEmail]'
} = {} ) {
	container = document.querySelector( container );
	imageContainer = container.querySelector( imageContainer );
	titleContainer = container.querySelector( titleContainer );
	emailContainer = container.querySelector( emailContainer );

	imageContainer.src = picture.large;
	titleContainer.textContent = Object.values( name ).join( ' ' );
	emailContainer.textContent = email;
}

export default renderRandomUser;