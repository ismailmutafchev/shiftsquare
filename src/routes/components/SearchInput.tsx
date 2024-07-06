import { useState } from "react";
import { useSession } from "../../hooks/session";
import Fuse from "fuse.js";
import { MagnifyingGlassIcon, Square3Stack3DIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const SearchOptions = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    matchAllTokens: true,
    includeScore: true,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ["name", "firstName", "lastName", "email"],
  };

export default function SearchInput({ data }: { data: any }) {
    const [searchStr, setSearchStr] = useState("");
    const [searchRes, setSearchRes] = useState<any>([]);
  
    const { positions, employees } = useSession();
  
    const list = positions.concat(employees);
  
    const fuse = new Fuse(list, SearchOptions);
  
    const clearSearch = () => {
      setSearchStr("");
      setSearchRes([]);
    };
  
    const handleChange = (e: any) => {
      setSearchStr(e.target.value);
      setSearchRes(e.target.value ? fuse.search(searchStr) : []);
    };
  
    return (
      <div className="flex-grow flex-shrink-0 flex items-center">
        <div className="flex-1 min-w-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full h-full pl-10 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:placeholder-gray-400 sm:text-sm"
              placeholder="Search"
              type="search"
              value={searchStr}
              onAbort={clearSearch}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <ul>
            {searchRes.map((res: any) => {
              const type = res.item.__typename;
              return (
                <li
                  key={res.item.id}
                  className="flex items-center hover:bg-gray-100 px-4 rounded-lg hover:text-white"
                >
                  {type === "position" ? (
                    <div className="rounded-md w-6 h-6 flex justify-center items-center bg-purple-heart-400">
                      <Square3Stack3DIcon
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <div className="rounded-md w-6 h-6 flex justify-center items-center bg-steel-blue-400">
                      <UsersIcon
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <Link
                    to={
                      type === "position"
                        ? `/positions/${res.item.id}`
                        : `/employees/${res.item.id}`
                    }
                    className="block px-4 py-2 text-sm text-gray-700 w-full"
                    onClick={data.close}
                  >
                    <p className="font-semibold">
                      {res.item.name ||
                        res.item.firstName + " " + res.item.lastName}
                    </p>
                    <p className="text-gray-400">
                      {type === "user" && res.item.email}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }