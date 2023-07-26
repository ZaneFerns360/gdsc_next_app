import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full dark:bg-black">
      {/* Background Image */}
      <div className="min-h-[520px] w-[100%] relative mx-10">
        <Image
          src="/assets/ev-removebg.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content Container 
       we used the inset-0 class on the content container to position it to cover the entire parent container (main). 
       The flex class ensures it behaves as a flex container.*/}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Your content goes here */}
        <div className="container mx-auto p-8 text-white text-center relative top-[-250px]">
          <h1 className="text-7xl font-bold blue_gradient">Welcome to <span className='blue_gradient'>GDSC</span></h1>
          <p className="text-3xl font-bold orange_gradient pt-12">
    Get ready to delve into the World of Developers
          </p>
          {/* Add your other components here */}
        </div>
      </div>
    </main>
  );
}

