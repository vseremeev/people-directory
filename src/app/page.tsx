import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import { getPeople } from '@/utils/getData';
import styles from './page.module.css';

const Home = async () => {
	const people = await getPeople();
	return (
		<>
			<Header title="People Directory" />
			<div className={styles.container}>
				<ul className={styles.people}>
					{people?.map((person: any, index: number) => (
						<li key={index} className={styles.person}>
							<Link
								href={{
									pathname: '/person',
									query: {
										id: index,
									},
								}}
								className={styles.person_link}>
								<Image className={styles.person_image} src={person.picture} alt={person.name} width="100" height="100" />
								<div className={styles.person_details}>
									<h2 className={styles.person_name}>{person.name}</h2>
									<div className={styles.person_age}>
										<b>Age: </b>
										{person.age} years old
									</div>
									<div className={styles.person_city}>
										<b>City: </b>
										{person.city}
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Home;
