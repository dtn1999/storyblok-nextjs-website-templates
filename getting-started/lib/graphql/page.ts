import { gql } from "graphql-request";

export const PageQuery = gql`
query getPage($by_slugs: String!){
    PageItems(by_slugs: $by_slugs) {
        items {
            id
        }
        total
    }
}
`