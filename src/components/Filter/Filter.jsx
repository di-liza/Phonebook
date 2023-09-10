import { selectFiter, setFilterValue } from 'redux/filter';
import { FilterWrapp } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';

function Filter() {
  const filter = useSelector(selectFiter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilterValue(value.trim()));
  };

  return (
    <FilterWrapp>
      <input
        className="input"
        onChange={handleFilterChange}
        value={filter}
        name={filter}
        placeholder="Find contacts by name"
      ></input>
      <BiSearchAlt2 className="icon" />
    </FilterWrapp>
  );
}

export default Filter;
