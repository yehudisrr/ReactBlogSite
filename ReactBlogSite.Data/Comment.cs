using System;
using System.Collections.Generic;
using System.Text;

namespace ReactBlogSite.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime DatePosted { get; set; }
        public string CommenterName { get; set; }
        public int BlogPostId { get; set; }
    }
}
