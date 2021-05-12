import React from 'react';
import './Dashboard.styles.css';
import {DashboardData} from './DashboardData'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FaceIcon from '@material-ui/icons/Face';


const Dashboard = () =>(
    
    <div className='Dashboard'>
        
        <div className='overview'>
        <div className='overview_head'>
            Program Overview:
        </div>
        <ul >
            {DashboardData.map((val , key) =>{
                return <li key= {key} id='row'
                        className='overview-box'

                        >
                    <div className='order'>{val.order} </div>
                    <div>
                    <div >{val.title} </div>
                    <div id='row'>
                        <div>
                            <CardGiftcardIcon/> Research
                        </div>
                        <div>
                            <AvTimerIcon/> Self-Paced
                        </div>
                    </div>
                    </div>
                    
                </li>
            })}
        </ul>
        </div>


        <div>
            <div className='top-bar' align="right">
                <HomeIcon/>
                <NotificationsIcon/>
                <MailOutlineIcon/>
                <FaceIcon/>

            </div>

            <div id='row'>
                <div className='topic'>Mentor videos </div>
                <div className='topic'>Information </div>
                <div className='topic'>Task </div>
                <div className='topic'>Resources </div>
                <div className='topic'>Solution</div>
            </div>

            <div className ='only-text'>
                <p>Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </div>

        </div>


    </div>
);


export default Dashboard;
