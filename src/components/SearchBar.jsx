/* eslint-disable react/prop-types */
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="relative mx-auto max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search..."
        className="w-full h-10 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
