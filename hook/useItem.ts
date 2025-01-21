import { useCallback, useEffect, useState } from "react"
import { apiClient } from "@/lib/apiClient"

interface Item {
  id: number
  name: string
  description: string
}

export function useItems() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Lấy danh sách items
  const fetchItems = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiClient.get<Item[]>("/items")
      setItems(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  // Thêm một item mới
  const addItem = async (newItem: { name: string; description: string }) => {
    setLoading(true)
    setError(null)
    try {
      const createdItem = await apiClient.post<Item>("/items", newItem)
      setItems((prev) => [...prev, createdItem])
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // Cập nhật một item
  const updateItem = async (id: number, updatedData: { name?: string; description?: string }) => {
    setLoading(true)
    setError(null)
    try {
      const updatedItem = await apiClient.put<Item>(`/items/${id}`, updatedData)
      setItems((prev) => prev.map((item) => (item.id === id ? updatedItem : item)))
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // Xóa một item
  const deleteItem = async (id: number) => {
    setLoading(true)
    setError(null)
    try {
      await apiClient.delete(`/items/${id}`)
      setItems((prev) => prev.filter((item) => item.id !== id))
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // Tìm kiếm item
  const searchItems = async (query: string) => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiClient.get<Item[]>(`/items/search?query=${encodeURIComponent(query)}`)
      setItems(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return {
    items,
    loading,
    error,
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
    searchItems,
  }
}
