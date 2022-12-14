import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { BlogPost } from 'src/app/shared/blog-post';

			
const expectedBlogPosts: BlogPost[] = 
[
  {
   title: "compress optical interface",
   author: "Wyatt",
   createdAt: "2056-06-23T21:27:48.113Z",
   image: "http://loremflickr.com/640/480",
   body: "Ut aspernatur aut omnis error quaerat nobis dicta quaerat est. Maxime et vero ut voluptatem et et non at in. Aut laborum et quia possimus.\nRepellendus corrupti rerum velit eveniet distinctio. Quia amet expedita rerum delectus. Architecto repudiandae praesentium quis assumenda vero tempora a.\nRepellendus sit soluta consequuntur laborum quia in omnis impedit laborum. Id distinctio esse ipsam voluptatem quasi nam. Et ut cum. Est quae aut aperiam ullam ut et tempore.",
   id: 9
  },
  {
   title: "copy online pixel",
   author: "Martina",
   createdAt: "2043-09-20T10:01:50.897Z",
   image: "http://loremflickr.com/640/480",
   body: "Odit id veritatis dolor veritatis soluta et. Aut eos atque nihil. Vel nesciunt assumenda. Recusandae eum sapiente aut illo sit non omnis.\nQui sunt est modi hic vel autem sed animi vero. Est quisquam et nihil voluptatem consequatur est. Commodi hic quibusdam et culpa repudiandae quos voluptate facilis. Assumenda quia nisi nam fuga et nisi sed nam. Eligendi similique non. Eum fugiat deleniti ducimus perspiciatis eos ducimus ut placeat.\nVelit voluptatem est id aut quia culpa nisi dolor libero. Dolore est doloribus et vel ut ut. Nam aliquam autem harum. Voluptas qui nihil sed reiciendis dolorum iste voluptatem. Sequi et quas fugit impedit ut odit vel aperiam modi.",
   id: 10
  },
  {
   title: "reboot primary firewall",
   author: "Tanner",
   createdAt: "2050-04-06T03:47:08.425Z",
   image: "http://loremflickr.com/640/480",
   body: "Atque aliquam quis natus ea voluptatum. Ducimus dolores voluptas et voluptatem. Consequuntur iusto minima qui tempora saepe quia. Enim temporibus ea. Quisquam adipisci impedit nulla atque. Non rerum earum ea odio ut qui modi.\nSoluta iusto possimus qui deserunt nostrum. Quasi quaerat porro ea harum sed non. Ut a commodi asperiores perferendis. Placeat nostrum sit. Ut eaque et nulla aut dolore.\nNumquam velit aut est. Quis sed et quia sed neque et atque. Consequatur doloribus quia aut aliquam. Provident fugit similique tenetur placeat voluptas voluptatem neque assumenda.",
   id: 11
  },
  {
   title: "navigate wireless driver",
   author: "Jaquan",
   createdAt: "2030-10-01T03:01:10.954Z",
   image: "http://loremflickr.com/640/480",
   body: "Voluptas iusto qui similique. Eveniet libero veniam. Doloribus accusantium laborum suscipit eius enim aut neque occaecati.\nHic rerum suscipit provident consequatur eum. Dolor necessitatibus sapiente quis quas aut dolore sequi perspiciatis aut. Culpa ut debitis sed debitis praesentium dolorem facere.\nReiciendis vel sint commodi. Consequatur tenetur molestiae et dolore voluptas voluptatem occaecati ea occaecati. Dolor animi iusto. Quisquam sed autem aperiam eos temporibus porro modi. Voluptatem nesciunt sed doloribus possimus quis enim ipsa. Recusandae ipsum voluptatem reiciendis quam.",
   id: 12
  },
 ];


