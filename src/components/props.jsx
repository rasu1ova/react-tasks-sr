function Props(props) {
    const {name, age, adres,bname }=props;
  
    return (
        <>
          <div className="card">
             <img src={adres} alt="name" />
             <h1>Mening ismim {name} yoshim {age} da</h1>
             <button>{bname}</button>
          </div>
      
        </>
        
    
    );
  }
  
export default Props;