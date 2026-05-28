function QueryInput({ value, onChange }) {
  return (
    <div>
      <h3>📝 요구사항 / 쿼리</h3>
      <textarea
        rows="5"
        style={{ width: "100%" }}
        placeholder="예: 회원 조회 API 만들어줘"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default QueryInput;