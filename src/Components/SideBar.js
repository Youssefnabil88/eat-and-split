import Friend from "./Friend";

export default function SideBar({ handleToggleAdd, toggle }) {
  return (
    <div className="sidebar">
      <ul>
        <Friend />
        <Friend />
      </ul>
      {!toggle && (
        <button className="button" onClick={handleToggleAdd}>
          Add friend
        </button>
      )}

      {toggle && (
        <button className="button" onClick={handleToggleAdd}>
          Close
        </button>
      )}
    </div>
  );
}
