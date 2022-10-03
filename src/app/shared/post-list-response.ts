import { BlogPost } from "./blog-post";

export interface PostListResponse {
    content:BlogPost[],
    pageable: {
        sort: {
            empty: boolean,
            unsorted: boolean,
            sorted: boolean
        },
        offset: number,
        pageNumber: number,
        pageSize:  number,
        unpaged: number,
        paged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        unsorted: boolean,
        sorted: boolean
    },
    first: boolean,
    numberOfElements: number,
    empty: boolean
}

