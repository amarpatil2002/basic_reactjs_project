
export default function Userdatd()
{
    let students = [
        {name:'amar' , email:'amar@gmail.com' ,age:22 ,address:[{city:"Pandharpur" , Hn:25  , country:"India" },{city:"Pune" , Hn:56 ,  country:"India" }]},
        {name:'ram' , email:'ram@gmail.com' ,age:29 ,address:[{city:"Pandharpur" , Hn:25  , country:"India" },{city:"Pune" , Hn:56 ,  country:"India" }]},
        {name:'sham' , email:'sham@gmail.com' ,age:22 , address:[{city:"Pandharpur" , Hn:25  , country:"India" },{city:"Pune" , Hn:56 ,  country:"India" }]},

    ]

    return(
        <div>
            <h3>Show the user data</h3>
           <table border="2" width={700} cellSpacing={0}>
              <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Address</th>
              </tr>
              </thead>
              <tbody>
              {
                students.map((data , index) =>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.age}</td>
                        <td>
                          <table border={1} cellSpacing={0} width={100}>
                            <thead>
                                <tr>
                                    <th>HiwayNo</th>
                                    <th>City</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                            data.address.map((addr , i) => 
                            <tr key={i}>
                                <td>{addr.Hn}</td>
                                <td>{addr.city}</td>
                                <td>{addr.country}</td>
                            </tr>
                            )
                          }
                                
                                
                            </tbody>
                            </table>  
                        </td>
                    </tr>
                )
              }
              </tbody>
           </table>
        </div>
    )
}