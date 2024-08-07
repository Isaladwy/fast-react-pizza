import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className="mb-10 mt-8 text-center sm:my-16 px-4">
      <h1 className="mb-4 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
