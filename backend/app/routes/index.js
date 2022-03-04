const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');
const broadcast = require('./broadcast');
const faq = require('./faq/post');
const getFaq = require('./faq/getFaq');
const deleteFaq = require('./faq/deleteFaq');
const joinUs = require('./joinUs/post');
const contactUs = require('./contactUs/post');
const question = require('./Q&A/question');
const answer = require('./Q&A/answers');
const teamMember = require('./teamMember');
router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/faq', faq);
router.use('/deleteFaq', deleteFaq);
router.use('/getFaq', getFaq);
router.use('/contactus', contactUs);
router.use('/broadcast', broadcast);
router.use('/question', question);
router.use('/answers', answer);
router.use('/', tinyURL);
router.use('/joinUs', joinUs);
router.use('/teamMember', teamMember);
module.exports = router;
