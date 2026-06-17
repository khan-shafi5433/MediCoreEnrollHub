import { useState } from 'react'
import apiClient from '../services/api/axios'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (apiCall) => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiCall()
      return response.data
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, request }
}
