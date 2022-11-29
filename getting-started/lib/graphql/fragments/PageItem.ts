import { gql } from "graphql-request";

export const PageItem = gql`
fragment PageItem on PageItem {
    alternates: [Alternate],
    content: PageComponent,
    created_at: String,
    default_full_slug: String,
    first_published_at: String,
    full_slug: String,
    group_id: Int,
    id: Int,
    is_startpage: Boolean,
    lang: String,
    meta_data: JsonScalar,
    name: String,
    parent_id: Int,
    path: String,
    position: Int,
    published_at: String,
    release_id: Int,
    slug: String,
    sort_by_date: String,
    tag_list: [String],
    translated_slugs: [TranslatedSlug],
    uuid: String,
}
`