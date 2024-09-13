import Image from 'next/image'
import { PromptEditor } from '../ImageEditor/PromptEditor'
import { Button } from '@/components/ui/button'

interface ImageCardProps {
  image: {
    id: string
    url: string
    prompt: string
  }
  onUpdate: () => void
}

export function ImageCard({ image, onUpdate }: ImageCardProps) {
  const handleEdit = async (newPrompt: string) => {
    // Implement the edit functionality here
    // This should call your API to update the image prompt
    console.log('Editing image with new prompt:', newPrompt)
    await onUpdate()
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <Image src={image.url} alt={image.prompt} width={300} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{image.prompt}</p>
        <div className="flex justify-between">
          <PromptEditor initialPrompt={image.prompt} onSave={handleEdit} />
          <Button variant="outline" onClick={() => window.open(image.url, '_blank')}>
            View Full
          </Button>
        </div>
      </div>
    </div>
  )
}