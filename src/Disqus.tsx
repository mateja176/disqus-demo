import D from 'disqus-react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Disqus: React.FC<RouteComponentProps> = ({ match: { url } }) => {
  const disqusShortname = 'react-hot-starter-dev';

  // const disqusConfig = {
  //   url: url,
  //   identifier: url,
  //   title: url,
  // };

  const disqusConfig = {
    url: window.location.href,
    identifier: 'test',
    title: 'test',
  };

  return (
    <div className="article">
      <h1>{url}</h1>
      <D.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </D.CommentCount>

      <D.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default withRouter(Disqus);
