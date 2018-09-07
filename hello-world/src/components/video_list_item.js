import React from 'react';

// Functional Components
const VideoListItems = ({vItem, onVideoSelect}) => {
    console.log(vItem);
    const imgUrl = vItem.snippet.thumbnails.default.url;
    return (
            <li onClick={ () => onVideoSelect(vItem) } className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl} alt="" />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{vItem.snippet.title}</div>
                    </div>
                </div>
            </li>
           )
}

export default VideoListItems;
