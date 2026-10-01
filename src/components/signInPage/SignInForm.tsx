"use client";
import { signIn } from "@/lib/auth-client";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";






const SignInForm = () => {

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { email, password }: { email: string, password: string } = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        };

        const { data, error } = await signIn.email({
            email: email,
            password: password
        })
        console.log(data);
        console.log(error);
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input required type="email" className="input" placeholder="Email" name="email" />

                <label className="label">Password</label>
                <input required type="password" className="input" placeholder="Password" name="password" />

                <button type="submit" className="btn btn-neutral mt-4">Login</button>
            </form>
        </>
    );
};

export default SignInForm;



//  <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

//                 <TextField
//                     isRequired
//                     name="email"
//                     type="email"
//                     validate={(value) => {
//                         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                             return "Please enter a valid email address";
//                         }
//                         return null;
//                     }}
//                 >
//                     <Label>Email</Label>
//                     <Input placeholder="john@example.com" />
//                     <FieldError />
//                 </TextField>
//                 <TextField
//                     isRequired
//                     minLength={8}
//                     name="password"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length < 8) {
//                             return "Password must be at least 8 characters";
//                         }
//                         if (!/[A-Z]/.test(value)) {
//                             return "Password must contain at least one uppercase letter";
//                         }
//                         if (!/[0-9]/.test(value)) {
//                             return "Password must contain at least one number";
//                         }
//                         return null;
//                     }}
//                 >
//                     <Label>Password</Label>
//                     <Input placeholder="Enter your password" />
//                     <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
//                     <FieldError />
//                 </TextField>
//                 <div className="flex gap-2">
//                     <Button type="submit">
//                         {/* <Check /> */}
//                         Submit
//                     </Button>
//                     <Button type="reset" variant="secondary">
//                         Reset
//                     </Button>
//                 </div>
//             </Form>
