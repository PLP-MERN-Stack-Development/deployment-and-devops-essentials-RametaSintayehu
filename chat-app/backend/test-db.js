// test-db.js
import mongoose from 'mongoose';

// ✅ URL encode the password to handle special characters
const connectionString = "mongodb+srv://rametasint_db_user:Yoya%402024@mern-chat-app.vpec4ck.mongodb.net/chat-app?retryWrites=true&w=majority";

console.log('🔗 Testing connection to MongoDB Atlas...');

async function testConnection() {
  try {
    console.log('📡 Connecting...');
    
    await mongoose.connect(connectionString);
    console.log('✅ SUCCESS: Connected to MongoDB Atlas!');
    
    // Check what collections we have
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📁 Collections found:', collections.map(c => c.name));
    
    await mongoose.connection.close();
    console.log('🎉 All tests passed! Your database is ready.');
    
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    
    if (error.message.includes('auth failed')) {
      console.log('💡 Password issue detected. Trying URL encoding...');
      
      // Try with URL encoded password
      const encodedConnectionString = "mongodb+srv://rametasint_db_user:Yoya%402024@mern-chat-app.vpec4ck.mongodb.net/chat-app?retryWrites=true&w=majority";
      
      try {
        await mongoose.connect(encodedConnectionString);
        console.log('✅ SUCCESS with URL encoded password!');
      } catch (error2) {
        console.error('❌ Still failing:', error2.message);
      }
    }
  }
}

testConnection();