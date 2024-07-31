import React, { useState } from 'react';
import logo from './iconss/logo.jpeg';
import { ReactComponent as Home } from './iconss/home.svg';
import { ReactComponent as Card } from './iconss/credit_card.svg';
import SettingsImage from './iconss/settings.png';
import { ReactComponent as Chat } from './iconss/chat.svg';
import { ReactComponent as Group } from './iconss/group.svg';
import Woman from './iconss/woman.jpeg';
import More from './iconss/more.png';
import { FaBars, FaCalendarAlt, FaCog, FaEllipsisH, FaTimes } from 'react-icons/fa';

import './Header.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Header = ({ toggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <div className='header-one'>
                <div className="left-div">
                  <img src={logo} alt="logo"/>
                </div>

                <div className='middle-div'>
                    <div className='box'>
                        <div className='icon'>
                            <Home />
                        </div>
                        <span>Overview</span>
                    </div>

                    <div className='box-blue'>
                        <div className='icon'>
                            <Group />
                        </div>
                        <span>Products</span>
                    </div>

                    <div className='box'>
                        <FaCalendarAlt className="icon" />
                        <span>Schedule</span>
                    </div>

                    <div className='box'>
                        <div className='icon'>
                            <Chat />
                        </div>
                        <span>Message</span>
                    </div>

                    <div className='box'>
                        <div className='icon'>
                            <Card />
                        </div>
                        <span>Transactions</span>
                    </div>
                </div>
                <div className="right-div">
                    <img src={Woman} alt="Woman" />
                    <div className='name'>
                        <div className='bold'> Janet Simmons</div>
                        <div className='label'>Online</div>
                    </div>
                    <img src={SettingsImage} alt="Settings" style={{ height: '20px', marginRight: '10px' }} />
                    <img src={More} alt="More" style={{ height: '20px' }} />
                </div>
            </div>
            <div className='nav-toggle'>
              <div className="left-div">

              {menuOpen ? (
                        <FaTimes className='menu-icon' onClick={toggleMenu} />
                    ) : (
                        <FaBars className='menu-icon' onClick={toggleMenu} />
                    )}

                  <img src={logo} alt="logo"/>
              </div>
              {menuOpen && (
                <div className='smallScreenRightDiv' style={{backgroundColor: 'red'}}>
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} >
                  <DropdownToggle tag='span' data-toggle='dropdown' aria-expanded={dropdownOpen}  caret={false}>
                  <span></span>
                  </DropdownToggle>
                    <DropdownMenu right >
                      <DropdownItem header></DropdownItem>
                      <DropdownItem style={{ display:'flex',  justifyContent:'flex-start', alignItems:'center' , border: 'none', background:'white', marginBottom:'10px'}}>
                        <div className='box'>
                          <div className='icon'style={{height: '14px', width: '20px'}}>
                            <Home />
                          </div>
                          <span>Overview</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem style={{ display:'flex',  justifyContent:'flex-start', alignItems:'center' , border: 'none', background:'white', marginBottom:'10px'}}>
                        <div className='box-blue'>
                          <div className='icon' style={{height: '14px', width: '20px'}}>
                            <Group />
                          </div>
                          <span>Products</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem style={{ display:'flex',  justifyContent:'flex-start', alignItems:'center' , border: 'none', background:'white', marginBottom:'10px'}}>
                        <div className='box'>
                          <div className='icon'style={{height: '14px', width: '20px'}}>
                            <Home />
                          </div>
                          <span>Schedule</span>
                        </div>

                      </DropdownItem>
                      <DropdownItem style={{ display:'flex',  justifyContent:'flex-start', alignItems:'center' , border: 'none', background:'white', marginBottom:'10px'}}>
                        <div className='box'>
                          <div className='icon'style={{height: '14px', width: '20px'}}>
                            <Chat />
                          </div>
                          <span>Message</span>
                        </div>

                      </DropdownItem>
                      <DropdownItem style={{ display:'flex',  justifyContent:'flex-start', alignItems:'center' , border: 'none', background:'white', marginBottom:'10px'}}>
                        <div className='box'>
                          <div className='icon'style={{height: '14px', width: '20px'}}>
                            <Card />
                          </div>
                          <span>Transactions</span>
                        </div>
                      </DropdownItem >
                      <DropdownItem divider/>
                      <DropdownItem header>Profile</DropdownItem>
                      <DropdownItem style={{border:'none', backgroundColor:'white'}}>
                        <img src={Woman} alt="Woman" className='profile-picture' style={{height:'50px', borderRadius: '40%'}}/>
                        <div className='name'>
                          <div className='bold'> Janet Simmons</div>
                          <div className='label'>Online</div>
                        </div>
                      </DropdownItem>
                      <DropdownItem style={{ display:'flex', justifyContent:'center' , border: 'none', background:'white', marginBottom:'10px'}}>
                        <img src={SettingsImage} alt="Settings" className='settings-icon'style={{height: '20px'}}/>
                      </DropdownItem>

                      
                    </DropdownMenu>
                  </Dropdown>

              </div>
              )}



      </div>
        </header>
    );
};

export default Header;
