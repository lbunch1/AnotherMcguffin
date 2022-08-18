import Event from './event';

const Events = () => {

    const eventList = [
        // {
        //     date: {
        //         day: 16,
        //         month: 8,
        //         year: 2022
        //     },
        //     title: 'Awesome Event',
        //     description: 'This is some info about the event that is happening today'
        // },
        // {
        //     date: {
        //         day: 16,
        //         month: 8,
        //         year: 2022
        //     },
        //     title: 'Awesome Event',
        //     description: 'This is some info about the event that is happening today'
        // },
        // {
        //     date: {
        //         day: 16,
        //         month: 8,
        //         year: 2022
        //     },
        //     title: 'Awesome Event',
        //     description: 'This is some info about the event that is happening today'
        // },
    ]


    return (
        <div className="flex jusify-center bg-cyan-700">
            <ul className="p-10 mx-auto sm:max-w-50vw">
                {(eventList.length > 0)
                ? eventList.map(event => {
                    return (
                        <Event event={event} />
                    )
                })
                : <li className="text-xl">No upcoming events. Check back soon!</li>
                }
            </ul>
        </div>
    )
}

export default Events;