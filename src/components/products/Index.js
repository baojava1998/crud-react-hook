import { Link } from "react-router-dom";
function Index() {
    const list = [];
    for (let i = 1; i < 10; i++) {
        list.push(i);
    }
    return (
        <div className="row">
            <div className="col-lg-12">

                <div className="card-box">
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
                            {list.map((number) =>
                            <tr className="table table-bordered mb-0" key={number.toString()}>
                                <th scope="row">{number}</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>
                                    <Link to={`contact/`+ number}><button type="button" className="btn btn-info waves-effect waves-light">Edit</button>{' '}</Link>
                                    <button type="button" className="btn btn-danger waves-effect waves-light">Delete</button>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*<Routes>*/}
                {/*    <Route path="/" element={<Index/>} />*/}
                {/*</Routes>*/}
            </div>
        </div>
    );
}

export default Index;