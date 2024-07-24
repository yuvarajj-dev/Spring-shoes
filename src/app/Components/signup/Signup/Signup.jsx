"use client"
import React, { useState } from 'react'
import { usersignup } from '@/app/Api/Api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const route = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "username":
                setUsername(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            case "confirm_password":
                setConfirmpassword(value)
                break;
            default:
                break;
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert("Password do not match");
            return;
        }
        try {
            const data = { username, email, password };
            const response = await usersignup(data);
            console.log("sign up successfull", response);
            route.push("/");
        } catch (error) {
            console.error("sign failed ", error);
        }
    };
    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="block border border-gray-400 bg-blue-300 w-full p-3 rounded mb-4 "
                                name="username"
                                value={username}
                                onChange={handleChange}
                                placeholder="Username"
                                required
                            />

                            <input
                                type="email"
                                className="block border border-gray-400  bg-blue-300 w-full p-3 rounded mb-4"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />

                            <input
                                type="password"
                                className="block border border-gray-400 bg-blue-300 w-full p-3 rounded mb-4"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                            />

                            <input
                                type="password"
                                className="block border border-gray-400 bg-blue-300 w-full p-3 rounded mb-4"
                                name="confirm_password"
                                value={confirmpassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                            >
                                Create Account
                            </button>
                        </form>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the{' '}
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?{' '}
                        <Link href={"/"} className="no-underline border-b border-blue text-blue">
                        Log in
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;

