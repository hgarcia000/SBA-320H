
function SearchBar({ text, setText }) {

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <input type="text" placeholder="Search for a Pokémon" onChange={handleChange} value={text} />
    );

}

export default SearchBar;