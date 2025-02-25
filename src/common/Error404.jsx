import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div class="custom-bg text-dark">
            <div class="d-flex align-items-center justify-content-center min-vh-100 px-2">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-2 fw-medium mt-4">Oops! Un error ha ocurrido!</p>
                    <p class="mt-4 mb-5">La página que estas buscando no existe o ha sido movida</p>
                    <Link to="/" class="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}