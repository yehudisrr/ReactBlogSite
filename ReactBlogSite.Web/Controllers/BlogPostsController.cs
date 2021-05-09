using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactBlogSite.Data;
using Microsoft.Extensions.Configuration;

namespace ReactBlogSite.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogPostsController : ControllerBase
    {
        private string _connectionString;
        public BlogPostsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("viewblog")]
        public BlogPost ViewBlog(int id)
        {
            var repo = new BlogPostsRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpGet]
        [Route("getall")]
        public List<BlogPost> GetAll(int pageNumber)
        {
            var repo = new BlogPostsRepository(_connectionString);
            return repo.GetBlogPosts(pageNumber);
        }

        [HttpPost]
        [Route("admin")]
        public void Admin(BlogPost blogPost)
        {
            var repo = new BlogPostsRepository(_connectionString);
            blogPost.DateSubmitted = DateTime.Now;
            repo.AddBlogPost(blogPost);
        }

        [HttpGet]
        [Route("mostrecent")]
        public BlogPost MostRecent()
        {
            var repo = new BlogPostsRepository(_connectionString);
            return repo.GetMostRecent();
        }

        [HttpPost]
        [Route("addcomment")]
        public void AddComment(Comment comment)
        {
            var repo = new BlogPostsRepository(_connectionString);
            comment.DatePosted = DateTime.Now;
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getcomments")]
        public List<Comment> GetComments(int blogPostId)
        {
            var repo = new BlogPostsRepository(_connectionString);
            return repo.GetCommentsForBlogPost(blogPostId);
        }

        [HttpGet]
        [Route("gettotalpages")]
        public int GetTotalPages()
        {
            var repo = new BlogPostsRepository(_connectionString);
            return repo.GetTotalPages();
        }

    }
}