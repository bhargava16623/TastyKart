const mapped= Array.from({length:10}).map((el,i)=>{
    return  <div className="card shimmer-card" key={i}></div>
})

const Shimmer =()=>{
    /*return <h1>Loading...... </h1>*/
    return (
    <div role="shimmer-id" className="body-div">
       {
        mapped
       }
    </div>
    )
}

export default Shimmer;