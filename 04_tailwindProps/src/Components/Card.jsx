const Card = (props) => {
  return (
    <>
      <div className="card w-96 border border-solid border-white text-center text-6xl p-5 rounded-2xl bg-gray-900 font-bold">
        <img
          src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="lion Img"
          className="h-52 w-52 object-cover mx-auto block rounded-full"
        />
        <h1>{props.user}</h1>
        <p className="my-5 mx-0 text-2xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi.
        </p>
        <button className="bg-white text-black font-medium text-xl rounded-xl px-5 py-2.5">
          View Profile
        </button>
      </div>
    </>
  )
}

export default Card
