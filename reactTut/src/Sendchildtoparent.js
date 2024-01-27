export default function Sendchildtoparent(props)
{
    let childData = {num:123456 ,msg:"This is a child"}
  return (
    <>
      <h2>Send the data child to parent</h2>
      <h3>{props.data}</h3>
      <button onClick={() => {props.alerFun(childData)}}>Clicke me</button>
    </>
  )
}