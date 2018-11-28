// var Search = (props) => {
//   var change = (event) => {
//     console.log(event);
//     // props.handleSearch
//   };
  
//   return (
//     <div className="search-bar form-inline">
//       <input 
//         onChange={change} className="form-control" type="text" />
//       <button className="btn hidden-sm-down">
//         <span className="glyphicon glyphicon-search"></span>
//       </button>
//     </div> 
//   );
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// export default Search;

var Search = (props) => (  
  <div className="search-bar form-inline">
    <input 
      className="form-control" 
      type="text"
      onChange={(e) => props.handleSearchInputChange(e.target.value)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
