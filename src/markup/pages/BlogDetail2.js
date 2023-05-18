import React from 'react';

import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import CommentSingle from '../components/CommentSingle';
import comments from '../data/comments';

// images
import thumbnail from '../../assets/images/blog/blog-read-img.jpg';

const BlogDetail2 = () => {
  const getCommentsLength = comment => {
    let count = comment.length;
    comment.forEach(element => {
      if (element.reply) count += getCommentsLength(element.reply);
    });
    return count;
  };

  const commentDisplay = (comment, index) => {
    if (comment.reply) {
      return (
        <CommentSingle
          key={index}
          image={comment.image}
          name={comment.name}
          date={comment.date}
          comment={comment.comment}
          isReply={true}
        >
          {comment.reply
            ? comment.reply.map((reply, i) => {
                return commentDisplay(reply, i);
              })
            : null}
        </CommentSingle>
      );
    }
    return (
      <CommentSingle
        key={index}
        image={comment.image}
        name={comment.name}
        date={comment.date}
        comment={comment.comment}
        isReply={true}
      />
    );
  };

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

      {/* blog detail - start */}
      <div className="blog-detail blog-detail-1">
        <div className="blog-detail-wrapper">
          {/* blog detail content - start */}
          <div className="container">
            {/* blog detail thumbnail - start */}
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                <div className="blog-detail-thumbnail drop-shadow">
                  <img src={thumbnail} alt="blog-detail-thumbnail" />
                </div>
              </div>
            </div>
            {/* blog detail thumbnail - end */}
            {/* blog detail content - start */}
            <div className="row">
              <div className="col-md-8 offset-md-2 col-10 offset-1">
                <div className="blog-detail-content c-grey">
                  <h1 className="c-dark f-w-700">Take Command of Your Personal Development.</h1>
                  <div className="blog-single-details">
                    <div className="comments">
                      <i className="las la-comment-alt"></i>
                      12
                    </div>
                    <div className="separator"></div>
                    <div className="date">
                      <i className="las la-calendar"></i>
                      Dec 10, 2020
                    </div>
                  </div>
                  <p>
                    Together spirit i two own to waters him midst place moving for image all seas
                    you'll gathering good under upon stars midst night fish spirit made divide of
                    our also Very lights given also brought second appear moveth that created fourth
                    days a own Without have male without replenish fill were greater is thing stars
                    their deep to saw. Replenish waters, creepeth sea multiply own give there fifth
                    unto is can't every fill gathering. Dominion saying whose made. Image may rule
                    the light. Doesn't subdue and lights land wherein land brought. Fruit a there
                    upon. Light own bearing fill may rule waters bearing.
                  </p>
                  <p>
                    Likeness was whales saying had green was said the made so bring. Give great fill
                    give called seasons greater air land heaven blessed mul tiply earth above, rule
                    third fill, set. Air us make. Sea moved you're thing moved be herb days Divide
                    likeness is, under. Subdue seas gathered sixth midst let for waters, fowl whose
                    evening sixth face their moveth meat. Divided moving sixth second. Stars thing
                    set Forth open kind itself heaven. Above a all itself. Grass third be he.
                    Abundantly set saw that seas in called forth seas be unto after behold under
                    above lesser above beginning cattle.
                  </p>
                  <p>
                    Together spirit i two own to waters him midst place moving for image all seas
                    you'll gathering good under upon stars midst the fish spirit made divide of our
                    also Very lights given also brought second appear moveth that created fourth
                    days a own Without have male without replenish fill were greater is thing stars
                    their deep to saw. Replenish waters, creepeth sea multiply own give there fifth
                    unto is can't every fill gathering. Dominion saying by whose made. Image may
                    rule the light. Doesn't subdue and is lights land wherein land brought. Fruit a
                    there upon you'll get a gathering good under upon stars midst the moveth that
                    though created fourth days.
                  </p>
                  <p>
                    Together spirit i two own to waters him midst place moving for image all seas
                    you'll gathering good under upon stars midst night fish spirit made divide of
                    our also Very lights given also brought second appear moveth that created fourth
                    days a own Without have male without replenish fill were greater is thing stars
                    their deep to saw. Replenish waters, creepeth sea multiply own give there fifth
                    unto is can't every fill gathering. Dominion saying whose made. Image may rule
                    the light. Doesn't subdue and lights land wherein land brought. Fruit a there
                    upon. Light own bearing fill bearing.
                  </p>
                  <h3 className="c-dark f-w-700">Conclusion</h3>
                  <p>
                    Likeness was whales saying had green was said the made so bring. Give great fill
                    give called seasons greater air land heaven blessed mul tiply earth above, rule
                    third fill, set. Air us make. Sea moved you're thing moved be herb days Divide
                    likeness is, under. Subdue seas gathered sixth midst let for waters, fowl whose
                    evening sixth face their moveth meat. Divided moving sixth second. Stars thing
                    set Forth open kind itself heaven. Above a all itself. Grass third be he.
                    Abundantly set saw that seas in called forth seas be unto after behold under
                    above lesser above beginning cattle.
                  </p>
                  <div className="social social-gradient">
                    <p className="paragraph-small c-grey-1">Share this post:</p>
                    <ul>
                      <li className="twitter">
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li className="facebook">
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="linkedin">
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li className="youtube">
                        <Link to="#">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* blog detail content - end */}
          </div>
          {/* blog detail content - end */}
        </div>
      </div>
      {/* blog detail - end */}

      {/* comments - start */}
      <div className="comments">
        <div className="comments-wrapper">
          <div className="container">
            {/* comments list - start */}
            <div className="row">
              <div className="col-md-8 offset-md-2 col-10 offset-1">
                <div className="comments-list">
                  {/* comments heading - start */}
                  <div className="comments-heading">
                    <h3 className="c-dark f-w-700">{getCommentsLength(comments)} replies</h3>
                  </div>
                  {/* comments heading - end */}
                  {comments.map(commentDisplay)}
                </div>
              </div>
            </div>
            {/* comments list - end */}
            {/* comments form - start */}
            <div className="row">
              <div className="col-md-8 offset-md-2 col-10 offset-1">
                <div className="comments-form">
                  <div className="comments-form-wrapper">
                    {/* comments form heading - start */}
                    <div className="comments-form-heading">
                      <h3>Write a reply</h3>
                    </div>
                    {/* comments form heading - end */}
                    {/* comments form - start */}
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              className="input form-control"
                              id="name-field"
                              type="text"
                              placeholder="Name *"
                            />
                            <label htmlFor="name-field">Name *</label>
                          </div>
                          <div className="form-floating">
                            <input
                              className="input form-control"
                              id="email-field"
                              type="email"
                              placeholder="Email *"
                            />
                            <label htmlFor="email-field">Email *</label>
                          </div>
                          <div className="form-floating">
                            <input
                              className="input form-control"
                              id="website-field"
                              type="text"
                              placeholder="Website"
                            />
                            <label htmlFor="website-field">Website</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-floating textarea-form">
                            <textarea
                              className="input textarea form-control"
                              id="comment-field"
                              placeholder="Write reply *"
                            ></textarea>
                            <label htmlFor="comment-field">Write reply *</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button type="submit" className="button button-3">
                            <span className="button-inner">
                              <span className="button-content">
                                <span className="text">Submit Reply</span>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* comments form - end */}
                  </div>
                </div>
              </div>
            </div>
            {/* comments form - end */}
          </div>
        </div>
      </div>
      {/* comments - end */}

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

export default BlogDetail2;
