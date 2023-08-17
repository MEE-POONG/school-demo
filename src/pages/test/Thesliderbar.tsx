import React, { useState, useEffect } from 'react';

const IndexPage: React.FC = () => {
  const [indexSlderData, setIndexSlderData] = useState([]);

  useEffect(() => {
    // ส่งคำขอเมื่อคอมโพเนนต์ถูกโหลด
    fetch('/api/indexSlder')
      .then((response) => response.json())
      .then((data) => {
        setIndexSlderData(data.indexSlder);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {indexSlderData.map((indexSlder) => (
          <li key={indexSlder.id}>
            {/* ID: {indexSlder.id}, */}
            {/* Img1: {indexSlder.img1} */}
            <img
              src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${indexSlder.img1}/public`}
              alt="indexActivity imge"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

