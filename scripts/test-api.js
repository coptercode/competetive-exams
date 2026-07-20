const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'eduverse-dev-secret';

// Create a student token
const token = jwt.sign({ userId: 'student123', role: 'STUDENT' }, JWT_SECRET);

async function check() {
  try {
    const res = await fetch('http://localhost:3000/api/assignments', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const text = await res.text();
    console.log('Assignments Status:', res.status);
    console.log('Assignments Body:', text);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

check();
