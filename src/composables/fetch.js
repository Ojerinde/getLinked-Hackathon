import { ref } from 'vue'

export default function useFetch() {
  let isLoading = ref(false)
  let hasError = ref(false)
  let errorMessage = ref(null)

  const fetchRequest = async (requestConfig = {}, getRequestData = () => {}) => {
    isLoading.value = true
    hasError.value = false
    errorMessage.value = null

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers
          ? requestConfig.headers
          : {
              'Content-Type': 'application/json'
            }
      })
      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`${requestConfig.errorMessage}`)
      }

      // If the response is ok, get the data
      const responseBody = await response.json()

      // Send the data to the function that will use it
      getRequestData(responseBody)
    } catch (err) {
      // If an error occured, set the error state
      hasError.value = true
      errorMessage.value = err.message

      setTimeout(() => {
        hasError.value = false
        errorMessage.value = null
      }, 5000)
    } finally {
      isLoading.value = false
    }
    // After the request has been made, set the loading state to false
  }
  return { isLoading, hasError, errorMessage, fetchRequest }
}
