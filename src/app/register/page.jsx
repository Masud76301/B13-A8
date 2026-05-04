
"use client";
import GoogleLogin from "@/components/GoogleLogin";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()

    const handleRegisterFun = async (data) => {
        const { name, email, photo, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success('Registration Complete')
        }
    }
    return (
        <div className=" w-[90vw] md:w-auto mx-auto border shadow-md p-10 my-10">

            <h1 className="text-center text-green-600 font-semibold text-xl">QurbaniHat</h1>
            <h1 className="text-2xl font-bold text-center mt-4">Create account</h1>
            <p className="mb-6 text-[14px] text-center">Join thousands of families for Qurbani </p>

            <Form className="flex w-auto md:w-80 lg:w-96  flex-col gap-4 m-auto" onSubmit={handleSubmit(handleRegisterFun)}>

                <TextField
                    isRequired

                    {...register("name")}
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your Name" />
                    <FieldError />
                </TextField>


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
                    {...register("photo")}
                    type="text"
                >
                    <Label>Photo</Label>
                    <Input placeholder="Give your photo url" />
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
                        Register
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <p className="text-center mt-5">-or-</p>
            <p className="text-center">Already have an account? <Link className="text-green-600 font-semibold" href="/login">Login</Link></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default RegisterPage;