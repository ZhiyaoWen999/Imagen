import { ImageCard } from './ImageCard'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { useImageGeneration } from '@/hooks/useImageGeneration'

interface Image {
  id: string
  url: string
  prompt: string
}

export function ImageGrid() {
  const [images, setImages] = useState<Image[]>([])
  const { generateImage, isLoading } = useImageGeneration()

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching images:', error)
    } else {
      setImages(data as Image[])
    }
  }

  const handleNewImage = async () => {
    const newImage = await generateImage('A beautiful landscape')
    if (newImage) {
      setImages([newImage, ...images])
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={handleNewImage} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate New Image'}
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onUpdate={fetchImages} />
        ))}
      </div>
    </div>
  )
}