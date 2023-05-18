import React from 'react';

import PageHeader from '../components/PageHeader';
import ImageSlider from '../components/ImageSlider';
import BlogSingle from '../components/BlogSingle';
import Button from '../components/Button';
import blog from '../data/blog';

const Blog2 = () => {
  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Our Blog"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Blog',
            to: '/blog1',
          },
        ]}
      />
      {/* page header - end */}

      {/* blog section - start */}
      <div className="blog-section blog-section-1">
        <div className="blog-section-wrapper">
          <div className="container">
            <div className="row gx-5">
              {blog.map((post, key) => {
                return (
                  <div
                    className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-10 offset-1"
                    key={key}
                  >
                    <BlogSingle element={post} type={2} />
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col">
                {/* load more - start */}
                <Button to="#" content="Load More" type="button-3" />
                {/* load more - end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog section - end */}

      {/* instagram - start */}
      <div className="instagram">
        <div className="instagram-wrapper">
          <ImageSlider />
          <div className="button-wrapper">
            <Button
              to="/"
              content="Follow us on Instagram"
              type="button-premium"
              icon={<i className="fab fa-instagram"></i>}
            />
          </div>
        </div>
      </div>
      {/* instagram - end */}
    </>
  );
};

export default Blog2;
