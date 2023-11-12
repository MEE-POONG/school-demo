import { useState, useEffect } from "react";
import axios from "axios";

interface IpDbItem {
  id: string;
  ipAddress: string;
}

const VisiterCounter: React.FC = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipDb, setIpDb] = useState<IpDbItem[]>([]);

  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(response.data.ip);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIpDb = async () => {
    try {
      const response = await axios.get("/api/IPAddress");
      setIpDb(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
    fetchIpDb();
  }, []);

  useEffect(() => {
    const isIpInDb = ipDb.some(dbIp => dbIp.ipAddress === ipAddress);

    if (ipAddress && !isIpInDb) {
      axios.post("/api/IPAddress", { ipAddress })
        .then(response => {
          if (response.status === 201) {
            console.log("Added IP address to the database:", ipAddress);
            // Optionally, fetch the updated list of IPs from the database
            fetchIpDb();
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [ipAddress, ipDb]);

  return <></>;
}

export default VisiterCounter;