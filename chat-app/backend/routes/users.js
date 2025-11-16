cat > chat-app/backend/routes/users.js << 'EOF'
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get users route' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'Get user by ID route' });
});

export default router;
EOF