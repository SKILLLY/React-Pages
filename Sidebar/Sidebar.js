import React from "react"
import "../CSS/Sidebar.css"
import "../font-awesome/css/font-awesome.min.css"
class Sidebar extends React.Component {
  constructor(){
    super();
    this.state = {
      isSidebarOpen: false,
      sidebarClass: "sidenav",
    };
    this.onClickSidebarOpen = this.onClickSidebarOpen.bind(this)
  }
  onClickSidebarOpen(){
    this.setState(prevState => {
      if(!prevState.isSidebarOpen)
        {
          return {
            isSidebarOpen: true,
            sidebarClass: "sidenavOpen",
          }
        }
        else if(prevState.isSidebarOpen)
          {
            return {
              isSidebarOpen: false,
              sidebarClass: "sidenav",
            }
          }
    })
  }
  render(){
    return (
      <div class={this.state.sidebarClass} >
        <ul>
          <span onClick={this.onClickSidebarOpen} class="hamburger">
            <li class="hamburger"><a href="#">
              <span class="icons"><i class="fa fa-bars" aria-hidden="true"></i></span>
              </a>
            </li>
          </span>

          <span>
            <li class="sidenav-item">
              <a href="#">
              <span class="icons"><i class="fa fa-home" aria-hidden="true"></i></span>
              <span class="options">SkillBoard</span>
              </a>
            </li>
            <li class="sidenav-item">
              <a href="#">
              <span class="icons"><i class="fa fa-pie-chart" aria-hidden="true"></i></span>
              <span class="options">Analytics</span>
              </a>
            </li>
            <li class="sidenav-item">
              <a href="#">
              <span class="icons"><i class="fa fa-search" aria-hidden="true"></i></span>
              <span class="options">ReviewMore</span>
              </a>
            </li>
            <li class="sidenav-item">
              <a href="#">
              <span class="icons"><i class="fa fa-user" aria-hidden="true"></i></span>
              <span class="options">Profile</span>
              </a>
            </li>
            <li class="sidenav-item">
              <a href="#">
              <span class="icons"><i class="fa fa-address-book" aria-hidden="true"></i></span>
              <span class="options">Portfolio</span>
              </a>
            </li>
          </span>
        </ul>
      </div>
    )
  }
}
export default Sidebar
