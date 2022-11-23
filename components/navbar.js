import {
  Avatar,
  Box,
  Button,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

function NavButton(props) {
  const { state, getCheckboxProps, getLabelProps } = useRadio(props);
  return (
    <Link href={props.href} className="flex flex-initial w-full">
      <Box
        h={70}
        w={175}
        borderRadius="10"
        className="flex w-full justify-center items-center mt-5 "
        boxShadow="lg"
        _hover={{ boxShadow: "inner" }}
        bg={state.isChecked ? "transparent" : "transparent"}
        {...getCheckboxProps()}
      >
        <Text
          color="white"
          fontSize="xl"
          className="w-100%"
          {...getLabelProps()}
        >
          {props.label}
        </Text>
      </Box>
    </Link>
  );
}

function NavPages(props) {
  const { options, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: "Dashboard",
  });
  const group = getRootProps();

  return (
    <Box {...getRootProps()}>
      {options.map((value) => {
        const href = "/" + value.value;
        return (
          <NavButton
            href={href}
            label={value.title}
            border="1px solid red"
            {...getRadioProps({ value: value.title })}
          />
        );
      })}
    </Box>
  );
}

export default function Navbar() {
  return (
    <div className="flex flex-initial">
      <Box w={175} className="flex flex-col bg-blue-500 p-2">
        <Box className="flex align-start justify-center align-start pb-10">
          <p>Logo</p>
        </Box>
        <Box className="flex flex-col">
          <NavPages
            options={[
              { value: "dashboard", title: "Dashboard" },
              { value: "regulars", title: "Regulars" },
              { value: "account", title: "Account" },
            ]}
          />
        </Box>
        <Box className="flex flex-col items-center w-full">
          <Link href="account">
            <Avatar />
          </Link>
        </Box>
      </Box>
    </div>
  );
}
