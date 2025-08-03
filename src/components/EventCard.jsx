const EventCard = ({id, title, image_url, description, event_date, tier}) => {
    const formattedDate = new Date(event_date).toLocaleDateString('en-GB');
    console.log(id,title,description,"Hiii Event")
    return (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md" key={id}>
            <div>
                <span className="inline-flex items-center justify-center rounded-md bg-gray-400 p-1 shadow-lg">
                    <img src={`${image_url}`} alt="Event Banner" className="w-100 h-80 object-cover rounded-md" />
                </span>
            </div>
            <h3 className="text-gray-900 dark:text-white mt-4 text-lg font-semibold">
                {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{description}</p>
            <p className="text-gray-400 dark:text-gray-300 mt-1 text-sm">📅 {formattedDate}</p>
            <span
                className={`capitalize inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full 
                                    ${tier === 'platinum'
                        ? 'bg-gradient-to-r from-gray-300 to-gray-100 text-black shadow shadow-cyan-500/50'
                        : tier === 'gold'
                            ? 'bg-yellow-400 text-white shadow'
                            : tier === 'silver'
                                ? 'bg-gray-400 text-white'
                                : tier === 'free'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-500 text-white'
                    }`}
            >
                {tier}
            </span>
        </div>
    );
}

export default EventCard