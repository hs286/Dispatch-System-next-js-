"use client";
import TextField from "@/components/FormInputs/TextField";
import { showFieldError } from "@/utils/form";
import { Button } from "@nextui-org/react";
import { useFormik } from "formik";
import { FC, useCallback, useMemo, useState } from "react";
import {
  LoginFormInputs,
  loginFormValidation,
  loginInitialValues,
} from "./form";
import { LoginTabProps } from "./types";
import toast from "react-hot-toast";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import Link from "next/link";

const LoginTab: FC<LoginTabProps> = ({ setSelected, onClick }) => {
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<any>("");

  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

  const toggleShowForgotPassword = useCallback(() => {
    setShowForgotPassword((p) => !p);
  }, []);

  const handleEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      loginFormik.handleSubmit();
    }
  };

  const handlePasswordVisibility = () => {
    setIsPassVisible((p) => !p);
  };

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginFormValidation,
    onSubmit: () => {},
  });

  const loginFormikValues = useMemo(
    () => loginFormik.values,
    [loginFormik.values]
  );

  // if (showForgotPassword) {
  //   return (
  //     <div className="flex flex-col gap-[20px]">
  //       <TextField label="Email" type="email" onChange={(e: any) => setResetEmail(e.target.value)}/>

  //       <Button
  //         radius="sm"
  //         fullWidth
  //         className="bg-prime text-white text-[16px]"
  //         // onPress={handleResendPassword}
  //         isLoading={loading}
  //       >
  //         Send reset link
  //       </Button>

  //       <Link
  //         size="sm"
  //         className="text-[16px] flex self-center cursor-pointer"
  //         onPress={toggleShowForgotPassword}
  //       >
  //         Back to Login
  //       </Link>
  //     </div>
  //   );
  // }

  const passwordToggleEl = (
    <button
      className="focus:outline-none"
      type="button"
      onClick={handlePasswordVisibility}
    >
      {isPassVisible ? (
        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      ) : (
        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
      )}
    </button>
  );

  return (
    <div onKeyDown={handleEnter} className="flex flex-col gap-[20px]">
      <TextField
        name="email"
        label="Email"
        type="email"
        value={loginFormikValues.email}
        onChange={loginFormik.handleChange}
        onBlur={loginFormik.handleBlur}
        // isDisabled={isLoginLoading}
        isInvalid={
          !!showFieldError(loginFormik.touched.email, loginFormik.errors.email)
        }
        errorMessage={showFieldError(
          loginFormik.touched.email,
          loginFormik.errors.email
        )}
      />

      <TextField
        name="password"
        label="Password"
        type={isPassVisible ? "text" : "password"}
        value={loginFormikValues.password}
        onChange={loginFormik.handleChange}
        onBlur={loginFormik.handleBlur}
        // isDisabled={isLoginLoading}
        isInvalid={
          !!showFieldError(
            loginFormik.touched.password,
            loginFormik.errors.password
          )
        }
        errorMessage={showFieldError(
          loginFormik.touched.password,
          loginFormik.errors.password
        )}
        endContent={passwordToggleEl}
      />

      {/* <p className="text-center text-[16px]">
        Need to create an account?{" "}
        <Link
          size="sm"
          className="text-[16px] cursor-pointer"
          onPress={() => setSelected("sign-up")}
        >
          Sign up
        </Link>
      </p> */}

      <Link href={"/sign-up"} className="text-blue-600 text-center">
        Forgot password?
      </Link>
      <Button
        radius="sm"
        fullWidth
        className=" text-white text-[16px]"
        color="primary"
        // isLoading={isLoginLoading}
        onPress={() => loginFormik.handleSubmit()}
        onClick={onClick}
      >
        Login
      </Button>

      <p className="text-center">
        Dont&apos;t have an account?{" "}
        <Link href={"/sign-up"} className="text-blue-600">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default LoginTab;
