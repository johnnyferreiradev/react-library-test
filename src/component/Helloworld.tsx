export interface IHelloWorld {
  text: string
}
export const Helloworld = ({ text }: IHelloWorld) => {
  return (
    <div className="a-especific-name font-bold text-3xl border border-red-500">
      This is test text: {text}!
    </div>
  )
}
