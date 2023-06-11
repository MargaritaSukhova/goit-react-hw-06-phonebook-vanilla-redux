import { Block } from '../Filter/Filter.styled';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterActions';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Block>
      <Label htmlFor="filter"> Find contacts by name</Label>
      <Input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Block>
  );
};

export default Filter;
