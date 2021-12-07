import React, {Component} from 'react'
import ReactPageScroller from 'react-page-scroller';
import First from './components/first'
import What from './components/what'
import Why from './components/why'
import Last from './components/last'
import './App.css'

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
                

                <ReactPageScroller
                pageOnChange={this.handlePageChange}
                onBeforePageScroll={this.handleBeforePageChange}
                customPageNumber={this.state.currentPage}
                >
                    <First handlePageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
                    <What handlePageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
                    <Why handlePageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
                    <Last/>
                </ReactPageScroller>
                
            </div>
        )
    }
}
export default FullScreen