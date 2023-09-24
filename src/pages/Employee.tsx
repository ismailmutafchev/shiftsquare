import { useParams } from 'react-router-dom';
import { getEmployee } from '../queries/user/queries';
import { useQuery } from '@apollo/client';
import Avatar from '../components/Avatar';
import { LoadingAnimation } from '../assets/AnimationComponents/AnimationComponents';
import { AtSymbolIcon, BanknotesIcon, DocumentCheckIcon, UserCircleIcon, UserGroupIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

export default function Employee() {
    const { id } = useParams();

    const { data, loading } = useQuery(getEmployee, {
        variables: { id: id }
    })

    const user = data && data.user_by_pk

    const { bgColor, contractedHours, email, firstName, lastName, role, startDate } = user || {}


    if (loading) return <LoadingAnimation />
    return (
        <div className="overflow-hidden rounded-xl sm:rounded-lgw-full z-0 h-[80vh]">
            <div className="flex relative h-36 max-h-36 min-h-10 justify-around mb-28">
                <div style={{
                    background: bgColor
                }} className={`h-[30rem] w-full -rotate-[7deg] -top-64 lg:left-[18rem] fixed rounded-3xl opacity-80`} />
                <div className='flex flex-col justify-center text-start justify-self-start'>
                    <h3 className="text-lg font-bold leading-6 text-white z-10">{user?.firstName + ' ' + user?.lastName}</h3>
                    <p className="mt-1 max-w-2xl text-white text-sm leading-5 z-10">{user?.email}</p>
                </div>
                <div />
                <Avatar
                    size={16}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    className={`${user?.bgColor}`}
                    border={true}
                />
            </div>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:px-[10%] gap-8 w-[70vw]'>
                    <div className='flex justify-start  space-x-10'>
                        <div className='flex items-center justify-center rounded-full p-5 shadow-lg '>
                            <UserCircleIcon className="h-10 w-10 text-green-300" aria-hidden="true" />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <p className='text-sm text-gray-500'>
                                First Name
                            </p>
                            <p className='text-lg font-semibold'>
                                {firstName}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start  space-x-10'>
                        <div className='flex items-center justify-center rounded-full p-5 shadow-lg '>
                            <UserCircleIcon className="h-10 w-10 text-jagged-ice-300" aria-hidden="true" />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <p className='text-sm text-gray-500'>
                                Last Name
                            </p>
                            <p className='text-lg font-semibold'>
                                {lastName}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start  space-x-10'>
                        <div className='flex items-center justify-center rounded-full p-5 shadow-lg '>
                            <AtSymbolIcon className="h-10 w-10 text-blue-300" aria-hidden="true" />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <p className='text-sm text-gray-500'>
                                Email
                            </p>
                            <p className='text-lg font-semibold'>
                                {email}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start  space-x-10'>
                        <div className='flex items-center justify-center rounded-full p-5 shadow-lg '>
                            <DocumentCheckIcon className="h-10 w-10 text-orange-300" aria-hidden="true" />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <p className='text-sm text-gray-500'>
                                Contracted Hours
                            </p>
                            <p className='text-lg font-semibold'>
                                {contractedHours}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start  space-x-10'>
                        <div className='flex items-center justify-center rounded-full p-5 shadow-lg '>
                            <UserPlusIcon className="h-10 w-10 text-fuchsia-300" aria-hidden="true" />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <p className='text-sm text-gray-500'>
                                Start Date
                            </p>
                            <p className='text-lg font-semibold'>
                                {format(new Date(startDate), 'dd MMMM yyyy')}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start  space-x-10'>
                        <div className='flex items-center justify-center rounded-full p-5 shadow-lg '>
                            <UserGroupIcon className="h-10 w-10 text-green-500" aria-hidden="true" />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <p className='text-sm text-gray-500'>
                                Role
                            </p>
                            <p className='text-lg font-semibold'>
                                {role.name.toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
