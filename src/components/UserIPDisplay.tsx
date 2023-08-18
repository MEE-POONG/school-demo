import React, { useEffect, useState } from 'react';

interface VisitorData {
  count: number;
  lastVisit: string;
}

const VisitorCounter: React.FC = () => {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);

  useEffect(() => {
    // อ่านข้อมูลผู้เข้าชมจาก localStorage เมื่อโหลดครั้งแรก
    const storedVisitorData = localStorage.getItem('visitorData');
    if (storedVisitorData) {
      setVisitorData(JSON.parse(storedVisitorData));
    } else {
      setVisitorData({
        count: 0,
        lastVisit: '',
      });
    }

    // เพิ่มจำนวนผู้เข้าชมและอัปเดตข้อมูลใน localStorage
    const now = new Date();
    const newVisitorData = {
      count: visitorData ? visitorData.count + 1 : 1,
      lastVisit: now.toLocaleString(),
    };
    localStorage.setItem('visitorData', JSON.stringify(newVisitorData));
    setVisitorData(newVisitorData);
  }, []); // ไม่ต้องกำหนด dependency เพื่อให้ทำเพียงครั้งเดียวเมื่อโหลดครั้งแรก

  return (
    <div>
      {visitorData && (
        <div>
          <p>{visitorData.count}</p>
          {/* <p>เข้าชมล่าสุดเมื่อ: {visitorData.lastVisit}</p> */}
        </div>
      )}
    </div>
  );
};

export default VisitorCounter;



























// import React, { useState, useEffect } from 'react';
// const UserIPDisplay: React.FC = () => {
//   const [userIP, setUserIP] = useState<string | null>(null);
//   const [totalIPs, setTotalIPs] = useState<number>(0);

//   useEffect(() => {
//     const fetchAndStoreUserIP = async () => {
//       try {
//         const response = await fetch('https://api64.ipify.org?format=json');
//         const data = await response.json();
//         setUserIP(data.ip);

//         const storedTotalIPs = localStorage.getItem('totalIPs');
//         const updatedTotalIPs = storedTotalIPs
//           ? parseInt(storedTotalIPs) +1
//           : +1;
//         setTotalIPs(updatedTotalIPs);
//         localStorage.setItem('totalIPs', String(updatedTotalIPs));

//         // ส่งข้อมูลไปยัง API Endpoint สำหรับเก็บในฐานข้อมูล
//         await fetch('/api/IPAddress', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ userIP: data.ip, totalIPs: updatedTotalIPs }),
//         });
//       } catch (error) {
//         console.error('Error fetching IP:', error);
//       }
//     };

//     fetchAndStoreUserIP();
//   }, []);

//   return (
//     <div>
//       {/* <p className=''>IP ผู้ใช้: {userIP || 'ยังไม่มี IP'}</p> */}
//       <h3 className=''>{totalIPs}</h3>
//     </div>
//   );
// };

// export default UserIPDisplay;
