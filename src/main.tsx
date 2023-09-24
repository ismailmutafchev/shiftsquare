import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import AuthorizedApolloProvider from './providers/AuthorizedApoloPtovider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  // <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}

      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI as string,
        audience: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT as string,
      }}
    >
      <AuthorizedApolloProvider>
          <App />
      </AuthorizedApolloProvider>
    </Auth0Provider>
  // </React.StrictMode >
)
