import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { getEmployees } from '../queries/user/queries.ts'
import Avatar from '../components/Avatar.tsx'
import Modal from '../components/Modal.tsx'
import { useForm } from 'react-hook-form'
import { addUserOne, deleteUserById } from '../queries/user/mutations.ts'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function Employees() {
  const [showModal, setShowModal] = useState(false)
  const [deleteUser] = useMutation(deleteUserById)


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
          className="ml-6 rounded-md bg-gradient-to-br from-polar-800 to-polar-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
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
                    <p className="truncate text-sm font-medium text-gray-300">{person.email}</p>
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
                <div className="flex w-0 flex-1 overflow-clip truncate ">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />{person.email}
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
                <div className="-ml-px flex w-0 flex-1">
                  <button
                    onClick={() => deleteUser({ variables: { id: person.id }, refetchQueries: [{ query: getEmployees }] })}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <TrashIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                    Remove
                  </button>
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
  const { register, handleSubmit } = useForm();

  const [addUser] = useMutation(addUserOne)

  function submit(data: any) {
    addUser({ variables: { object: data }, refetchQueries: [{ query: getEmployees }] })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  First name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    {...register("first_name", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Last name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    {...register("last_name", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                  Email address
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    {...register("email", { required: true })}
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
          className="inline-flex justify-center rounded-md bg-gradient-to-br from-polar-800 to-polar-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-polar-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-polar-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
