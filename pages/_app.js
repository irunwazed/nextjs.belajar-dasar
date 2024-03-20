// import { ApolloClient, ApolloProvider } from "@apollo/client"; 

// import client from "@/src/graphql/apollo-client";
// export default function App({Component, pageProps}){
//     return(
//         <ApolloProvider client={client}>
//             <Component {...pageProps} />
//         </ApolloProvider>
//     )
// }

import { ApolloProvider } from '@apollo/client'

import client from "@/src/graphql/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}