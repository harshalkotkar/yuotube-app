import React from 'react'
import "./channelRow.css"
import Avatar from "@material-ui/core/Avatar";
import { VerifiedUserRounded } from '@material-ui/icons';


function ChannelRow({ image, Channel, subs, noOfVidoes, description, verified }) {
    return (
        <div className="ChannelRow">
            <Avatar className="ChannelRow_logo"
                alt={Channel}
                src={image} />
            <div className="ChannelRow_text">
                <h4>
                    {Channel} {verified && <VerifiedUserRounded />}
                </h4>
                <p>
                    {subs} subscribers . {noOfVidoes} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
