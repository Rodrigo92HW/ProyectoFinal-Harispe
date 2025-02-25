export default function CartItem({ item }) {
    const totalPrice = item.item.price * item.amount;
    const formattedTotalPrice = totalPrice.toLocaleString('de-DE');

    const formattedPrice = item.item.price.toLocaleString('de-DE');

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={item.item.image}
                                className="img-fluid rounded-3" alt={item.item.name} style={{ width: "65px" }} />
                        </div>
                        <div className="ms-3">
                            <h5>{item.item.name}</h5>
                            <p className="small mb-0">${formattedPrice}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                            <h5 className="fw-normal mb-0">{item.amount}</h5>
                        </div>
                        <div style={{ width: "80px" }}>
                            <h5 className="mb-0">${formattedTotalPrice}</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

