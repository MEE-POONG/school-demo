import React, { useState, useEffect } from 'react';

function App() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // เมื่อคอมโพเนนต์ถูกโหลด จะเรียกใช้ฟังก์ชัน getIpAddress()
    getIpAddress();
  }, []);

  const getIpAddress = () => {
    // เรียกใช้ API ที่ไว้ให้เพื่อเรียกข้อมูลเกี่ยวกับเครือข่าย
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIpAddress(data.ip); // อัพเดตค่า IP Address ใน state
      })
      .catch(error => console.error('เกิดข้อผิดพลาดในการเรียก API:', error));
  };

  return (
    <div>
      <h1>Your IP Address:</h1>
      <p>{ipAddress}</p>
    </div>
  );
}

export default App;
