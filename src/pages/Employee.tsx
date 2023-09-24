import { useParams } from 'react-router-dom';
import { getEmployee } from '../queries/user/queries';
import { useQuery } from '@apollo/client';
import Avatar from '../components/Avatar';

export default function Employee() {
    const { id } = useParams();

    const { data } = useQuery(getEmployee, {
        variables: { id: id }
    })

    const user = data && data.user_by_pk

    const bgColor = user?.bgColor || '#7fdee1'
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg relative w-full">
            <div style={{
                background: bgColor
            }} className={`h-[100%] w-full rotate-[160deg] -top-80 absolute rounded-3xl opacity-80`}></div>
            <div className="flex space-x-4 border z-20">
                <div className='flex flex-col justify-center text-start'>
                    <h3 className="text-lg font-bold leading-6 text-white">{user?.firstName + ' ' + user?.lastName}</h3>
                    <p className="mt-1 max-w-2xl font-semibold text-white text-sm leading-5">{user?.email}</p>
                </div>
                <Avatar
                    size={16}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    className={user?.bgColor}
                />

            </div>
            <div className="border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.firstName + ' ' + user?.lastName}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Positions</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">TODO</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Email address</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-900">Availability</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            TODO
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium leading-6 text-gray-900">History</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        </dd>
                    </div>
                </dl>
            </div>
        </div >
    )
}
