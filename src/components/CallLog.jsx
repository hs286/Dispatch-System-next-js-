'use client'
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, Input, TableBody, TableRow, TableCell, } from "@nextui-org/react"; import { IoShareSocialOutline } from "react-icons/io5";
import { FaSearch, FaFilter, FaTable } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import AccordionComponent from "./AccordionComponent";
const rows = [
    {
        id: 1, caller: 'Anas Abrar', phoneNumber: '(406) 555-0120', dateTime: 'November 28, 2023',
        emergencyType: 'Ambulance', duration: '00:38', status: 'completed', age: '25 years',
        dispatcherName: 'Jacob Jones', emergencyPersonnel: 'Jenny Wilson', address: '6391 Elgin St. Celina, Delaware 10299',
        responseTime: '2 minutes', completionTime: '20 minutes', callStartTime: '01:40pm', callEndTime: '01:50pm',
        outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2, caller: 'Cody Fisher', phoneNumber: '(307) 555-0133', dateTime: 'January 28, 2023',
        emergencyType: 'Police', duration: '00:38', status: 'in Progress', age: '30 years',
        dispatcherName: 'Jane Doe', emergencyPersonnel: 'John Doe', address: '1234 Elm St. Springfield, IL 62704',
        responseTime: '3 minutes', completionTime: '25 minutes', callStartTime: '02:00pm', callEndTime: '02:25pm',
        outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }]


const columns = [
    {
        key: "caller",
        label: "Caller",
    },
    {
        key: "phoneNumber",
        label: "Phone Number",
    },
    {
        key: "dateTime",
        label: "Date & Time",
    },
    {
        key: "emergencyType",
        label: "Emergency Type",
    },
    {
        key: "duration",
        label: "Duration",
    },

    {
        key: "status",
        label: "Status",
    },

    {
        key: "action",
        label: "Action",
    },
];




export default function CallLog() {
    // const [expandedRows, setExpandedRows] = useState([]);

    // const toggleRow = (id) => {
    //     setExpandedRows((prev) => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
    // };
    return (
        <div className=" m-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Call History</h1>
                <div className="flex items-center space-x-2">
                    <Input
                        isClearable
                        radius="lg"
                        className=""
                        placeholder="Search"
                        startContent={
                            <CiSearch className="text-[#2D8076] mb-0.5  pointer-events-none flex-shrink-0" />
                        }
                    />
                    <button className="p-2 bg-gray-100 rounded-md">
                        <FaFilter />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-md">
                        <FaTable />
                    </button>
                </div>
            </div>
            <Table isStriped aria-label="Example static collection table">
                <TableHeader  >
                    {columns.map((items) => (<TableColumn className="bg-[#E9F1EA]" key={items.key}>{items.label}</TableColumn>))}


                </TableHeader>
                <TableBody>
                    {rows.map((row) => (<TableRow key="1" className="even:bg-[#F4FBF8]">
                        <TableCell>{row.caller}</TableCell>
                        <TableCell>{row.phoneNumber}</TableCell>
                        <TableCell>{row.dateTime}</TableCell>
                        <TableCell>{row.emergencyType}</TableCell>
                        <TableCell>{row.duration}</TableCell>
                        <TableCell >
                            <span className={`text-xs pt-[2px] pb-[2px] pl-[8px] pr-[8px] rounded-full ${row.status === 'completed' ? 'text-[#2D8076] bg-[#2D807626]' : row.status === 'in Progress' ? 'text-[#FFA51F] bg-[#FFA6212E]' : ''}`}>
                                {row.status}
                            </span>
                        </TableCell>
                        <TableCell className="inline-flex pt-[2px] pb-[2px] pl-[8px] pr-[8px] border items-center border-[#2D8076] rounded-full bg-[#2D8076] text-white text-xs"><IoShareSocialOutline /><span>Share</span></TableCell>
                    </TableRow>))}
                </TableBody>
                {/* <TableBody>
                    {rows.map((row) => (
                        <Accordion key={row.id} rows={row} isExpanded={expandedRows.includes(row.id)} toggleRow={toggleRow} />
                    ))}
                </TableBody> */}
            </Table>
        </div>

    );
}

