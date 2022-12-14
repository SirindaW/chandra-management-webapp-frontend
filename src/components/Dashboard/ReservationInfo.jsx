import React, { useState } from 'react';
import { TfiReload } from 'react-icons/tfi';
import { AiFillPrinter, AiOutlineSearch } from 'react-icons/ai';
import { Button, TextField, InputAdornment } from '@mui/material';
import { MdEditNote } from 'react-icons/md';
import { GiExitDoor } from 'react-icons/gi';
import ResvTable from './ResvTable';
import { table } from '../../constants/text';

const defaultRESV = {
   currentPage: '',
   arrivals: false,
   departures: false,
   stayovers: false,
};

const ReservationInfo = () => {
   const [isToday, setIsToday] = useState(true);
   const [inputText, setInputText] = useState('');
   const [isRESVClicked, setIsRESVClicked] = useState({
      ...defaultRESV,
      arrivals: true,
      currentPage: 'arrivals',
   });
   const pageActive = 'bg-gray-100';

   const RESV_pages = [
      {
         title: 'Arrivals',
         onClick: () => {
            handlePageClick_RESV('arrivals');
         },
      },
      {
         title: 'Departures',
         onClick: () => {
            handlePageClick_RESV('departures');
         },
      },
      {
         title: 'Stayovers',
         onClick: () => {
            handlePageClick_RESV('stayovers');
         },
      },
   ];

   const handlePageClick_RESV = (page) => {
      setIsRESVClicked({ ...defaultRESV, [page]: true, currentPage: page });
   };

   const handleSearch = (e) => {
      e.preventDefault();
      setInputText('');
   };

   return (
      <div className="flex flex-col flex-1 h-[600px] bg-secondary rounded-lg shadow-xl overflow-y-auto">
         <div className="p-2 text-[#fff] text-[18px] font-bold flex justify-between items-center">
            <div>RESERVATION</div>
            <div className="flex gap-4">
               <div className="font-extrabold ">
                  <TfiReload />
               </div>
               <div className="font-extrabold ">
                  <AiFillPrinter />
               </div>
            </div>
         </div>
         <div className="flex-1 bg-white p-2">
            <div className="border-b w-full border-b-lightGray gap-4 mt-5 flex justify-end items-center mb-2">
               <div className="mb-2">
                  <form onSubmit={handleSearch}>
                     <TextField
                        variant="standard"
                        placeholder="Guest Name"
                        value={inputText}
                        onChange={(e) => {
                           setInputText(e.target.value);
                        }}
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 <AiOutlineSearch />
                              </InputAdornment>
                           ),
                        }}
                     />
                  </form>
               </div>
            </div>
            <ResvTable table={table} today={isToday} page={isRESVClicked.currentPage} nameFilter={inputText} />
         </div>
      </div>
   );
};

export default ReservationInfo;
