import { GraphQLClient } from 'graphql-request';
export function request(query) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer e151135814af2c3c06c6182cfc6a45`,
    },
  });
  const finalQuery = `query MyQuery{${query}}`;
  return client.request(finalQuery);
}
