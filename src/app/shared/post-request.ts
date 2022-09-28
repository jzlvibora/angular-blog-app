export interface PostRequest {
    id?:number,
    title?:string,
    body:string,
    image:string,
    // createdAt:string,
    likes:number,
    tag:{
        id:number
    }
}
