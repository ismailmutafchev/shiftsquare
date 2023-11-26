import { useForm } from "react-hook-form";
import { useSession } from "../../providers/SessionProvider/Session";
import { useMutation, useQuery } from "@apollo/client";
import { updateUserById } from "../../queries/user/mutations";
import { getOrganizationByName } from "../../queries/organization/quieries";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getProfile } from "../../queries/user/queries";

export default function Onboarding() {
    const { profile } = useSession();

    const user = profile?.data?.user[0];
    const [updateUser] = useMutation(updateUserById, {
        refetchQueries: [{
            query: getProfile,
            variables: { authId: user?.authId }
        }]
    })

    const { register, handleSubmit, watch } = useForm()
    const organization = watch('organization')

    const { data: organizationData } = useQuery(getOrganizationByName, { variables: { name: organization } })
    function submit(data: any) {
        updateUser({
            variables: {
                id: user?.id, object: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    organization_id: organizationData?.organization[0]?.id,
                    onboarded: true
                }
            }
        })
    }

    return (
        <div className="mx-52 pt-52 h-screen ">
            <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-12 sm:space-y-16">
                    <div>
                        <div className="mt-10 space-y-8 pb-8 sm:space-y-0 sm:divide-y sm:pb-0">

                            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                                <label htmlFor="firstName" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                    What is your first name?
                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                                    <input
                                        type='text'
                                        // style={inputStyles}
                                        className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-polar-300 sm:text-sm `}
                                        {...register("firstName", { required: true })}
                                    />{
                                    }
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                                <label htmlFor="lastName" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                    What is your last name?
                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                                    <input
                                        type='text'
                                        step={300}
                                        className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
                                        {...register("lastName", { required: true })}
                                    />{
                                        // formErrors.start && <span className="text-red-500 absolute top-11 left-5 bg-red-200/50 py-0.5 px-1 rounded-b-md text-xs">{formErrors.start.message}</span>
                                    }
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                                <label htmlFor="organization" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                    What is the name of your organization?
                                    <span onClick={() => {
                                        console.log('clicked')
                                    }} className="text-blue-500 underline cursor-pointer">I don't have comapny name </span>
                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                                    <input
                                        type='text'
                                        step={300}
                                        className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}

                                        {...register("organization", { required: true })}
                                    />
                                    {
                                        organizationData && organizationData.organization && organizationData.organization.length > 0 ?
                                            <span>
                                                <CheckBadgeIcon className="h-6 w-6 absolute right-2 top-2 text-green-500" aria-hidden="true" />
                                            </span>
                                            : <span>
                                                <XMarkIcon className="h-6 w-6 absolute right-2 top-2 text-red-500" aria-hidden="true" />
                                            </span>
                                    }


                                </div>
                            </div>
                            <div className="sm:grid sm:grid-rows-2 sm:items-start sm:py-2">
                                <label htmlFor="organization" className="row-span-1 block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                    Woulkd you like to register new company ?
                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0 relative">
                                    <input
                                        type='checkbox'
                                        step={300}
                                        className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}

                                        {...register("admin", { required: true })}
                                    />
                                    {
                                        organizationData && organizationData.organization && organizationData.organization.length > 0 ?
                                            <span>
                                                <CheckBadgeIcon className="h-6 w-6 absolute right-2 top-2 text-green-500" aria-hidden="true" />
                                            </span>
                                            : <span>
                                                <XMarkIcon className="h-6 w-6 absolute right-2 top-2 text-red-500" aria-hidden="true" />
                                            </span>
                                    }


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-polar-800/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 hover:text-polar-800/90 hover:ring-1 ring-polar-800/90  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-800/90"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}