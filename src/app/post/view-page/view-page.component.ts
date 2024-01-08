import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertsService } from 'src/app/pages/admin/alerts.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';
import { Comment } from 'src/app/shared/comment';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  blogPost!: BlogPost;
  isLoading = true;
  comments!: Comment[];

  constructor(
    private blogPostService: PostService,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private authService: AuthService,
    private alertService: AlertsService
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.getBlogPost();
    this.getComments();
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      text: new FormControl(null, [Validators.required]),
    });
  }

  getBlogPost() {
    this.blogPostService.getBlogPost(this.id).subscribe((res) => {
      this.blogPost = res;
      this.isLoading = false;
    });
  }

  getComments() {
    this.commentService.getAllCommentsForPost(this.id).subscribe((res) => {
      this.comments = res;
      console.log(res);
    });
  }

  onSubmitComment() {
    const comment = {
      postIdentity: this.id,
      username: sessionStorage.getItem('user') as string,
      text: this.form.controls['text'].value,
    };

    if (this.form.invalid) {
      this.alertService.infoNotification();
      return;
    }

    this.commentService.createComment(comment).subscribe((res) => {
      // console.log(res, comment)
      // this.commentService.getAllCommentsForPost(this.id)
      this.alertService.successNotification();
      this.form.reset();
      this.getBlogPost();
      this.getComments();
    });
  }
}
