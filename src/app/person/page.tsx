import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import { getProfile } from '@/utils/getData';
import styles from './page.module.css';

interface Person {
	picture: string;
	name: string;
	age: number;
	address1: string;
	address2: string;
	email: string;
	dob: string;
	phone: string;
}

const Person = async ({ searchParams }: { searchParams: { id: number } }) => {
	const person: Person = await getProfile(searchParams.id);
	console.log(person);
	return (
		<>
			<Header title="Profile" />
			<div className={styles.container}>
				<Link className={styles.back} href="/">
					<span className={styles.back_arrow}>←</span> People Directory
				</Link>
				<div className={styles.profile}>
					<Image className={styles.image} src={person.picture} alt={person.name} width="100" height="100" />
					<h2 className={styles.name}>{person?.name}</h2>
					<div className={styles.details}>
						<div>
							<b>Age:</b> {person?.age}
						</div>
						<div>
							<b>Address:</b> {person?.address1}
							<br />
							{person?.address2}
						</div>
						<div>
							<b>Email:</b> {person?.email}
						</div>
						<div>
							<b>Date of Birth:</b> {person?.dob}
						</div>
						<div>
							<b>Phone:</b> {person?.phone}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Person;
