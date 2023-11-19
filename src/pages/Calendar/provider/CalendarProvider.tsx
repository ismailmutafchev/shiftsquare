import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";

interface QueryResult<TData> {
  data?: TData;
  error?: any;
  loading: boolean;
}

interface QueryContextValue<TData> {
  queryData: QueryResult<TData>;
//   refetch: () => Promise<ApolloQueryResult<TData>>;
}

const CalendarContext = createContext<QueryContextValue<any> | undefined>(
  undefined
);

export const CalendarProvider = ({ query,variables,  children }: any) => {
 

  const {
    loading,
    data,
    error: dataError
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

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context.queryData
};
