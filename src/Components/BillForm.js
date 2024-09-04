export default function BillForm() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH FAHD</h2>
      <label>Bill Value</label>
      <input type="text"></input>
      <label>Your expense</label>
      <input type="text"></input>
      <label>Fahd expense:</label>
      <input type="text"></input>
      <label>Who is paying the bill?</label>
      <select >
        <option>
            You
        </option>
        <option>
            Fahd
        </option>
       
      </select>
      <button className="button"> split bill</button>
    </form>
  );
}
