const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSingleThought,
    addreaction,
    removeReaction,
    updateThought,
    deletethought,
 
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtsId
 router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deletethought);




 //Reaction

 // /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reactions').post(addreaction);

// /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


  

module.exports = router;
