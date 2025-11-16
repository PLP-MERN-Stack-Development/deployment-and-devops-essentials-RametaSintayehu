cat > chat-app/backend/routes/messages.js << 'EOF'
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get messages route' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create message route' });
});

export default router;
EOF