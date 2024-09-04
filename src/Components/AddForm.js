export default function AddForm({ toggle }) {
  return (
    toggle && (
      <>
        <form className="form-add-friend">
          <label>🧑‍🤝‍🧑Friend name</label>
          <input type="text"></input>
          <label>🌄Image URL</label>
          <input type="text"></input>
          <button className="button">Add</button>
        </form>

    
      </>
    )
  );
}
