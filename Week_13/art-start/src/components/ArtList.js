import {useSelector} from 'react-redux'

export default function ArtList() {
  const artList = useSelector((state) => {
    return state.art.data
  })

  const renderedArt = artList.map((art) => {
    return(
      <div key={art.id} className="border rounded flex flex-row justify-between items-center">
        <p>{art.name} = ${art.price}</p>

        <button className="rounded bg-red-500 p-2 text-white">
          delete
        </button>
      </div>
    )
  })

  return <div>{renderedArt}</div>
}
