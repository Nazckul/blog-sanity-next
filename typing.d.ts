export interface Post{
    _id:string;
    publishedAt:string;
    title:string;
    author: {
        name:string;
        image:string;
    };
     comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    body:[object];
}