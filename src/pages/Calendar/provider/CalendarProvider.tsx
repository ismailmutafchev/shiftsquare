import { ApolloError, DocumentNode, useQuery } from "@apollo/client";
import { createContext, ReactNode } from "react";
interface QueryResult<TData> {
  data?: TData;
  error?: ApolloError | undefined;
  loading: boolean;
}

interface QueryContextValue<TData> {
  queryData: QueryResult<TData>;
  //   refetch: () => Promise<ApolloQueryResult<TData>>;
}

export const CalendarContext = createContext<
  QueryContextValue<any> | undefined
>(undefined);

export const CalendarProvider = ({
  query,
  variables,
  children,
}: {
  query: DocumentNode;
  variables: any;
  children: ReactNode;
}) => {
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
