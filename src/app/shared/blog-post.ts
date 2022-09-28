export interface BlogPost {
    id:number,
    title:string,
    author:string,
    body:string,
    image:string,
    createdAt:string,
    likes:number,
    tag:{
        id:number,
        tagName:string,
        description:string
    }
}

