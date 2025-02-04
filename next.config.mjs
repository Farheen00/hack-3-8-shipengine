/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//             domains:["cdn.sanity.io"]
//             },
    
// };

// export default nextConfig;
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains:["cdn.sanity.io"]
//     },
//     env: {
//         NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//         NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     }
// };

// export default nextConfig;
