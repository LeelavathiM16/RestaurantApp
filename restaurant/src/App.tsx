import './App.css'
import InfiniteScroll from './pagination/infiniteScroll'
// import CursorPagination from './pagination/cursorPagination'
// import Pagination from './pagination/pagination'

function App() {

  return (
  <div>
    <h1>User Data</h1>
    {/* <Pagination /> */}
    {/* <CursorPagination /> */}
    <InfiniteScroll />
  </div>
  )
}

export default App
