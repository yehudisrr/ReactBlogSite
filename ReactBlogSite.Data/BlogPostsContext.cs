using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlogSite.Data
{
    public class BlogPostsContext : DbContext
    {
        private readonly string _connectionString;

        public BlogPostsContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}

