import React from 'react'
import '../App.css';

import {SidebarMenu} from './SidebarMenu';


function Sidebar() {
    return <div className='Sidebar'>
        <ul className='SidebarList'>
        {SidebarMenu.map((val, key) => {
        return (
        <li key={key} className='row' onClick={() => {window.location.pathname = val.link}}>
            {" "}
            <div>
                {val.title}
            </div>
        </li>
        );
    })}
    </ul>
     </div>
    
}

export default Sidebar