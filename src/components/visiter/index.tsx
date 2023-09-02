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
      if (!ipDb.some(dbIp => dbIp.ipAddress === ipAddress)) {
        axios.post("/api/IPAddress", { ipAddress: ipAddress })
          .then(response => {
            if (response.status === 201) {
              // อัพเดท state และแสดงผลลัพธ์
              setIpDb([...ipDb, { id: Date.now().toString(), ipAddress }]);
            } else {
              throw new Error("API request failed with status code " + response.status);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }, [ipAddress, ipDb]);

  useEffect(() => {
    setIsLoading(false);
  }, [ipAddress, ipDb]);

  return (
    <>
      {isLoading && <Loading />}
      {ipDb.length}
    </>
  );
}

export default Visiter;
