using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactBlogSite.Data
{
    public class BlogPostsRepository
    {
        private readonly string _connectionString;

        public BlogPostsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddBlogPost(BlogPost bp)
        {
            using var context = new BlogPostsContext(_connectionString);
            context.BlogPosts.Add(bp);
            context.SaveChanges();
        }

        public List<BlogPost> GetBlogPosts(int skip)
        {
            using var context = new BlogPostsContext(_connectionString);
            return context.BlogPosts.OrderByDescending(bp => bp.Id).Include(c => c.Comments)
                .Skip((skip - 1)*3).Take(3).ToList();
        }

        public BlogPost GetMostRecent()
        {
            using var context = new BlogPostsContext(_connectionString);
            return context.BlogPosts.OrderByDescending(bp => bp.Id).Include(c => c.Comments).FirstOrDefault();
        }

        public BlogPost GetById(int id)
        {
            using var context = new BlogPostsContext(_connectionString);
            return context.BlogPosts.Where(bp => bp.Id == id).Include(c => c.Comments).FirstOrDefault();
        }

        public List<Comment> GetCommentsForBlogPost(int blogPostId)
        {
            using var context = new BlogPostsContext(_connectionString);
            return context.Comments.Where(c => c.BlogPostId == blogPostId).ToList();

        }

        public void AddComment(Comment comment)
        {
            using var context = new BlogPostsContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }

        public int GetTotalPages()
        {
            using var context = new BlogPostsContext(_connectionString);
            var blogs = GetBlogPosts(1);
            if (blogs.Count % 3 == 0)
            {
                return blogs.Count;
            }
            else
            {
                return blogs.Count + 1;
            }

        }
    }
}