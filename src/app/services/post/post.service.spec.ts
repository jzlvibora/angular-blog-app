import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogPost } from 'src/app/shared/blog-post';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let postService: PostService;

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    postService = new PostService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected blogPosts (HttpClient called once)'),
    (done: DoneFn) => {
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

       httpClientSpy.get.and.returnValue(asyncData(expectedBlogPosts))

       postService.getBlogPosts().subscribe({
        next:posts=>{
          expect(posts).withContext('expected posts').toEqual(expectedBlogPosts);
          done();
        },
        error:done.fail
       });
       expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    };
    
});
function asyncData(expectedBlogPosts: BlogPost[]): import("rxjs").Observable<unknown> {
  throw new Error('Function not implemented.');
}

