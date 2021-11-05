export default function NavBar({changePage}) {
  return (
    <div>
      <button onClick={() => changePage("starships")}>Starships</button>
      <button onClick={() => changePage("planets")}>Planets</button>
      <button onClick={() => changePage("people")}>People</button>
    </div>
  )
}
