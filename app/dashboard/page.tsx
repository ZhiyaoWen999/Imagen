import { ImageGrid } from '@/components/Dashboard/ImageGrid'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Generated Images</h1>
      <ImageGrid />
    </div>
  )
}