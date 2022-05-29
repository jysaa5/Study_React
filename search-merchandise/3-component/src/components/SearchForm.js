import React from "react";

const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // form이 제출 되었을 때, 기본 동작을 막음.
    onSubmit(); // prpos의 콜백함수 호출
  };

  const handleReset = () => {
    onReset();
  };

  const handleChangeInput = (event) => {
    onChange(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input type="text" placeholder="검색어를 입력해주세요." autoFocus value={value} onChange={handleChangeInput}></input>
      {value.length > 0 && <button type="reset" className="btn-reset"></button>}
    </form>
  );
};

export default SearchForm;
