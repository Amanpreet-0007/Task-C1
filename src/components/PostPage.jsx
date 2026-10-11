import React, { useState } from 'react';
import './PostPage.css';

function PostPage() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleTypeChange = (e) => {
    setPostType(e.target.value);
    setError('');
    setSuccessMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!title.trim()) {
      setError('Error: Title cannot be empty.');
      alert('Error: Title cannot be empty.');
      return;
    }

    if (postType === 'question') {
      if (!description.trim()) {
        setError('Error: Please describe your problem.');
        alert('Error: Please describe your problem.');
        return;
      }
    } else {
      if (!abstract.trim()) {
        setError('Error: Please enter a 1-paragraph abstract.');
        alert('Error: Please enter a 1-paragraph abstract.');
        return;
      }
      if (!articleText.trim()) {
        setError('Error: Please enter the article text.');
        alert('Error: Please enter the article text.');
        return;
      }
    }

    if (!tags.trim()) {
      setError('Error: Please add at least one tag.');
      alert('Error: Please add at least one tag.');
      return;
    }

    const tagList = tags.split(',').map((t) => t.trim()).filter((t) => t.length > 0);
    if (tagList.length > 3) {
      setError('Error: Please add up to 3 tags maximum.');
      alert('Error: Please add up to 3 tags maximum.');
      return;
    }

    const successString = 'Success! Your post has been successfully sent.';
    setSuccessMsg(successString);
    alert(successString);

    setTitle('');
    setDescription('');
    setAbstract('');
    setArticleText('');
    setTags('');
  };

  return (
    <div className="post-page-container">
      <h2 className="post-heading">New Post</h2>

      {/* Select Post Type */}
      <div className="post-type-selector">
        <label className="field-label">Select Post Type:</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={handleTypeChange}
            />
            Question
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={handleTypeChange}
            />
            Article
          </label>
        </div>
      </div>

      {error && <div className="alert-error">{error}</div>}
      {successMsg && <div className="alert-success">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label className="field-label">Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={
              postType === 'question'
                ? 'Start your question with how, what, why, etc.'
                : 'Enter a descriptive title'
            }
          />
        </div>

        {postType === 'question' ? (
          <div className="form-group">
            <label className="field-label">Describe your problem</label>
            <textarea
              rows="5"
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide details about what you are trying to achieve..."
            />
          </div>
        ) : (
          <>
            <div className="form-group">
              <label className="field-label">Abstract</label>
              <textarea
                rows="3"
                className="form-textarea"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                placeholder="Enter a 1-paragraph abstract"
              />
            </div>

            <div className="form-group">
              <label className="field-label">Article Text</label>
              <textarea
                rows="6"
                className="form-textarea"
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
                placeholder="Enter your full article content here..."
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label className="field-label">Tags</label>
          <input
            type="text"
            className="form-input"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Please add up to 3 tags to describe what your post is about e.g., Java"
          />
        </div>

        <button type="submit" className="post-submit-btn">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostPage;