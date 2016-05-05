import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // {video} is the same as props.video
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )

}

export default VideoListItem;
