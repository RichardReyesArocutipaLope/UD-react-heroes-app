import { useParams } from "react-router-dom";

export const HeroPage = () => {

  const params = useParams();
  console.log(params)

  return (
    <h1>HeroPage</h1>
  )
}