describe('PostService', () => {
  let service: PostService;
  let httpController:HttpTestingController;
  let BASE_URL = 'https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs/';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[PostService]
    });
    service = TestBed.inject(PostService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getAllPosts and return an array of BlogPosts', () => {

    // 1
    service.getBlogPosts().subscribe((res) => {
      // console.log(res)
      // console.log(expectedBlogPosts)
    // console.log(res)
      //2
      expect(expectedBlogPosts).toBe(res);
    });

    //3
    const req = httpController.expectOne(service.BASE_URL);

    expect(req.cancelled).toBeFalsy();
  
    //4
    req.flush(expectedBlogPosts);
    httpController.verify();
  });

  it('should call editPost and return the updated post from the API', () => {
    const updatedPost: BlogPost =  {
      title: "navigate wireless driver",
      author: "Test Author 9/13",
      createdAt: "2030-10-01T03:01:10.954Z",
      image: "http://loremflickr.com/640/480",
      body: "Voluptas iusto qui similique. Eveniet libero veniam. Doloribus accusantium laborum suscipit eius enim aut neque occaecati.\nHic rerum suscipit provident consequatur eum. Dolor necessitatibus sapiente quis quas aut dolore sequi perspiciatis aut. Culpa ut debitis sed debitis praesentium dolorem facere.\nReiciendis vel sint commodi. Consequatur tenetur molestiae et dolore voluptas voluptatem occaecati ea occaecati. Dolor animi iusto. Quisquam sed autem aperiam eos temporibus porro modi. Voluptatem nesciunt sed doloribus possimus quis enim ipsa. Recusandae ipsum voluptatem reiciendis quam.",
      id: 12
     }

    service.updateBlogPost(expectedBlogPosts[3], 12).subscribe((data) => {
      // console.log(data)
      expect(data).toEqual(updatedPost);
    });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `${BASE_URL}12`,
    });

    req.flush(updatedPost);
});

it('should call deletePost and return the updated posts array from the API', () => {
  const deletedPost: BlogPost =  {
    title: "navigate wireless driver",
    author: "Test Author 9/13",
    createdAt: "2030-10-01T03:01:10.954Z",
    image: "http://loremflickr.com/640/480",
    body: "Voluptas iusto qui similique. Eveniet libero veniam. Doloribus accusantium laborum suscipit eius enim aut neque occaecati.\nHic rerum suscipit provident consequatur eum. Dolor necessitatibus sapiente quis quas aut dolore sequi perspiciatis aut. Culpa ut debitis sed debitis praesentium dolorem facere.\nReiciendis vel sint commodi. Consequatur tenetur molestiae et dolore voluptas voluptatem occaecati ea occaecati. Dolor animi iusto. Quisquam sed autem aperiam eos temporibus porro modi. Voluptatem nesciunt sed doloribus possimus quis enim ipsa. Recusandae ipsum voluptatem reiciendis quam.",
    id: 12
   }

  service.deleteBlogPost(12).subscribe((data) => {
    // console.log(data)
    expect(data).toEqual(deletedPost);
  });

  const req = httpController.expectOne({
    method: 'DELETE',
    url: `${BASE_URL}12`,
  });

  req.flush(deletedPost);
});

it('should call addPost and return the added post from the API', () => {
  const newPost: BlogPost =  {
    title: "study react",
    author: "Test Author2 9/13",
    createdAt: "2030-10-01T03:01:10.954Z",
    image: "http://loremflickr.com/640/480",
    body: "Voluptas iusto qui similique. Eveniet libero veniam. Doloribus accusantium laborum suscipit eius enim aut neque occaecati.\nHic rerum suscipit provident consequatur eum. Dolor necessitatibus sapiente quis quas aut dolore sequi perspiciatis aut. Culpa ut debitis sed debitis praesentium dolorem facere.\nReiciendis vel sint commodi. Consequatur tenetur molestiae et dolore voluptas voluptatem occaecati ea occaecati. Dolor animi iusto. Quisquam sed autem aperiam eos temporibus porro modi. Voluptatem nesciunt sed doloribus possimus quis enim ipsa. Recusandae ipsum voluptatem reiciendis quam.",
    id:20
  }

  service.postBlogPost(newPost).subscribe((data) => {
    // console.log(data)
    expect(data).toEqual(newPost);
  });

  const req = httpController.expectOne({
    method: 'POST',
    url: `${BASE_URL}`,
  });

  req.flush(newPost);
});


}

)
