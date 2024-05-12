const express = require('express');
const eventController = require('../controllers/event');
const router = express.Router();

router.get('/events', eventController.getEventsList);
router.get('/add-event', eventController.getAddEventForm);
router.post('/add-event', eventController.postAddEvent);
router.get('/events/:id/changes', eventController.getChangesPage);
router.post('/events/:id/changes', eventController.postChanges);
router.post('/events/:id/delete', eventController.deleteEvent);

module.exports = router;


