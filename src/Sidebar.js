import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="Sidebar">
     
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow  Icon={LibraryAddIcon} title="Library" />
            <SidebarRow  Icon={HistoryIcon} title="History" />
            <SidebarRow  Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow  Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow  Icon={ThumbUpAltIcon} title="Liked videos" />
            <SidebarRow  Icon={ExpandMoreIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
