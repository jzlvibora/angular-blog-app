export interface Comment {
    id:number,
    text:string,
    postIdentity:number,
    createdAt:Date,
    user:{
        username:string
    }
}
