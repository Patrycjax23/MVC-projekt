
const Event = require('../models/event');

const getEventsList = (req, res) => {
    const events = Event.getAll(); 
    res.render('events', { title: 'Wydarzenia', events }); 
};

const getAddEventForm = (req, res) => {
    res.render('add-event', { title: 'Dodaj Wydarzenie' });
};

const postAddEvent = (req, res) => {
    const { nazwa, data, miejsce } = req.body;
    Event.addNewEvent(nazwa, data, miejsce);
    res.redirect('/events'); 
};

const getChangesPage = (req, res) => {
    const { id } = req.params;
    const event = Event.getAll().find(event => event.id === parseInt(id));
    res.render('changes', { title: 'Make Changes', event });  
};

const postChanges = (req, res) => {
    const { id } = req.params;
    const { data, miejsce } = req.body;
    Event.updateEvent(parseInt(id), { data, miejsce });
    res.redirect('/events');
};

const deleteEvent = (req, res) => {
    const eventId = req.params.id;
    Event.deleteEvent(parseInt(eventId));
    res.redirect('/events');
};

module.exports = {
    getEventsList,
    getAddEventForm,
    postAddEvent,
    getChangesPage,
    postChanges,
    deleteEvent
};
