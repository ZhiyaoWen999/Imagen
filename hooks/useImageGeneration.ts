import { useState } from 'react'
import { generateImage } from '@/lib/replicate'
import { supabase } from '@/lib/supabase'

export function useImageGeneration() {
  const [isLoading, setIsLoading] = useState(false)

  const generate = async (prompt: string) => {
    setIsLoading(true)
    try {
      const imageUrl = await generateImage(prompt)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('User not authenticated')

      const { data, error } = await supabase
        .from('images')
        .insert({ prompt, url: imageUrl, userId: user.id })
        .single()

      if (error) throw error

      return data
    } catch (error) {
      console.error('Error generating image:', error)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { generateImage: generate, isLoading }
}