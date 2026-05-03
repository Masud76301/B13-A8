"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react"
import { toast } from "react-toastify";

const AnimalBookingForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
       toast.success("Congratulation! Booking Successful!");
    };
    return (
        <Form
            className="flex w-[40%] flex-col gap-4"
            render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
        >


            <TextField
                isRequired
                name="name"
                type="text"
            >
                <Label>Name</Label>
                <Input placeholder="Enter Your Name" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="email"
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
                name="Phone"
                type="text"
                validate={(value) => {
                    if (value.length < 11) {
                        return "Number must be at least 8 characters";
                    }
                    return null;
                }}
            >
                <Label>Phone</Label>
                <Input placeholder="Enter your Phone Number" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                minLength={8}
                name="Address"
                type="text"
            >
                <Label>Address</Label>
                <Input placeholder="Your Address" />
                <FieldError />
            </TextField>
            <div className="flex gap-2">
                <Button type="submit">
                    <Check />
                    Submit
                </Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div>
        </Form>
    );
};

export default AnimalBookingForm;