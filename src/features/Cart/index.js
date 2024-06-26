import DeleteIcon from "@mui/icons-material/Delete"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { cartSliceAction } from "../../redux/cartSlice"
import PayButton from "../../components/PayButton"
const fmt = require("indian-number-format")
const Index = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state?.cart)
  const totalPrice = items?.reduce((acc, item) => {
    return acc + item?.price * item?.quantity
  }, 0)
  const handleRemoveFromCart = (id) => {
    dispatch(cartSliceAction.removeFromCart({ id }))
  }
  const handleDecreaseQuantity = (id) => {
    dispatch(cartSliceAction.decreaseQuantity({ id }))
  }
  const handleIncreaseQuantity = (id) => {
    dispatch(cartSliceAction.increaseQuantity({ id }))
  }

  return (
    <>
      <div className="h-full  mt-2">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {items?.map((value, index) => (
              <div
                key={index}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >

                <div
                  className="flex items-center justify-end border-gray-100 sm:hidden"
                  onClick={() => handleRemoveFromCart(value?._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="sm:w-[150px]">
                  <img
                    src={value?.thumbnail}
                    alt="product-image"
                    className="w-full h-40 object-contain rounded-lg sm:w-40"
                  />
                </div>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h4 className="text-sm font-bold text-gray-900">
                      {value?.title?.slice(0, 50)}
                    </h4>
                    <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div
                      className="sm:flex items-center justify-end border-gray-100 hidden "
                      onClick={() => handleRemoveFromCart(value?._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center border-gray-100">
                      <span
                        onClick={() => handleDecreaseQuantity(value?._id)}
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        -
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={value?.quantity}
                        min="1"
                      />
                      <span
                        onClick={() => handleIncreaseQuantity(value?._id)}
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        +
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm"> {fmt.format(value?.price)} INR</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* sub total */}

          <div className="mt-6 mb-16 lg:mb-2 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">140</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  {fmt.format(totalPrice + 140)} INR
                </p>
              </div>
            </div>
            <PayButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
