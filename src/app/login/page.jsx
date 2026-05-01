"use client";
import GoogleLogin from "@/components/GoogleLogin";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaCow } from "react-icons/fa6";
import { GiGoat } from "react-icons/gi";
import { toast } from "react-toastify";

const LoginPage = () => {
    const { register, handleSubmit } = useForm()

    const handleLoginFun = async (data) => {
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        if(error){
            toast.error(error.message);
        }
        if(res){
            toast.success("Login Successful!");
        }
    }
    return (
        <div className=" m-auto border rounded-sm shadow-md py-6 px-10 ">
            <GiGoat className="flex justify-center w-10 mx-auto text-4xl text-green-600"/>
            <h1 className="text-center text-green-600 font-bold text-3xl">QuarbaniHat</h1>
            <p className="text-center mt-1">Login to your account</p>
            <Form className="flex w-96 flex-col gap-4 m-auto mt-10" onSubmit={handleSubmit(handleLoginFun)}>
                <TextField
                    isRequired
                    {...register("email")}
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    {...register("password")}
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Login
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <h1 className="text-center my-3"> - or continue with - </h1>
             <GoogleLogin></GoogleLogin>
            <p className="text-center">Don't have an account? <Link href="/register" className="text-green-600 font-semibold">Register here</Link></p>
            
            
           
        </div>
    );
};

export default LoginPage;