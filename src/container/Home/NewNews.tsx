import TitleText from "@/components/TitleText";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import Slider from 'react-slick';
import { News } from "@prisma/client";
import Loading from "@/components/loading";
import { newsMenu } from "@/data/news";

export const NewNews: React.FC = () => {
  const [selectType, setSelectType] = useState(newsMenu[0]?.value);
  const [newsArray, setNewsArray] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    fetch(`/api/news/search?page=1&pageSize=10&keyword=${selectType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.newsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/news/search?page=1&pageSize=10&keyword=${selectType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNewsArray(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setIsLoading(false);
      });

  }, [selectType]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container m-auto">
    หหห
    </div>
  );
}