/// FILE: src/components/Profile.js
import { useEffect, useState } from 'react'
import {supabase} from '../lib/supabase'

export default   function Profile() {
  const [user, setUser] = useState(null)
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      fetchImage(data.user.id)
    })
  }, [])

  const handleUpload = async () => {
    const file = image
    const filePath = `profile-pics/${user.id}.png`
    const { error } = await supabase.storage.from('avatars').upload(filePath, file, { upsert: true })
    if (!error) fetchImage(user.id)
  }

  const fetchImage = async (id) => {
    const { data } = supabase.storage.from('avatars').getPublicUrl(`profile-pics/${id}.png`)
    setImageUrl(data.publicUrl)
  }

  return (
    <div>
      <h2>Welcome {user?.email}</h2>
      {imageUrl && <img src={imageUrl} alt="Profile" width={100} />}
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

