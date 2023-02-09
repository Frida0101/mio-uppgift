import "./Search.css";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

/* Returns search field and icon */
function Search({ onChange }) {
  return (
    <div className="searchDiv">
      <Icon
        path={mdiMagnify}
        size={1.3}
        style={{ marginTop: "0.5%", marginRight: "1%" }}
      />
      <input
        className="searchName"
        type="search"
        placeholder="Search"
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </div>
  );
}

export default Search;
