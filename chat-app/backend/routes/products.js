cat > chat-app/backend/routes/products.js << 'EOF'
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get products route' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create product route' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'Get product by ID route' });
});

export default router;
EOF