import React, { useState, useEffect } from 'react';

const VisitorCounter: React.FC = () => {
  const [userIP, setUserIP] = useState<string | null>(null);
  const [totalIPs, setTotalIPs] = useState<number>(0);

  useEffect(() => {
    const fetchAndStoreUserIP = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        setUserIP(data.ip);

        const storedTotalIPs = localStorage.getItem('totalIPs');
        const updatedTotalIPs = storedTotalIPs ? parseInt(storedTotalIPs) : 1;
        setTotalIPs(updatedTotalIPs);

        // ส่งข้อมูลไปยัง API Endpoint สำหรับเก็บในฐานข้อมูล
        await fetch('/api/IPAddress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userIP: data.ip, totalIPs: updatedTotalIPs }),
        });
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };

    fetchAndStoreUserIP();
  }, []);

  return (
    <div>
      {/* <p className=''>IP ผู้ใช้: {userIP || 'ยังไม่มี IP'}</p> */}
      <h3 className=''>{totalIPs}</h3>
    </div>
  );
};

export default VisitorCounter;
