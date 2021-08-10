import React from 'react'
import "./videoRow.css"

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_heading">
                    {channel} . <span className="video_subs">
                    <span className="videoRow_subsnumber">{subs}</span> subscribers </span> {views} views . {timestamp}
                </p>
                <p className="videoRow_description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
