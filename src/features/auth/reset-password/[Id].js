import axios from "axios"
import {useRouter} from "next/router"
import {useState} from "react"
import {toast} from "react-toastify"
import { API_BASE_URL_AUTH } from "../../../constants/APIConstants"

const ResetPassword = () => {
  const [user, setUser] = useState({
    newPassword: "",
    confirmPassword: "",
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [password, setPassword] = useState("")

  function togglePasswordVisibility(event) {
    event.stopPropagation()
    setIsPasswordVisible((prevState) => !prevState)
  }
  const router = useRouter()
  const handleSignUp = async (e) => {
    e.preventDefault()
    const {id} = router.query
    if (user.newPassword === user.confirmPassword) {
      axios
        .patch(
          `${API_BASE_URL_AUTH}/api/change-password/${id}`,
          {password: user.confirmPassword}
        )
        .then(function (response) {
          router.push("/auth/sign-in")
        })
        .catch(function (error) {
          toast.error(error.response.data, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        })
    } else {
      toast.error("Both password not match!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }
  const getStrengthClass = (password) => {
    if (password.length === 0) {
      return "bg-gray-200"
    } else if (password.length < 8) {
      return "bg-red-200"
    } else if (!/\d/.test(password)) {
      return "bg-yellow-200"
    } else if (!/[a-z]/.test(password)) {
      return "bg-yellow-200"
    } else if (!/[A-Z]/.test(password)) {
      return "bg-yellow-200"
    } else if (!/[@#$%^&+=]/.test(password)) {
      return "bg-yellow-200"
    } else {
      return "bg-green-200"
    }
  }
  const getStrengthText = (password) => {
    if (password.length === 0) {
      return "Please enter a password"
    } else if (password.length < 8) {
      return "Password should be at least 8 characters long"
    } else if (!/\d/.test(password)) {
      return "Password should contain at least one number"
    } else if (!/[a-z]/.test(password)) {
      return "Password should contain at least one lowercase letter"
    } else if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter"
    } else if (!/[@#$%^&+=]/.test(password)) {
      return "Password should contain at least one special character"
    } else {
      return "Password is strong!"
    }
  }
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset your Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <div className="relative w-full container mx-auto">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="newPassword"
                    required
                    placeholder="Password"
                    className={`${getStrengthClass(
                      password
                    )} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    onChange={(e) => {
                      setUser({...user, newPassword: e.target.value})
                      setPassword(e.target.value)
                    }}
                  />

                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={(e) => togglePasswordVisibility(e)}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {password.length > 1 ? (
                  <p className="text-sm mt-2">{getStrengthText(password)}</p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="relative w-full container mx-auto">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    required
                    placeholder="Password"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    onChange={(e) => {
                      setUser({...user, confirmPassword: e.target.value})
                    }}
                  />

                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={(e) => togglePasswordVisibility(e)}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {/* {password.length > 1 ? (
                  <p className="text-sm mt-2">{getStrengthText(password)}</p>
                ) : (
                  ""
                )} */}
              </div>

              <button
                type="submit"
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResetPassword
