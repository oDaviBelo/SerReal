import Image from 'next/image'
import School from '@/assets/school.jpg'
export const CardSchool = () => {
  return (
    <div className="rounded-2xl w-fit">
      <Image
        src={School}
        alt="escola"
        width={0}
        height={0}
        className="rounded-2xl w-fit"
      ></Image>
    </div>
  )
}
