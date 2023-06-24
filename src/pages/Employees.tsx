import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { getEmployees } from '../queries/user/queries.ts'
import Avatar from '../components/Avatar.tsx'
import Modal from '../components/Modal.tsx'
import { useForm } from 'react-hook-form'

export default function Employees() {
  const [showModal, setShowModal] = useState(false)


  const { loading, error, data } = useQuery(getEmployees)


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  const users = data?.user
  return (
    <>
      <div className="hidden md:ml-4 md:flex md:items-center">
        <div className="ml-6 h-6 w-px bg-gray-300" />
        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="ml-6 rounded-md bg-gradient-to-br from-polar-800 to-polar-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
        >
          Add Shift
        </button>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((person: any) => (
          <li key={person.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <div className='flex flex-col items-start'>
                    <h3 className="truncate text-sm font-medium text-gray-900">{person.first_name}{' '}{person.last_name}</h3>
                    <p className="truncate text-sm font-medium text-gray-300">{person.first_name}{' '}{person.email}</p>
                  </div>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person.role.length ? person.role[0].role?.name.toUpperCase() : 'No Role'}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
              </div>
              <Avatar size={10} firstName={person.first_name} lastName={person.last_name} />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />indigo-600
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>{
        showModal &&
        <Modal open={showModal} setOpen={() => setShowModal(false)} title="Add User" children={AddUser} />
      }
    </>
  )
}

function AddUser() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  function submit(data: any) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Username
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-polar-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    {...register("username", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  First name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Last name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Email address
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Country
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Street address
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xl sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  City
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  State / Province
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  ZIP / Postal code
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-polar-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-gradient-to-br from-polar-800 to-polar-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
