import React from 'react';
import './sidebar.styles.css';
import {SidebarData} from './SidebarData';
import logo from './logo.png';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RoomIcon from '@material-ui/icons/Room';

const Sidebar = () => (
    <div className= 'Sidebar'>
            <div className='image'>
                <img src={logo} alt="logo" width="250" height="100" />
            </div>
        <ul className='Sidebarlist'>
            {SidebarData.map((val , key) =>{
                return <li key= {key} className= 'row' 
                        id = {window.location.pathname == val.link ? 'active' : "" }
                        onClick= {()=>{
                            window.location.pathname = val.link;
                        }}
                        >
                    <div id='icon'>{val.icon} </div>
                    <div id='title'>{val.title} </div>
                </li>
            })}
        </ul>
        <div className='files'>
            <h2>My Files</h2>
            <ArrowRightSharpIcon/>
            <FolderOpenIcon/>
            Uploads 
        </div>
        <div>
            <ArrowRightSharpIcon/>
            <FolderOpenIcon/>
            Downloads 
        </div>

        <div className = 'timezone'>
            <div>
            <RoomIcon/>
            </div>
            <div>
            <h3>Your Timezone</h3>
            <p>India</p>
            </div>
            
        </div>
        
    </div>
);

export default Sidebar;