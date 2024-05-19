import List from '@/components/List';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <section className="cover-image" />
      <section>
        <h2>YardSale</h2>
        <List />
      </section>
    </main>
  );
}

export default Home;
