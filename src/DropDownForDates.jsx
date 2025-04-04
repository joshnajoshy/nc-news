import Dropdown from 'react-bootstrap/Dropdown';


function DropDownForDates() {

  return (
    <div className='dropDown'>
    <Dropdown>
      <Dropdown.Toggle variant='Secondary' id="dropdown-basic">
        Filter By Date
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='/articles?sort_by=created_at&order=desc'>Latest First</Dropdown.Item>
        <Dropdown.Item href='/articles?sort_by=created_at&order=asc'>Oldest First</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<Dropdown>
<Dropdown.Toggle variant='Secondary' id="dropdown-basic">
  Filter By Votes
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href='/articles?sort_by=votes&order=desc'>Most Votes</Dropdown.Item>
  <Dropdown.Item href='/articles?sort_by=votes&order=asc'>Least Votes</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

<Dropdown>
<Dropdown.Toggle variant='Secondary' id="dropdown-basic">
  Filter By Comments
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href='/articles?sort_by=comment_count&order=desc'>Most Comments</Dropdown.Item>
  <Dropdown.Item href='/articles?sort_by=comment_count&order=asc'>Least Comments</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

</div>
  );
}

export default DropDownForDates;