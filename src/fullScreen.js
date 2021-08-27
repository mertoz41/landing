import React, {Component} from 'react'
import ReactPageScroller from 'react-page-scroller';
import First from './components/first'
import Second from './components/second'
class FullScreen extends Component{

    constructor(props){
        super(props);
        this.state = {currentPage: null};
    }

    handlePageChange = number => {
        console.log(number)
        this.setState({ currentPage: number });
    };

    handleBeforePageChange = number => {
        console.log(number);
    };
    render(){
        return(
            <div>
                {/* <p>experimenting only</p> */}
                <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
            <First/>
            <Second />
          {/* <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent /> */}
        </ReactPageScroller>
            </div>
        )
    }
}


export default FullScreen