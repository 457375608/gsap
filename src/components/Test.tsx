import copyText from '@/utils/copy'
import Like from '@/assets/icons/like.svg?react'

const index = () => {
  return (
    <div
      className="w-full h-10 bg-gray-100 text-purple-600 flex justify-center items-center cursor-pointer"
      onClick={() => {
        copyText('123').then((result) => console.log(result))
      }}
    >
      <Like></Like>点击测试copyText函数
    </div>
  )
}

export default index
