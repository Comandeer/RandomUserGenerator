class RandomUser {
	constructor() {
		this.API_POINT = null;
		this.userContainer = null;
		this.userData = {
			title: null,
			name: null,
			surname: null,
		};
		this.UISelectors = {
			image: null,
			heading: null,
			email: null,
		};
		this.initialize();
	}
	initialize() {
		this.userContainer = document.querySelector("[data-userList]");

		this.UISelectors.image = document.querySelector("[data-userImage]");
		this.UISelectors.heading = document.querySelector("[data-userTitle]");
		this.UISelectors.email = document.querySelector("[data-userEmail");

		this.API_POINT = `https://randomuser.me/api/`;
		this.fetchData();
	}
	async fetchData() {
		try {
			const response = await fetch(this.API_POINT);
			const data = await response.json();
			this.getUserData(data);
		} catch {
			throw new Error("Something went wrong");
		}
	}
	async getUserData({ results }) {
		const { name, picture, email } = results[0];
		const { title, first, last } = name;

		this.userData.title = title;
		this.userData.name = first;
		this.userData.surname = last;

		this.dataIntoHTML(picture, email);
	}
	dataIntoHTML(picture, email) {
		this.UISelectors.image.src = picture.large;
		this.UISelectors.heading.innerHTML = `${Object.values(this.userData).join(
			" "
		)}`;
		this.UISelectors.email.innerHTML = email;
	}
}

const randomUser = new RandomUser();
