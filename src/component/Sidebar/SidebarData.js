import ForumIcon from '@material-ui/icons/Forum';
import DvrIcon from '@material-ui/icons/Dvr';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import NfcIcon from '@material-ui/icons/Nfc';
import DateRangeIcon from '@material-ui/icons/DateRange';

export const SidebarData = [
    {
        title : "Programs",
        icon : <ForumIcon/>,
        link : '/Programs'
    },
    {
        title : "Coaching",
        icon : <DvrIcon/>,
        link : '/Coaching'
    },
    {
        title : "Collaboration",
        icon : <AcUnitRoundedIcon/>,
        link : '/Collaboration'
    },
    {
        title : "Progress",
        icon : <PermIdentityOutlinedIcon/>,
        link : '/Progress'
    },
    {
        title : "Knowledge",
        icon : <NfcIcon/>,
        link : '/Knowledge'
    },
    {
        title : "Calendar",
        icon : <DateRangeIcon/>,
        link : '/Calendar'
    }
]