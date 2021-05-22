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

export default RandomUserRenderer;