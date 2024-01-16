import { useParams } from "react-router-dom"

export const EntityPage = () => {

  const { id } = useParams();

  console.log(id);

  return (
    <div>EntityPage</div>
  )
}