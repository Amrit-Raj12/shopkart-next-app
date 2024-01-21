import axios from "axios"
import { Suspense, lazy, memo } from "react"
import Loader from "../../components/loading/loading"
const ProductDetails = lazy(() => import("../../components/Products/ProductDetails"))
export async function getServerSideProps(context) {
  const { id } = context.query
  let data
  try {
    const response = await axios.get(
      `https://auth-task-app.up.railway.app/api/products/${id}`
    )
    data = response?.data
  } catch (error) {
    console.error(error)
  }
  return {
    props: {
      data,
    },
  }
}

const Index = ({ data }) => {
  return <Suspense fallback={<Loader />}><ProductDetails data={data} /></Suspense>

}

export default memo(Index)
