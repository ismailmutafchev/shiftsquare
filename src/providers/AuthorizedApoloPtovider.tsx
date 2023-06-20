import { ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache, RequestHandler } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from 'apollo-link-context';



const AuthorizedApolloProvider = ({ children }: { children: any }) => {
    const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        const httpLink: ApolloLink | RequestHandler = createHttpLink({
            uri: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT, // your URI here...
        });

        const authLink = setContext(async () => {
            if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                console.log(token, 'xxew')
                return {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
            } else {
                return {}
            }
        });

        const apolloClient = new ApolloClient({
            //@ts-ignore
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
            connectToDevTools: true
        });
        return (
            <ApolloProvider client={apolloClient}>
                {children}
            </ApolloProvider>
        );
    }

};

export default AuthorizedApolloProvider;