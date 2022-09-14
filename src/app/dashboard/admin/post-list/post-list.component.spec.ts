import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';

import { PostListComponent } from './post-list.component';
describe('PostListComponent', () => {
  let component:PostListComponent;
  let fixture:ComponentFixture<PostListComponent>
  let mockPostService:jasmine.SpyObj<PostService>
  const expectedBlogPosts: BlogPost[] = [
    {
      title: 'copy online pixel',
      author: 'Martina',
      createdAt: '2043-09-20T10:01:50.897Z',
      image: 'http://loremflickr.com/640/480',
      body: 'Odit id veritatis dolor veritatis soluta et. Aut eos atque nihil. Vel nesciunt assumenda. Recusandae eum sapiente aut illo sit non omnis.\nQui sunt est modi hic vel autem sed animi vero. Est quisquam et nihil voluptatem consequatur est. Commodi hic quibusdam et culpa repudiandae quos voluptate facilis. Assumenda quia nisi nam fuga et nisi sed nam. Eligendi similique non. Eum fugiat deleniti ducimus perspiciatis eos ducimus ut placeat.\nVelit voluptatem est id aut quia culpa nisi dolor libero. Dolore est doloribus et vel ut ut. Nam aliquam autem harum. Voluptas qui nihil sed reiciendis dolorum iste voluptatem. Sequi et quas fugit impedit ut odit vel aperiam modi.',
      id: 10,
    },
    {
      title: 'reboot primary firewall',
      author: 'Tanner',
      createdAt: '2050-04-06T03:47:08.425Z',
      image: 'http://loremflickr.com/640/480',
      body: 'Atque aliquam quis natus ea voluptatum. Ducimus dolores voluptas et voluptatem. Consequuntur iusto minima qui tempora saepe quia. Enim temporibus ea. Quisquam adipisci impedit nulla atque. Non rerum earum ea odio ut qui modi.\nSoluta iusto possimus qui deserunt nostrum. Quasi quaerat porro ea harum sed non. Ut a commodi asperiores perferendis. Placeat nostrum sit. Ut eaque et nulla aut dolore.\nNumquam velit aut est. Quis sed et quia sed neque et atque. Consequatur doloribus quia aut aliquam. Provident fugit similique tenetur placeat voluptas voluptatem neque assumenda.',
      id: 11,
    },
    {
      title: 'navigate wireless driver',
      author: 'Jaquan',
      createdAt: '2030-10-01T03:01:10.954Z',
      image: 'http://loremflickr.com/640/480',
      body: 'Voluptas iusto qui similique. Eveniet libero veniam. Doloribus accusantium laborum suscipit eius enim aut neque occaecati.\nHic rerum suscipit provident consequatur eum. Dolor necessitatibus sapiente quis quas aut dolore sequi perspiciatis aut. Culpa ut debitis sed debitis praesentium dolorem facere.\nReiciendis vel sint commodi. Consequatur tenetur molestiae et dolore voluptas voluptatem occaecati ea occaecati. Dolor animi iusto. Quisquam sed autem aperiam eos temporibus porro modi. Voluptatem nesciunt sed doloribus possimus quis enim ipsa. Recusandae ipsum voluptatem reiciendis quam.',
      id: 12,
    },
  ];


  beforeEach(async () => {
    const postSpy = jasmine.createSpyObj('PostService', ['getBlogPosts']);
    MockBuilder(PostListComponent, AppModule);
  
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
      ],
      declarations: [PostListComponent, TruncatePipe],
      providers: [
        PostListComponent,
        { provide: PostService, useValue: postSpy },
      ],
    }).compileComponents();
    mockPostService = TestBed.inject(PostService) as jasmine.SpyObj<PostService>
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    mockPostService.getBlogPosts.and.returnValue(of(expectedBlogPosts))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test the table', () => {
    const targetComponent=MockRender(PostListComponent).point.componentInstance;
    const tableEl=ngMocks.reveal(['mat-table']);
    expect(ngMocks.input(tableEl,'dataSource')).toBe(targetComponent.blogPosts)
    // expect(component.blogPosts).toEqual(expectedBlogPosts);
    // let tableRows = fixture.nativeElement.querySelectorAll('mat-table')
    // expect(tableRows.length).toBe(3);

  });
});


