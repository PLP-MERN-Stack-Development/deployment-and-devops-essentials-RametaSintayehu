import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => res.json({ message: 'Register' }));
router.post('/login', (req, res) => res.json({ message: 'Login' }));

export default router;
EOF

# Create messages routes
cat > chat-app/backend/routes/messages.js << 'EOF'
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Get all messages endpoint',
    data: [] 
  });
});

router.post('/', (req, res) => {
  res.json({ 
    message: 'Create new message endpoint',
    success: true 
  });
});

export default router;
EOF

