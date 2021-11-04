import "./AdCard.css"

const AdCard = () => {

    return <div className="custom-container">

    <div className="card">
    <img src="https://images6.alphacoders.com/393/393787.jpg" class="card-img-top" alt="..."></img>
    <div className="card-body custom-card-body">
      <h5 className="card-title custom-card-title">Название карточки</h5>
      <h6 className="card-subtitle mb-2 text-muted">Подзаголовок карты</h6>
      <p className="card-text custom-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button className="btn btn-primary btn-sm">Подробности</button>
      <span className="card-text date-text"><small class="text-muted">3 мин. назад</small></span>     
    </div>
  </div>
  
  </div>
}

export default AdCard;