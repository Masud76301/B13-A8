'use client';

import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@heroui/react';
import Link from 'next/link';
import { GiGoat } from 'react-icons/gi';


const NavBar = () => {

    const { data: session, error } = authClient.useSession();
    const user = session?.user;
    const handleSingOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className='bg-white shadow h-auto md:h-16 p-3 '>
            <div className=' container mx-auto flex flex-col md:flex-row gap-2 md:justify-between items-center '>
                {/* Logo */}
                <div className=''>
                    <h1 className='flex text-xl md:text-2xl font-bold text-green-600  gap-2 items-center justify-center '><GiGoat className='text-3xl hidden md:block'></GiGoat> <span >QuarbaniHat</span> </h1>
                </div>

                {/* Link */}
                <div className='md:block'>
                    <ul className='space-x-2'>
                        <Link href="/"><Button size="sm" variant='outline' className='hover:bg-amber-50 rounded-md'>Home</Button></Link>
                        <Link href="/all-animal"><Button size="sm" variant="outline" className='hover:bg-amber-50 rounded-md'>All Animals</Button></Link>
                        <Link href="/profile"><Button size="sm" variant="outline" className='hover:bg-amber-50 rounded-md'>Profile</Button></Link>
                    </ul>
                </div>

                {/* login/register */}

                <div className='space-x-2'>
                    {user ?

                        (
                            <div className='flex gap-2 items-center'>
                                <Link href="/profile">
                                    <Avatar size="sm">
                                        <AvatarImage src={user.image} referrerPolicy='no-referrer' />
                                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </Link>

                                <Button onClick={handleSingOut} size="sm" variant='outline' className='hover:bg-red-500 hover:text-white rounded-md'>Logout</Button>
                            </div>
                        ) : (

                            <div className='flex gap-2'>
                                <Link href="/login"><Button size="sm" variant='outline' className='hover:bg-amber-50 rounded-md'>Login</Button></Link>
                                <Link href="/register"><Button size="sm" variant='primary' className='bg-green-600 rounded-md'>Register</Button></Link>
                            </div>

                        )}

                </div>
            </div>


        </div>
    );
};

export default NavBar;