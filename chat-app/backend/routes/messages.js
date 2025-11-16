import express from 'express';
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Get messages' }));
router.post('/', (req, res) => res.json({ message: 'Create message' }));
export default router;
