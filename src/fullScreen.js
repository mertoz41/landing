import React, {Component} from 'react'
import ReactPageScroller from 'react-page-scroller';
import First from './components/first'
import Second from './components/second'
import Last from './components/last'
import './App.css'
class FullScreen extends Component{

    constructor(props){
        super(props);
        this.state = {currentPage: null};
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
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
                    <First/>
                    <Second />
                    <Last/>
                </ReactPageScroller>
            </div>
        )
    }
}
export default FullScreen