import React, {useState, useEffect, useRef} from "react";
import { Link , useNavigate } from "react-router-dom";
import ProductService from "../../services/ProductService";
import ReactPaginate from 'react-paginate';
import Swal from "sweetalert2";

function Index() {
    let navigate = useNavigate();
    const [products, setProducts] = useState([[]]);
    const [paginate, setPaginate] = useState([[]]);
    const [currentPage, setCurrentPage] = useState(null);
    const isCallEffect = useRef(false);
    useEffect(() => {
        if(isCallEffect.current) {
            retrieveProducts();
        }
        isCallEffect.current = true;
    }, []);

    const retrieveProducts = (page) => {
        const urlParams = new URLSearchParams(window.location.search);
        let pageUrl = urlParams.get('page') ?? 1;
        page = page ?? pageUrl;
        ProductService.getAll(page)
            .then(response => {
                setProducts(response.data.data);
                setPaginate(response.data.paginate)
                setCurrentPage(page)
            })
            .catch(e => {
                console.log(e);
            });
    };

    function deleteProduct(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                ProductService.remove(id)
                    .then(response => {
                        retrieveProducts()
                        Swal.fire(
                            'Good job!',
                            'You delete Product success!',
                            'success'
                        )
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        });
    }

    const stt = (index) =>{
        return ((paginate.current_page - 1) * paginate.per_page) + index
    }

    const handlePageClick = (event) => {
        let page = event.selected + 1;
        retrieveProducts(page);
        navigate('/products?page=' + page)
    };

    if (!currentPage) return

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card-box">
                    <Link to={`create`}><button type="button" className="btn btn-info waves-effect waves-light" style={{float:"right"}}>Create</button></Link>
                    <h4 className="header-title">Contextual classes</h4>
                    <p className="sub-header">
                        Use contextual classes to color table rows or individual cells.
                    </p>

                    <div className="table-responsive">
                        <table className="table mb-0 table-bordered">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>NAME</th>
                                <th>DETAIL</th>
                                <th>ACTION</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product, index) =>
                            <tr className="table table-bordered mb-0" key={product.id}>
                                <th scope="row">{stt(index)}</th>
                                <td>{product.name}</td>
                                <td>{product.detail}</td>
                                <td>
                                    <Link to={`edit/`+ product.id}><button type="button" className="btn btn-info waves-effect waves-light">Edit</button>{' '}</Link>
                                    <button type="button" className="btn btn-danger waves-effect waves-light" onClick={()=>deleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                        <br/>
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={paginate.last_page ?? 1}
                            previousLabel="< previous"
                            pageClassName="paginate_button page-item"
                            pageLinkClassName="page-link"
                            previousClassName="paginate_button page-item"
                            previousLinkClassName="page-link"
                            nextClassName="paginate_button page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="paginate_button page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            initialPage={currentPage - 1}
                            disableInitialCallback={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;