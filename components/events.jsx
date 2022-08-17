

const Events = () => {

    const eventList = [
        {
            date: {
                day: 16,
                month: 8,
                year: 2022
            },
            title: 'Awesome Event',
            description: 'This is some info about the event that is happening today'
        },
        {
            date: {
                day: 16,
                month: 8,
                year: 2022
            },
            title: 'Awesome Event',
            description: 'This is some info about the event that is happening today'
        },
        {
            date: {
                day: 16,
                month: 8,
                year: 2022
            },
            title: 'Awesome Event',
            description: 'This is some info about the event that is happening today'
        },
    ]


    return (
        <div className="flex jusify-center bg-cyan-700">
            <ul className="p-10 mx-auto sm:max-w-50vw">
                {eventList.map(event => {
                    return (
                        <li key={event.title} className="p-3">
                            <small>{event.date.month}/{event.date.day}</small><br />
                            <h1 className="text-2xl font-bold">{event.title}</h1>
                            <p className="text-lg">{event.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Events;