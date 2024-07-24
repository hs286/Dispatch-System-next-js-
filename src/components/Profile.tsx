"use client";
import React, { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Textarea } from "@nextui-org/react";
import Image from 'next/image';
import { FaCameraRetro } from 'react-icons/fa';

const FormComponent = () => {

    return (
        <div className='px-16 min-h-[94vh]'>
            <p className='text-2xl py-8' >My Profile</p>
            <div className='bg-white rounded-3xl pb-8'>
                <div className='bg-gradient-to-r from-[#B6D3F1] to-[#FCF7E1] py-10 max-sm:py-10 rounded-tr-3xl rounded-tl-3xl'>
                </div>
                <div className='px-20 py-6 max-sm:px-1 max-sm:py-2 flex items-center justify-center flex-col gap-6'>
                    <Image
                        width={100}
                        height={100}
                        src="/police.png"
                        alt="NextUI hero Image"
                        className='rounded-[50%]'
                    />
                    <div className='text-[#2D8076] flex gap-2'>
                        <FaCameraRetro size={24} color='#2D8076' />
                        <b>Change profile picture</b>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%]'>
                        <Input
                            key={'name'}
                            type="text"
                            label="Full Name"
                            labelPlacement={'outside'}
                            description={''}
                            classNames={{inputWrapper: 'bg-[#F6F7F9]'}}
                            size='md'
                        />
                        <Input
                            key={'Email Address'}
                            type="email"
                            label="Email Address"
                            labelPlacement={'outside'}
                            description={''}
                            classNames={{inputWrapper: 'bg-[#F6F7F9]'}}
                            size='md'
                        />
                        <Dropdown backdrop="blur" size='lg'>
                            <DropdownTrigger>
                                <Button
                                    className='bg-[#F6F7F9] border-none place-content-start justify-start text-[#6C6C6C]'
                                    variant="bordered"
                                >
                                    Organization
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Static Actions">
                                <DropdownItem key="new">Police</DropdownItem>
                                <DropdownItem key="copy">Ambulane</DropdownItem>
                                <DropdownItem key="edit">Fire Fighter</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown backdrop="blur" size='lg'>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className='bg-[#F6F7F9] border-none place-content-start justify-start text-[#6C6C6C]'

                                >
                                    Role
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Static Actions">
                                <DropdownItem key="new">Dispatcher</DropdownItem>
                                <DropdownItem key="copy">Caller</DropdownItem>
                                <DropdownItem key="edit">Customer</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <Button type="submit" size='md' className='bg-[#2D8076] hover:bg-[#1d8074] text-white'  fullWidth={false}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default FormComponent