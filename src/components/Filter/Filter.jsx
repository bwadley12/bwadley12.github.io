import './Filter.css';
import FilterItem from './FilterItem';

export default function Filter() {
    return (
        <div className="searchContainer">
            <FilterItem filterValue="java" />
            <FilterItem filterValue="javascript" />
        </div>
    )
}