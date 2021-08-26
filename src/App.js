import './App.css';
import ReactPageScroller from 'react-page-scroller';
import First from './components/first'
function App() {
  return (
    <div className="App">
      <ReactPageScroller
          // pageOnChange={this.handlePageChange}
          // onBeforePageScroll={this.handleBeforePageChange}
          // customPageNumber={this.state.currentPage}
        >
          <First />
          {/* <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent /> */}
        </ReactPageScroller>
    </div>
  );
}

export default App;
