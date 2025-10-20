// Test script to verify contact form endpoint
const testContactForm = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the contact form test script.'
  };

  console.log('🧪 Testing contact form endpoint...');
  console.log('📤 Sending test data:', testData);
  
  try {
    const response = await fetch('https://portfolio-backend-9hvq.onrender.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Response status:', response.status);
    console.log('📊 Response status text:', response.statusText);
    
    const responseData = await response.json();
    console.log('📨 Response data:', responseData);

    if (response.ok) {
      console.log('✅ SUCCESS! Contact form is working.');
      console.log('📧 Check your email at: idavazhikal123@gmail.com');
    } else {
      console.log('❌ FAILED! Response was not OK.');
    }
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error('Full error:', error);
  }
};

// Test the health endpoint first
const testHealth = async () => {
  console.log('\n🏥 Testing health endpoint...');
  try {
    const response = await fetch('https://portfolio-backend-9hvq.onrender.com/api/health');
    const data = await response.json();
    console.log('✅ Health check:', data);
  } catch (error) {
    console.error('❌ Health check failed:', error.message);
  }
};

// Run tests
(async () => {
  await testHealth();
  console.log('\n' + '='.repeat(50) + '\n');
  await testContactForm();
})();
