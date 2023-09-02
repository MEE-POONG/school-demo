import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from '@/components/loading';

interface IpDbItem {
  id: string;
  ipAddress: string;
}

function Visiter() {
  const [ipAddress, setIpAddress] = useState('');
  const [ipDb, setIpDb] = useState<IpDbItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIpDb = async () => {
    try {
      const response = await axios.get("/api/IPAddress");
      if (response.status === 200) {
        const data = response.data.iPAddress;
        setIpDb(data);
      } else {
        throw new Error("API request failed with status code " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    fetchIpDb();
  }, []);

  useEffect(() => {
    if (ipAddress && ipDb) {
      const isIpInDb = ipDb.some(dbIp => dbIp.ipAddress === ipAddress);
      if (!isIpInDb) {
        // ตรวจสอบ Local Storage ว่า IP Address นี้เคยถูกบันทึกไว้หรือไม่
        const localStorageIp = localStorage.getItem('ipAddress');
        if (localStorageIp !== ipAddress) {
          axios.post("/api/IPAddress", { ipAddress: ipAddress })
            .then(response => {
              if (response.status === 201) {
                // บันทึก IP Address ลงในฐานข้อมูล
                setIpDb([...ipDb, { id: Date.now().toString(), ipAddress }]);
                // บันทึก IP Address ลง Local Storage เพื่อเลี่ยงการบันทึก IP ที่ซ้ำ
                localStorage.setItem('ipAddress', ipAddress);
              } else {
                throw new Error("API request failed with status code " + response.status);
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
      }
    }
  }, [ipAddress, ipDb]);

  useEffect(() => {
    setIsLoading(false);
  }, [ipAddress, ipDb]);

  return (
    <>
      {isLoading && <Loading />} {/* แสดงหน้าต่าง Loading ถ้า isLoading เป็น true */}
      {ipDb.length}
    </>
  );
}

export default Visiter;
