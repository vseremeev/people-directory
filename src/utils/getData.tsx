export const getPeople = async () => {
	const data = await fetch('https://randomuser.me/api/?results=10&nat=us&seed=a');
	const response = await data.json();
	const people = response?.results.map((person: any) => ({
		picture: person.picture.large,
		name: `${person.name.first} ${person.name.last}`,
		age: person.dob.age,
		city: person.location.city,
	}));
	return people;
};

// Unfortunatelly randomuser.me does not provide API to get specific user
export const getProfile = async (id: number) => {
	const data = await fetch('https://randomuser.me/api/?results=10&nat=us&seed=a');
	const response = await data.json();
	const person = response?.results[id];
	const profile = {
		picture: person.picture.large,
		name: `${person.name.first} ${person.name.last}`,
		age: person.dob.age,
		address1: `${person.location.street.number} ${person.location.street.name}`,
		address2: `${person.location.city}, ${person.location.state}, ${person.location.country} ${person.location.postcode}`,
		email: person.email,
		dob: new Date(person.dob.date).toLocaleDateString(),
		phone: person.phone,
	};
	return profile;
};
