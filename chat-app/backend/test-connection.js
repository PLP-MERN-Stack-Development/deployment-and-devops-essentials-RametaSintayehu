// test-atlas-connection.js
import mongoose from 'mongoose';

// Your actual MongoDB Atlas connection string
const connectionString = "mongodb+srv://rametasint_db_user:Yoya%402024@mern-chat-app.vpec4ck.mongodb.net/chat-app?retryWrites=true&w=majority";

console.log('🔗 Testing MongoDB Atlas connection...');
console.log('Using cluster: mern-chat-app.vpec4ck.mongodb.net');

async function testConnection() {
  try {
    console.log('📡 Attempting to connect...');
    
    // Connect with explicit options
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000, // 45 second socket timeout
    });
    
    console.log('✅ SUCCESS: Connected to MongoDB Atlas!');
    
    // Check database info
    const db = mongoose.connection.db;
    console.log('📊 Database name:', db.databaseName);
    
    // List collections
    const collections = await db.listCollections().toArray();
    console.log('📁 Collections:', collections.map(c => c.name));
    
    await mongoose.connection.close();
    console.log('🎉 MongoDB Atlas is working perfectly!');
    
  } catch (error) {
    console.error('❌ CONNECTION FAILED:', error.message);
    console.log('🔍 Troubleshooting tips:');
    console.log('   1. Check if network access is enabled in MongoDB Atlas');
    console.log('   2. Verify your password is correct');
    console.log('   3. Make sure the "chat-app" database exists');
    console.log('   4. Check if special characters in password need encoding');
  }
}

testConnection();