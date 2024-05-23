import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
// import api from '../api/axios';
import Item from '../components/Item';
import Sidebar from '../components/Sidebar';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import ModalForm from '../components/ModalForm';

const Home: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
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
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const fetchItems = async () => {
      // Simulate fetching data
      let array = [];
      for (let i = 0; i <= 8; i++) {
        array.push(i);
      }
      // const fetchedItems: number[] = array;
      // setItems(fetchedItems);
    };

    fetchItems();
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

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
        <div className='flex justify-between'>
          <p className='text-[24px] font-bold ms-[30px]'>Corporate Loan Applications</p>
          <button onClick={() => { setShowModal(true) }} className='me-[36px] bg-blue-500 text-white py-[10px] px-[20px] rounded-full text-[18px] font-bold leading-[13px]'>Create</button>
        </div>
        <div className='overflow-auto flex flex-col gap-[38px] px-[30px]'>


          <div className=''>
            <div className="grid grid-cols-3 gap-4">
              {items.map((item: any, index: number) => <Item key={index} item={item} />)}
            </div>
          </div>
          <Pagination currentPage={currentPage} changePage={changePage} totalPages={totalPages} />
        </div>

      </div>
      <ModalForm
        key={Math.random()}
        show={showModal}
        onClose={handleClose}
      />
    </div>
  );
};

export default Home;