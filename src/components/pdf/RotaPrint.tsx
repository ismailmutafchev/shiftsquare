import { format } from "date-fns";
import { useSession } from "../../providers/Session";
// import Logo from "../Logo";

export const RotaPrint = () => {
  const { positions, profile } = useSession();

  return (
    <div className="hidde">
      <div className="w-[2480px] h-[3428px] p-10 rota-print">
        <div className="text-start p-2 flex justify-between">
          {/* <Logo dark size={50} /> */}
          <div>
            <p>
              <span className="font-bold">Printed on:</span>{" "}
              {format(new Date(), "dd MMM yyyy HH:mm")}
            </p>
            <p>
              <span className="font-bold">Printed by:</span>{" "}
              {profile?.firstName}{" "}
            </p>
          </div>
        </div>
        <div className="relative flex border border-black flex-col justify-start overflow-hidden bg-gray-50 py-6 sm:py-12   p-10">
          <div className="w-full h-full ">
            <div className="flow-root ">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pl-0"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-md font-semibold text-gray-900"
                        >
                          Monday
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-center text-md font-semibold text-gray-900"
                        >
                          Tuesday
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Wednesday
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Thursday
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Friday
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Saturday
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-4 text-center text-md font-semibold text-gray-900 sm:pr-0"
                        >
                          Sunday
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {positions?.map((position: any) => (
                        <tr className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-md font-semibold text-gray-900 sm:pl-0">
                            {position.name}
                          </td>
                          <td className="whitespace-nowrap p-4 text-md text-gray-500">
                            Ismail Ahmed <br /> 9:00 - 17:00
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            {position.tuesday}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                            {position.wednesday}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                            {position.thursday}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                            {position.friday}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                            {position.saturday}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                            {position.sunday}
                          </td>
                        </tr>
                      ))}

                      {/* <tr className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        John
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        Doe
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        jondoe@email.com
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        employee
                      </td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
