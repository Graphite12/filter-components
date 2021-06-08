export default function SearchBar({ onChange }) {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="제품명을 검색해보세요. ex)RTX..., RX.."
        className="search_bar"
        name="searchText"
        onChange={onChange}
      />
      <button type="submit" className="search_submit">
        검색
      </button>
    </form>
  );
}
