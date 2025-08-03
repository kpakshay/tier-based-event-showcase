export default function AboutUs() {
  return (
    // <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Welcome to <span className="font-semibold text-purple-600 dark:text-purple-400">Tier Events</span> — your personalized event experience. Whether you are on a free plan or a premium tier, we ensure you get the best.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2"> Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400">
              To provide a seamless, engaging event platform that scales with your interests and access level. Everyone deserves great events.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2"> What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-400">
              From Free to Platinum, enjoy a curated feed of events based on your current tier. Upgrade anytime to explore more.
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-400 dark:text-gray-500">
          Built using Next.js, Clerk, Supabase & Tailwind CSS.
        </p>
      </div>
    // </div>
  );
}


// const AboutUs=()=>{
//     return(
//         <>
//         <h3>About Us Page</h3>
        
//         </>
//     )
// }
// export default AboutUs