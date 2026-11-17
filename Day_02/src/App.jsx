import Card from "./Card"


export default function App()
{

  let arr = ['Arjun', 'Jay', 'aditya']

  return (

    <div>
      {

        arr.map((e) => (
          Card(e)
        ))

      }
    </div>

  )

}