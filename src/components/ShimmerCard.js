
const ShimmerCard=()=>{
    let count=0;
    let cards=[]
    while(count<10){
        cards.push(<div className="shimmer-Card" key={count}></div>)
        count++;
    }
     return(
        <div>
        <div className="shimmer-filter-btn">             </div>
        <div className="shimmer-Container">
          {cards}
        </div>
        </div>
     )
}

export default ShimmerCard;