import copyText from '@/utils/copy'

const index = () => {
  return (
    <div
      className="w-full h-10 bg-gray-100 flex justify-center items-center cursor-pointer"
      onClick={() => {
        copyText('123').then((result) => console.log(result))
      }}
    >
      点击测试copyText函数
    </div>
  )
}

export default index
