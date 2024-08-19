import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function ChartsMasonry() {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      className="bg-red-400"
    >
      <Masonry className="bg-blue-300">
        <div className="h-60 w-20 rounded-lg bg-amber-400" />
        <div className="h-42 w-52 rounded-lg bg-amber-500" />
        <div className="h-64 w-64 rounded-lg bg-amber-600" />
        <div className="w-22rounded-lg h-20 bg-amber-200" />
        <div className="h-52 w-32 rounded-lg bg-amber-100" />
        <div className="h-32 w-16 rounded-lg bg-amber-300" />
        <div className="h-36 w-2 rounded-lg bg-amber-600" />
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default ChartsMasonry
