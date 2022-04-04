import { useSelector } from "react-redux";

function HomePage() {
  const user = useSelector(state => state.session.user);

  return (
      <>
        <h1 className="site-name">BinderKeeper. Hello, ${user.name}</h1>
      </>
    )
}

export default HomePage;
