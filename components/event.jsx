const Event = ( {event} ) => {
    return (
        <li className="p-3">
        <small>{event.date.month}/{event.date.day}</small><br />
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <p className="text-lg">{event.description}</p>
    </li>
    )
}

export default Event;