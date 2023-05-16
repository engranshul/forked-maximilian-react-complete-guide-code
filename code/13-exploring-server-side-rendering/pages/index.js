 
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;


// In general, you should use getServerSideProps when you need to fetch data that changes 
// frequently and you need to ensure that the data is always up-to-date. Use getStaticProps
// when you need to fetch data that doesn't change frequently and you want to serve the 
// same data to all users
