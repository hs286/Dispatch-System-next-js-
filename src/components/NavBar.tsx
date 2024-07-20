import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar className="bg-[#2D8076] text-[white]">
      <NavbarBrand className="">
        <p className="font-bold bg-[#e7e8e2] px-4 py-1 rounded-lg text-inherit">
          <Link className="text-[#2a3644]" href={"/"}>
            {" "}
            Logo{" "}
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent
        className="text=[#e7e8e2] hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarItem className="text=[#e7e8e2]">
          <Link color="foreground" href="#" className="">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/call-history" aria-current="page">
            History
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="white" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/login">
            <Button
              type="button"
              elementType={"button"}
              className="text=[#e7e8e2]"
              variant="flat"
            >
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
