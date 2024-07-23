export const SearchBar = ({ onSubmit }) => {
  const formSubmit = e => {
    e.preventDefault();
    const{value} = e.target.elements.search;
    onSubmit(value)
  }
  return (
    <form>
      <input type="text" />
      <button type="submit" onSubmit={formSubmit}></button>
    </form>
  )
}
