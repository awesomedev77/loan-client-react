import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../api/axios';
import Item from '../components/Item';
import Sidebar from '../components/Sidebar';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';

const Home: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<any>([
    {
      id: 0,
      name: 'Emirates Airlines',
      location: 'Garhoud, Dubai',
      status: 0,
      loan: 3000000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    },
    {
      id: 1,
      name: 'Dubai Electricity (DEWA)',
      location: 'Al Karama, Dubai',
      status: 0,
      loan: 150000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    },
    {
      id: 2,
      name: 'Emirates National Bank of Dubai',
      location: 'Deira, Dubai',
      status: 1,
      loan: 133000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    }, {
      id: 0,
      name: 'Emirates Airlines',
      location: 'Garhoud, Dubai',
      status: 2,
      loan: 3000000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    },
    {
      id: 1,
      name: 'Dubai Electricity (DEWA)',
      location: 'Al Karama, Dubai',
      status: 0,
      loan: 150000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    },
    {
      id: 2,
      name: 'Emirates National Bank of Dubai',
      location: 'Deira, Dubai',
      status: 1,
      loan: 133000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    }, {
      id: 0,
      name: 'Emirates Airlines',
      location: 'Garhoud, Dubai',
      status: 2,
      loan: 3000000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    },
    {
      id: 1,
      name: 'Dubai Electricity (DEWA)',
      location: 'Al Karama, Dubai',
      status: 1,
      loan: 150000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    },
    {
      id: 2,
      name: 'Emirates National Bank of Dubai',
      location: 'Deira, Dubai',
      status: 2,
      loan: 133000,
      date: '22 Oct, 2020, 11:40 PM',
      avatar: 'https://i.postimg.cc/LXt3jp0t/ahmed.png',
      position: 'Financial Officer',
      user: 'Ahmed Al Maktoum',
    }
  ]);
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const itemsPerPage = 9;
  const totalItems = 50;

  useEffect(() => {
    const fetchItems = async () => {
      // Simulate fetching data
      let array = [];
      for (let i = 0; i <= 8; i++) {
        array.push(i);
      }
      const fetchedItems: number[] = array;
      // setItems(fetchedItems);
    };

    fetchItems();
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };



  const test = () => {
    api.get('profile').then((res) => {
      console.log(res);
    })
  }
  useEffect(() => {
    if (!isAuthenticated) {
      // navigate('/login');
    }

  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <Sidebar />
      <div className="flex flex-col grow py-5 gap-[38px]">
        <Header />
        <p className='text-[24px] font-bold leading-[17px] px-[30px]'>Corporate Loan Applications</p>
        <div className='overflow-auto flex flex-col gap-[38px] px-[30px]'>


          <div className=''>
            <div className="grid grid-cols-3 gap-4">
              {items.map((item: any, index: number) => <Item key={index} item={item} />)}
            </div>
          </div>
          <Pagination currentPage={currentPage} changePage={changePage} totalPages={totalPages} />
        </div>

      </div>
    </div>
  );
};

export default Home;