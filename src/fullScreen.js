import React, {Component} from 'react'
import ReactPageScroller from 'react-page-scroller';
import First from './components/first'
import What from './components/what'
import Why from './components/why'
import Last from './components/last'
import './App.css'
import Logo from './pics/cezslogo.png'
import { BsFillCaretDownFill } from "react-icons/bs";

class FullScreen extends Component{

    constructor(props){
        super(props);
        this.state = {currentPage: null};
    }

    handlePageChange = number => {
        this.setState({currentPage: number});
    };

    handleBeforePageChange = number => {
        console.log(number);
    };
    
    render(){
        return(
            <div className='container'>
                <div className='logobox'>
                    <img src={Logo} className='logo' alt='logo'/>
                </div>
                <div className="logobox">
                    <div>
                        <h2 className="title">Coming soon...</h2>
                        <h1 className="title">Social network for instrumentalists.</h1>
                    </div>
                </div>

                {/* <p>Something cool is coming soon...</p> */}
                {/* <ReactPageScroller
                pageOnChange={this.handlePageChange}
                onBeforePageScroll={this.handleBeforePageChange}
                customPageNumber={this.state.currentPage}
                >
                    <First handlePageChange={this.handlePageChange}/>
                    <What handlePageChange={this.handlePageChange}/>
                    <Why handlePageChange={this.handlePageChange}/>
                    <Last/>
                </ReactPageScroller> */}
                {/* <div className='experiment' onClick={() => this.handlePageChange(this.state.currentPage + 1)}>
                    <BsFillCaretDownFill size='3em' className="coloredfont"/>

            </div> */}
            </div>
        )
    }
}
export default FullScreen