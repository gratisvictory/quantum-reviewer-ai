import { Footer, Header, Hero, Features } from '@widgets';

const Home = () => (
	<main className='from-background to-background/95 dark:from-background dark:to-background/95 min-h-screen bg-gradient-to-br'>
		<Header />
		<Hero />
		<Features />
		<Footer />
	</main>
);

export default Home;
