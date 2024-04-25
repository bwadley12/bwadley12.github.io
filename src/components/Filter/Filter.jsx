import './Filter.css';
import './FilterItem.css'
// import FilterItem from './FilterItem';

export default function Filter() {
    return (
        <div className="searchContainer">
            <FilterItem filterValue="java" />
            <FilterItem filterValue="javascript" />
        </div>
    )

}



function FilterItem({filterValue}) {

    return (
        <div className="filteritem">
            {console.log(filterValue)} 
            <span>{filterValue} </span>
        </div>
    )

}