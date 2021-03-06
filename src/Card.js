import React from 'react'

const Card = ({details}) => {
    return (
        <div className="card-wrapper">
            <div className="img-wrapper"><img src={details.picture?.large} alt=""/></div>
            <div className="name"><h2>{details.name?.first} {details.name?.last} ({details.dob?.age})</h2></div>
            <div className="city"><i className="fa fa-map-marker"></i><p>{details.location?.city}</p></div>
            <div className="email"><i className="fa fa-envelope"></i><p>{details.email}</p></div>
            <div className="phone"><i className="fa fa-phone">  </i><p>  {details.phone}</p></div>
        </div>
    )
}

export default Card
