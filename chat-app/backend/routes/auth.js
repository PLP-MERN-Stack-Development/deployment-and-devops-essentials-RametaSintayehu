# Create a basic auth route
cat > chat-app/backend/routes/auth.js << 'EOF'
import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ 
    message: 'User registration endpoint',
    success: true 
  });
});

router.post('/login', (req, res) => {
  res.json({ 
    message: 'User login endpoint',
    success: true 
  });
});

export default router;
EOF

