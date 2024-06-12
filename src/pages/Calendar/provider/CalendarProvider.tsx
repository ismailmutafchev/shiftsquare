import { useQuery } from "@apollo/client";
import { createContext } from "react";

interface QueryResult<TData> {
  data?: TData;
  error?: any;
  loading: boolean;
}

interface QueryContextValue<TData> {
  queryData: QueryResult<TData>;
  //   refetch: () => Promise<ApolloQueryResult<TData>>;
}

export const CalendarContext = createContext<
  QueryContextValue<any> | undefined
>(undefined);

export const CalendarProvider = ({ query, variables, children }: any) => {
  const {
    loading,
    data,
    error: dataError,
  } = useQuery(query, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const value = {
    queryData: { data, loading, dataError },
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
