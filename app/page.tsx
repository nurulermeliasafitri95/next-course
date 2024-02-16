// import Image from 'next/image'
// import Link from 'next/link'
// import { ProductCart } from './users/component/ProductCart'
// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route';
// import aleesa from '@/public/images/aleesa.jpg';

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <main className='relative h-screen'>
//       <h1>Hello { session && <span>{session.user!.name}</span>}</h1>

//       {/* <Image src={aleesa} alt="lovey"/> */}
//       <Image 
//         src="https://bit.ly/react-cover" 
//         alt="lovey"
//         fill
//         sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
//         className='object-cover'
//         quality={100}
//         // width={300}
//         // height={170}
//         />
//       <ProductCart />
//     </main>
//   )
// }
"use client";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [
            { name: "c" },
            { name: "b" },
            { name: "a" },
          ];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}