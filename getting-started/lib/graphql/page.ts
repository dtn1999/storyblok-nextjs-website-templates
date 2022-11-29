import { gql } from "graphql-request";
import { PageItem } from "./fragments/PageItem";

export const PageQuery = gql`
query getPage($by_slugs: String){
    PageItems(by_slugs: $by_slugs) {
        items {
            alternates {
                id
            },
            content {
                _editable
                _uid
                body
                component
            },
            created_at,
            default_full_slug,
            first_published_at,
            full_slug,
            group_id,
            id,
            is_startpage,
            lang,
            meta_data,
            name,
            parent_id,
            path,
            position,
            published_at,
            release_id,
            slug,
            sort_by_date,
            tag_list,
            uuid
        }
        total
    }
}
`