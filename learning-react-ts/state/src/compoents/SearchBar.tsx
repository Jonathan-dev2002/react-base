interface SearchProps {
  onSearchChange: (text: string) => void;
}

export default function SearchBar({ onSearchChange }:SearchProps){
    return(
        <div>
            <input placeholder="Search..."
                onChange = {(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
};
