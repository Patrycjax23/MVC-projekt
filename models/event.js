class Event {
    constructor(id, nazwa, data, miejsce) {
        this.id = id;
        this.nazwa = nazwa;
        this.data = data;
        this.miejsce = miejsce;
    }

    static events = [
        new Event(1, "Juwenalia", "2024-05-24", "Mokotów"),
        new Event(2, "Koncert", "2024-08-20", "Lotnisko Bemowo"),
        new Event(3, "Teatr", "2024-06-15", "Teatr Narodowy")
    ];

    static addNewEvent(nazwa, data, miejsce) {
        const id = this.events.length > 0 ? this.events[this.events.length - 1].id + 1 : 1;
        const newEvent = new Event(id, nazwa, data, miejsce);
        this.events.push(newEvent);
    }

    static updateEvent(id, newData) {
        const index = this.events.findIndex(event => event.id === id);
        if (index === -1) {
            console.error("Nie znaleziono wydarzenia o podanym id:", id);
            return;
        }
        this.events[index].data = newData.data;
        this.events[index].miejsce = newData.miejsce;

        console.log("Zmiany zostaly wprowadzone:", this.events[index]);
    }

    static deleteEvent(id) {
        this.events = this.events.filter(event => event.id !== id);
    }

    static getAll() {
        return this.events;
    }
}

module.exports = Event;
