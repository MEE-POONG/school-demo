import React, { useState, useEffect } from 'react';

const UserIPDisplay: React.FC = () => {
  const [userIP, setUserIP] = useState<string | null>(null);
  const [uniqueLastTwoDigits, setUniqueLastTwoDigits] = useState<number>(0);

  useEffect(() => {
    const fetchAndStoreUserIP = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        setUserIP(data.ip);

        const lastTwoDigits = Number(data.ip.split('.').slice(-1)[0]);
        if (lastTwoDigits !== uniqueLastTwoDigits) {
          setUniqueLastTwoDigits(lastTwoDigits);
        }

        // ส่งข้อมูลไปยัง API Endpoint สำหรับเก็บในฐานข้อมูล
        await fetch('/api/IPAddress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userIP: data.ip, lastTwoDigits }),
        });
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };

    fetchAndStoreUserIP();
  }, [uniqueLastTwoDigits]);

  return (
    <div>
      <p className=''>IP ผู้ใช้: {userIP || 'ยังไม่มี IP'}</p>
      <h3 className=''>{uniqueLastTwoDigits}</h3>
    </div>
  );
};

export default UserIPDisplay;
