import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef<any>(null);
  const handleSearchTerm = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favourite coctail</label>
          <input
            onChange={handleSearchTerm}
            type="text"
            id="name"
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
