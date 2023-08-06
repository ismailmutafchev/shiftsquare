import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useSession } from "../providers/Session";

export default function Onboarding() {
    const { profile } = useSession();

    const name = profile?.data?.user[0]?.first_name;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <UserCircleIcon className="w-24 h-24 text-gray-400" />
                    <h1 className="mt-4 text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="mt-2 text-sm text-gray-500">Welcome to ShiftSquare</p>
                </div>
                <form className="flex flex-col items-center justify-center mt-8">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="first_name"
                            name="first_name"
                            id="first_name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="John"
                        />
                    </div>
                    <label htmlFor="email" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="last_name"
                            name="last_name"
                            id="last_name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Doe"
                        />
                    </div>
                    <label htmlFor="organization" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                        Organization
                    </label>
                    <div className="mt-2">
                        <input
                            type="organization"
                            name="organization"
                            id="organization"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="ShiftSquare"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}