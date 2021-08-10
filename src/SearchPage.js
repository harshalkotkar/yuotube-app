import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import ChannelRow from './ChannelRow'
import "./SearchPage.css"
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage_filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                Channel="Harshal's code"
                verified
                subs="50 million"
                noOfVideos={2}
                description="we are going to learn python tutorial in this channel" />
            <hr />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
            <VideoRow
                views="1.4M"
                subs="2K"
                description="Welcome friends"
                timestamp="59 seconds ago"
                channel="React Coders"
                title="build a youtube clone"
                image="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" />
        </div>
    )
}

export default SearchPage
