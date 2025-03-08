// // components/Layout.tsx
// import UDSImage from '@/Components/Atoms/Image';
// import { ReactNode } from 'react';

// const Layout = () => {
//   return (
//     <>
//       <header className="body-font border-b border-gray-200 text-gray-700">
//         <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
//           <a
//             className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
//             href="https://tailblocks.cc"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">TAILBLOCKS</span>
//           </a>
//           <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
//             <a className="mr-5 hover:text-gray-900">First Link</a>
//             <a className="mr-5 hover:text-gray-900">Second Link</a>
//             <a className="mr-5 hover:text-gray-900">Third Link</a>
//             <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//           </nav>
//           <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-200 px-3 py-1 text-base hover:bg-gray-300 focus:outline-none md:mt-0">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               className="ml-1 h-4 w-4"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>
//       </header>
//       <section className="body-font text-gray-700">
//         <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
//           <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
//             <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
//               Before they sold out
//               <br className="hidden lg:inline-block" />
//               readymade gluten
//             </h1>
//             <p className="mb-8 leading-relaxed">
//               Copper mug try-hard pitchfork pour-over freegan heirloom neutra
//               air plant cold-pressed tacos poke beard tote bag. Heirloom echo
//               park mlkshk tote bag selvage hot chicken authentic tumeric
//               truffaut hexagon try-hard chambray.
//             </p>
//             <div className="flex justify-center">
//               <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
//                 Button
//               </button>
//               <button className="ml-4 inline-flex rounded border-0 bg-gray-200 px-6 py-2 text-lg text-gray-700 hover:bg-gray-300 focus:outline-none">
//                 Button
//               </button>
//             </div>
//           </div>
//           <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
//             <UDSImage
//               className="rounded object-cover object-center"
//               alt="hero"
//               src="https://dummyimage.com/720x600/edf2f7/a5afbd"
//             />
//           </div>
//         </div>
//       </section>
//       <section className="body-font border-t border-gray-200 text-gray-700">
//         <div className="container mx-auto flex flex-wrap px-5 py-24">
//           <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
//             <UDSImage
//               alt="feature"
//               className="h-full w-full object-cover object-center"
//               src="https://dummyimage.com/600x600/edf2f7/a5afbd"
//             />
//           </div>
//           <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
//             <div className="mb-10 flex flex-col items-center lg:items-start">
//               <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                 </svg>
//               </div>
//               <div className="flex-grow">
//                 <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
//                   Shooting Stars
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Blue bottle crucifix vinyl post-ironic four dollar toast vegan
//                   taxidermy. Gastropub indxgo juice poutine.
//                 </p>
//                 <a className="mt-3 inline-flex items-center text-indigo-500">
//                   Learn More
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="ml-2 h-4 w-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="mb-10 flex flex-col items-center lg:items-start">
//               <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle cx="6" cy="6" r="3"></circle>
//                   <circle cx="6" cy="18" r="3"></circle>
//                   <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//                 </svg>
//               </div>
//               <div className="flex-grow">
//                 <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
//                   The Catalyzer
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Blue bottle crucifix vinyl post-ironic four dollar toast vegan
//                   taxidermy. Gastropub indxgo juice poutine.
//                 </p>
//                 <a className="mt-3 inline-flex items-center text-indigo-500">
//                   Learn More
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="ml-2 h-4 w-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="mb-10 flex flex-col items-center lg:items-start">
//               <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                 </svg>
//               </div>
//               <div className="flex-grow">
//                 <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
//                   Neptune
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Blue bottle crucifix vinyl post-ironic four dollar toast vegan
//                   taxidermy. Gastropub indxgo juice poutine.
//                 </p>
//                 <a className="mt-3 inline-flex items-center text-indigo-500">
//                   Learn More
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="ml-2 h-4 w-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="body-font border-t border-gray-200 text-gray-700">
//         <div className="container mx-auto px-5 py-24">
//           <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
//             <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
//               Pitchfork Kickstarter Taxidermy
//             </h1>
//             <p className="w-full text-base leading-relaxed lg:w-1/2">
//               Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//               gentrify, subway tile poke farm-to-table.
//             </p>
//           </div>
//           <div className="-m-4 flex flex-wrap">
//             <div className="p-4 md:w-1/2 xl:w-1/3">
//               <div className="rounded-lg border border-gray-300 p-6">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                   </svg>
//                 </div>
//                 <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
//                   Shooting Stars
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/2 xl:w-1/3">
//               <div className="rounded-lg border border-gray-300 p-6">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx="6" cy="6" r="3"></circle>
//                     <circle cx="6" cy="18" r="3"></circle>
//                     <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//                   </svg>
//                 </div>
//                 <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
//                   The Catalyzer
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/2 xl:w-1/3">
//               <div className="rounded-lg border border-gray-300 p-6">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//                 <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
//                   Neptune
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/2 xl:w-1/3">
//               <div className="rounded-lg border border-gray-300 p-6">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
//                   </svg>
//                 </div>
//                 <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
//                   Melanchole
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/2 xl:w-1/3">
//               <div className="rounded-lg border border-gray-300 p-6">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
//                   Bunker
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/2 xl:w-1/3">
//               <div className="rounded-lg border border-gray-300 p-6">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="h-6 w-6"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
//                   Ramona Falls
//                 </h2>
//                 <p className="text-base leading-relaxed">
//                   Fingerstache flexitarian street art 8-bit waist co, subway
//                   tile poke farm.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
//             Button
//           </button>
//         </div>
//       </section>
//       <section className="body-font border-t border-gray-200 text-gray-700">
//         <div className="container mx-auto px-5 py-24">
//           <div className="mb-20 flex w-full flex-col text-center">
//             <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
//               Our Team
//             </h1>
//             <p className="mx-auto text-base leading-relaxed lg:w-2/3">
//               Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//               gentrify, subway tile poke farm-to-table. Franzen you probably
//               haven't heard of them.
//             </p>
//           </div>
//           <div className="-m-2 flex flex-wrap">
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/80x80/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Holden Caulfield
//                   </h2>
//                   <p className="text-gray-500">UI Designer</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/84x84/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Henry Letham
//                   </h2>
//                   <p className="text-gray-500">CTO</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/88x88/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Oskar Blinde
//                   </h2>
//                   <p className="text-gray-500">Founder</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/90x90/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     John Doe
//                   </h2>
//                   <p className="text-gray-500">DevOps</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/94x94/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Martin Eden
//                   </h2>
//                   <p className="text-gray-500">Software Engineer</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/98x98/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Boris Kitua
//                   </h2>
//                   <p className="text-gray-500">UX Researcher</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/100x90/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Atticus Finch
//                   </h2>
//                   <p className="text-gray-500">QA Engineer</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/104x94/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Alper Kamu
//                   </h2>
//                   <p className="text-gray-500">System</p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full p-2 md:w-1/2 lg:w-1/3">
//               <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
//                 <UDSImage
//                   alt="team"
//                   className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
//                   src="https://dummyimage.com/108x98/edf2f7/a5afbd"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="title-font font-medium text-gray-900">
//                     Rodrigo Monchi
//                   </h2>
//                   <p className="text-gray-500">Product Manager</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="body-font overflow-hidden border-t border-gray-200 text-gray-700">
//         <div className="container mx-auto flex flex-wrap px-5 py-24">
//           <div className="mt-48 hidden lg:block lg:w-1/4">
//             <div className="mt-px overflow-hidden rounded-bl-lg rounded-tl-lg border-b border-l border-t border-gray-300">
//               <p className="-mt-px flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900">
//                 Fingerstache disrupt
//               </p>
//               <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900">
//                 Franzen hashtag
//               </p>
//               <p className="flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900">
//                 Tilde art party
//               </p>
//               <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900">
//                 Banh mi cornhole
//               </p>
//               <p className="flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900">
//                 Waistcoat squid hexagon
//               </p>
//               <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900">
//                 Pinterest occupy authentic
//               </p>
//               <p className="flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900">
//                 Brooklyn helvetica
//               </p>
//               <p className="flex h-12 items-center justify-start px-4 text-center text-gray-900">
//                 Long Feature Two
//               </p>
//               <p className="flex h-12 items-center justify-start bg-gray-100 px-4 text-center text-gray-900">
//                 Feature One
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full flex-wrap rounded-lg border-gray-300 lg:w-3/4 lg:border">
//             <div className="mb-10 w-full rounded-lg border-2 border-gray-300 lg:mb-0 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
//               <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
//                 <h3 className="tracking-widest">START</h3>
//                 <h2 className="mb-4 mt-2 text-5xl font-medium leading-none text-gray-900">
//                   Free
//                 </h2>
//                 <span className="text-sm text-gray-600">Next 3 months</span>
//               </div>
//               <p className="-mt-px flex h-12 items-center justify-center border-t border-gray-300 bg-gray-100 px-2 text-center text-gray-600">
//                 Schlitz single-origin
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center px-6 text-center leading-relaxed text-gray-600">
//                 Feature
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <div className="rounded-bl-lg border-t border-gray-300 p-6 text-center">
//                 <button className="mt-auto flex w-full items-center rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
//                   Button
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="ml-auto h-4 w-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </button>
//                 <p className="mt-3 text-xs text-gray-500">
//                   Literally you probably haven't heard of them jean shorts.
//                 </p>
//               </div>
//             </div>
//             <div className="relative mb-10 w-full rounded-lg border-2 border-indigo-500 lg:-mt-px lg:mb-0 lg:w-1/3">
//               <span className="absolute right-0 top-0 rounded-bl bg-indigo-500 px-3 py-1 text-xs tracking-widest text-white">
//                 POPULAR
//               </span>
//               <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
//                 <h3 className="tracking-widest">PRO</h3>
//                 <h2 className="mb-4 mt-2 flex items-center justify-center text-5xl font-medium leading-none text-gray-900">
//                   $38
//                   <span className="ml-1 text-base text-gray-600">/mo</span>
//                 </h2>
//                 <span className="text-sm text-gray-600">
//                   Charging $456 per year
//                 </span>
//               </div>
//               <p className="-mt-px flex h-12 items-center justify-center border-t border-gray-300 bg-gray-100 px-2 text-center text-gray-600">
//                 Schlitz single-origin
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center leading-relaxed text-gray-600">
//                 Feature
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <div className="border-t border-gray-300 p-6 text-center">
//                 <button className="mt-auto flex w-full items-center rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
//                   Button
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="ml-auto h-4 w-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </button>
//                 <p className="mt-3 text-xs text-gray-500">
//                   Literally you probably haven't heard of them jean shorts.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full rounded-lg border-2 border-gray-300 lg:mt-px lg:w-1/3 lg:rounded-none lg:border-none">
//               <div className="flex h-48 flex-col items-center justify-center px-2 text-center">
//                 <h3 className="tracking-widest">BUSINESS</h3>
//                 <h2 className="mb-4 mt-2 flex items-center justify-center text-5xl font-medium leading-none text-gray-900">
//                   $54
//                   <span className="ml-1 text-base text-gray-600">/mo</span>
//                 </h2>
//                 <span className="text-sm text-gray-600">
//                   Charging $648 per year
//                 </span>
//               </div>
//               <p className="-mt-px flex h-12 items-center justify-center border-t border-gray-300 bg-gray-100 px-2 text-center text-gray-600">
//                 Schlitz single-origin
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center leading-relaxed text-gray-600">
//                 Feature
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 text-white">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="3"
//                     className="h-3 w-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 6L9 17l-5-5"></path>
//                   </svg>
//                 </span>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <p className="flex h-12 items-center justify-center bg-gray-100 text-center text-gray-600">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2.2"
//                   className="h-5 w-5 text-gray-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 6L6 18M6 6l12 12"></path>
//                 </svg>
//               </p>
//               <div className="border-t border-gray-300 p-6 text-center">
//                 <button className="mt-auto flex w-full items-center rounded border-0 bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
//                   Button
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     className="ml-auto h-4 w-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </button>
//                 <p className="mt-3 text-xs text-gray-500">
//                   Literally you probably haven't heard of them jean shorts.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="body-font border-t border-gray-200 text-gray-700">
//         <div className="container mx-auto px-5 py-24">
//           <div className="mx-auto w-full text-center lg:w-3/4 xl:w-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="mb-8 inline-block h-8 w-8 text-gray-400"
//               viewBox="0 0 975.036 975.036"
//             >
//               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
//             </svg>
//             <p className="text-lg leading-relaxed">
//               Edison bulb retro cloud bread echo park, helvetica stumptown
//               taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
//               ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
//               adaptogen squid fanny pack vaporware. Man bun next level coloring
//               book skateboard four loko knausgaard. Kitsch keffiyeh master
//               cleanse direct trade indigo juice before they sold out gentrify
//               plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
//               Slow-carb next level shoindigoitch ethical authentic, yr scenester
//               sriracha forage franzen organic drinking vinegar.
//             </p>
//             <span className="mb-6 mt-8 inline-block h-1 w-10 rounded bg-indigo-500"></span>
//             <h2 className="title-font text-sm font-medium tracking-wider text-gray-900">
//               HOLDEN CAULFIELD
//             </h2>
//             <p className="text-gray-500">Senior Product Designer</p>
//           </div>
//         </div>
//       </section>
//       <section className="body-font relative text-gray-700">
//         <div className="absolute inset-0 bg-gray-300">
//           <iframe
//             width="100%"
//             height="100%"
//             title="map"
//             scrolling="no"
//             src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
//             style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
//           ></iframe>
//         </div>
//         <div className="container mx-auto flex px-5 py-24">
//           <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
//             <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
//               Feedback
//             </h2>
//             <p className="mb-5 leading-relaxed text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <input
//               className="mb-4 rounded border border-gray-400 bg-white px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
//               placeholder="Email"
//               type="email"
//             />
//             <textarea
//               className="mb-4 h-32 resize-none rounded border border-gray-400 bg-white px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
//               placeholder="Message"
//             ></textarea>
//             <button className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
//               Button
//             </button>
//             <p className="mt-3 text-xs text-gray-500">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section>
//       <footer className="body-font text-gray-700">
//         <div className="container mx-auto px-5 py-24">
//           <div className="-mx-4 -mb-10 flex flex-wrap text-center md:text-left">
//             <div className="w-full px-4 md:w-1/2 lg:w-1/6">
//               <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
//                 CATEGORIES
//               </h2>
//               <nav className="mb-10 list-none">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     First Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Second Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Third Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Fourth Link
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/6">
//               <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
//                 CATEGORIES
//               </h2>
//               <nav className="mb-10 list-none">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     First Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Second Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Third Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Fourth Link
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/6">
//               <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
//                 CATEGORIES
//               </h2>
//               <nav className="mb-10 list-none">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     First Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Second Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Third Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Fourth Link
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/6">
//               <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
//                 CATEGORIES
//               </h2>
//               <nav className="mb-10 list-none">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     First Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Second Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Third Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Fourth Link
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/6">
//               <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
//                 CATEGORIES
//               </h2>
//               <nav className="mb-10 list-none">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     First Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Second Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Third Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Fourth Link
//                   </a>
//                 </li>
//               </nav>
//             </div>
//             <div className="w-full px-4 md:w-1/2 lg:w-1/6">
//               <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
//                 CATEGORIES
//               </h2>
//               <nav className="mb-10 list-none">
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     First Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Second Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Third Link
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-gray-600 hover:text-gray-800">
//                     Fourth Link
//                   </a>
//                 </li>
//               </nav>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-200">
//           <div className="container mx-auto flex flex-wrap items-center px-5 py-8">
//             <div className="md:flex-no-wrap flex flex-wrap justify-center md:justify-start">
//               <input
//                 className="mr-2 w-40 rounded border border-gray-400 bg-gray-100 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none sm:mr-4 sm:w-64"
//                 placeholder="Placeholder"
//                 type="text"
//               />
//               <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
//                 Button
//               </button>
//               <p className="mt-2 text-center text-sm text-gray-500 sm:text-left md:ml-6 md:mt-0">
//                 Bitters chicharrones fanny pack
//                 <br className="hidden lg:block" />
//                 waistcoat green juice
//               </p>
//             </div>
//             <span className="mt-6 inline-flex w-full justify-center md:w-auto md:justify-start lg:ml-auto lg:mt-0">
//               <a className="text-gray-500">
//                 <svg
//                   fill="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                 </svg>
//               </a>
//               <a className="ml-3 text-gray-500">
//                 <svg
//                   fill="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                 </svg>
//               </a>
//               <a className="ml-3 text-gray-500">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                 </svg>
//               </a>
//               <a className="ml-3 text-gray-500">
//                 <svg
//                   fill="currentColor"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="0"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="none"
//                     d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                   ></path>
//                   <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                 </svg>
//               </a>
//             </span>
//           </div>
//         </div>
//         <div className="bg-gray-200">
//           <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
//             <p className="text-center text-sm text-gray-500 sm:text-left">
//               © 2020 Tailwind Blocks —
//               <a
//                 href="https://twitter.com/knyttneve"
//                 className="ml-1 text-gray-600"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 @knyttneve
//               </a>
//             </p>
//             <span className="mt-2 w-full text-center text-sm text-gray-500 sm:ml-auto sm:mt-0 sm:w-auto sm:text-left">
//               Enamel pin tousled raclette tacos irony
//             </span>
//           </div>
//         </div>
//       </footer>
//       <a
//         href="https://github.com/mertJF/tailblocks"
//         className="fixed bottom-0 right-0 mb-8 mr-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-800 shadow-sm"
//         target="_blank"
//         rel="noopener noreferrer"
//         title="View on GitHub"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         >
//           <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//         </svg>
//       </a>
//     </>
//   );
// };

// export default Layout;
