'use client'
import React from "react";
import { Accordion, AccordionItem, Avatar, Card, CardHeader, Input, Divider, Image } from "@nextui-org/react";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function App() {

    return (
        <>
            <Accordion selectionMode="multiple">
                <AccordionItem
                    key="1"
                    aria-label=""
                    title=""
                >
                    <Card className=" bg-transparent shadow-none ">
                        <div className=" flex items-center flex-wrap
                        ">
                            <Input
                                isReadOnly
                                type="text"
                                label="Caller’s Name"
                                variant="bordered"
                                defaultValue="Anas Abrar"
                                className="inline-flex w-1/5 shadow-none border-0"
                            />
                            <CardHeader className="inline-flex w-1/5">

                                <IoCallOutline size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />
                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Phone Number"
                                        variant="bordered"
                                        defaultValue="(406) 555-0120"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">

                                <CiCalendarDate size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Age"
                                        variant="bordered"
                                        defaultValue="20"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">
                                <Image
                                    alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={40}
                                />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Dispatcher’s Name"
                                        variant="bordered"
                                        defaultValue="Jacob Jones"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">
                                <Image
                                    alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={40}
                                />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Emergency personnel Involved"
                                        variant="bordered"
                                        defaultValue="Jenny Wilson"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">

                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Time taken to complete"
                                        variant="bordered"
                                        defaultValue="20 minutes"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">

                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Call Start Time"
                                        variant="bordered"
                                        defaultValue="20 minutes"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">

                                <BsClockHistory size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Call End Time"
                                        variant="bordered"
                                        defaultValue="20 minutes"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/5">

                                <CiLocationOn size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="block">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Address"
                                        variant="bordered"
                                        defaultValue="6391 Elgin St. Celina, Delaware 10299"
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/2">
                                <PiTelevisionLight size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Outcome & Resolution"
                                        variant=""
                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        className=""
                                    />
                                </div>
                            </CardHeader>
                            <CardHeader className="inline-flex w-1/2">

                                <MdOutlineStickyNote2 size={40} color="#2D8076" className="border rounded-full bg-[#2D807626] p-2 " />

                                <div className="bg-transparent shadow-none">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Address"
                                        variant="Dispatcher’s Notes"
                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        className="shadow-none bg-transparent"
                                    />
                                </div>
                            </CardHeader>
                            <Divider />
                            <Input
                                isReadOnly
                                type="text"
                                label="Caller Description"
                                variant="bordered"
                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                                className=" w-full flex-wrap"
                            />

                        </div>


                    </Card>
                </AccordionItem>

            </Accordion>



        </>
    );
}
