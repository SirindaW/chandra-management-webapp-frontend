import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Forms from './Forms';
import AddNote from './AddNote';
import EditField from './EditField';

const Table = ({ tableName, header, data, states }) => {
   return (
      <div className="w-full min-h-[588px] border rounded-xl overflow-hidden border-primary/50">
         <div className="font-extrabold text-[20px] p-[1rem] bg-secondary text-white">{tableName}</div>
         {header !== 'null' && (
            <table className="w-full table-fixed bg-white overflow-scroll">
               <thead className="h-[47px] w-full bg-[#D9D9D9]">
                  <tr>
                     {header.map((h, idx) => (
                        <th key={idx} className={idx !== header.length - 1 && 'border-r border-r-[1px] border-r-[#9A9A9A]'}>
                           {h}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {tableName === 'Availability' ? (
                     <>
                        {data?.map((d, idx) => {
                           console.log(d);
                           return (
                              <tr key={idx} className="text-center hover:cursor-pointer h-[65px] border-b border-gray-200">
                                 <td>{d.TYPE}</td>
                                 <td>{d.START}</td>
                                 <td>{d.ARRIVE}</td>
                                 <td>{d.DEPART}</td>
                                 <td>{d.AVAILABLE}</td>
                                 <td className="px-14">
                                    <TextField required id="filled-required" inputProps={{ min: 0, style: { textAlign: 'center' } }} label=" " defaultValue={1} variant="filled" />
                                 </td>
                                 <td className="px-14">
                                    <TextField id="filled-number" inputProps={{ min: 0, style: { textAlign: 'center' } }} variant="filled" />
                                 </td>
                                 <td className="px-14">
                                    <TextField id="filled-numbrt" inputProps={{ min: 0, style: { textAlign: 'center' } }} variant="filled" />
                                 </td>
                                 <td>
                                    <Button variant="contained" sx={{ backgroundColor: '#27BE5A' }}>
                                       ADD
                                    </Button>
                                 </td>
                                 {/* <td className='h-[65px]'>comments</td> */}
                              </tr>
                           );
                        })}
                     </>
                  ) : (
                     <>
                        {data &&
                           data.map((d) => (
                              <tr key={d._id} className="text-center">
                                 <td className="h-[65px] border-b border-gray-200">{d._id}</td>
                                 <td className="h-[65px] border-b border-gray-200">
                                    {d.prefix} {d.fname} {d.lname}
                                 </td>
                                 <td className="h-[65px] border-b border-gray-200">{d.type}</td>
                                 <td className="h-[65px] border-b border-gray-200">{d.place}</td>
                                 <td className="h-[65px] border-b border-gray-200">{d.start}</td>
                                 <td className="h-[65px] border-b border-gray-200">{d.end}</td>
                                 <td className="h-[65px] border-b border-gray-200">
                                    {d.min_budget.toLocaleString()}-{d.max_budget.toLocaleString()}
                                 </td>
                                 <td className="h-[65px] border-b border-gray-200">
                                    <EditField status={d.status} id={d._id} data={d} />
                                 </td>
                              </tr>
                           ))}
                     </>
                  )}
               </tbody>
            </table>
         )}

         {/* ======================== for reservation info ============================== */}
         {(tableName === 'GUEST INFORMATION' || tableName === 'Payment Information') && <Forms labels={data} states={states} />}
         {tableName === 'Additional Details and Preferences' && <AddNote />}
      </div>
   );
};
export default Table;
