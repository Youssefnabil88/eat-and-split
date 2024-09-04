export default function BillForm({
  selectedFriend,
  payBill,
  setPayBill,
  myExpense,
  handleSetMyExpense,
  handleSubmitSplit,
  billValue,
  handleSetBillValue,
  friendExpense,
}) {


    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSubmitSplit();
    }
  return (
    selectedFriend && (
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>SPLIT A BILL WITH {selectedFriend}</h2>
        <label>💰Bill Value</label>
        <input
          type="number"
          value={billValue}
          onChange={handleSetBillValue}
        ></input>
        <label>🧍Your expense</label>
        <input
          type="number"
          value={myExpense}
          onChange={handleSetMyExpense}
        ></input>
        <label>👫{selectedFriend} expense:</label>
        <input type="number" value={friendExpense} disabled></input>
        <label>💸Who is paying the bill?</label>
        <select value={payBill} onChange={(e) => setPayBill(e.target.value)}>
          <option value="me">You</option>
          <option value={selectedFriend}>{selectedFriend}</option>
        </select>
        <button className="button"> split bill</button>
      </form>
    )
  );
}
