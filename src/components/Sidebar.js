import React, { Profiler } from 'react';
import SidebarItem from './SidebarItem';
import { useAuthState } from './../context/auth';

export default function Sidebar(props) {

	const { user } = useAuthState();
	
	const [selectedItem, setSelectedItem]=React.useState(window.location.href.slice(22,window.location.href.length));

	console.log(user);
	if(user !== null && user !== undefined){
    return (
        <nav id="sidebar" className="sidebar">
			<div className="sidebar-content js-simplebar">
				<span className="sidebar-brand" href="index.html">
                    <span className="align-middle px-6">
                        <img className=" text-center " src="img/photos/logo-light.png" alt="arru" style={{ "height": "20px" }}/>
                    </span>
                </span>

				<ul className="sidebar-nav">
					<li className="sidebar-header">
						Menu
					</li>
					
					<SidebarItem title="Users" icon="users" l="/" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					

					<SidebarItem title="Features" icon="check-square" l="/Features" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					

					<SidebarItem title="Landings" icon="flag" l="/Landings" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
				

					<SidebarItem title="Services" icon="box" l="/Services" selecteditem={selectedItem} setselecteditem={setSelectedItem} />


					<SidebarItem title="Members" icon="star" l="/Members" selecteditem={selectedItem} setselecteditem={setSelectedItem} />


					<SidebarItem title="Partners" icon="pocket" l="/Partners" selecteditem={selectedItem} setselecteditem={setSelectedItem} />

				
					<SidebarItem title="deconnection" icon="log-out" l="/login" selecteditem={selectedItem} setselecteditem={setSelectedItem} />
					
				</ul>

				
			</div>
		</nav>
    )} else {
		return(
			<React.Fragment></React.Fragment>
		);
	}
}
