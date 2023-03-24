import React from 'react';
import './salestable.css';
const SalesTable = ({sales}) => {
    // sort sales data by total price in descending order
    const sortedData = sales.sort((a, b) => b.total_price - a.total_price);
    // take the top 10 products
    const top5Products = sortedData.slice(0, 5);

    return (
        <table className='sales_table'>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody className='sales_body'>
                {top5Products.map(product => (
                    <tr key={product.id}>
                        <td>
                            <img className="product" src={product.product_image} alt={product.product_name} />
                            {product.product_name}
                        </td>
                        <td>{product.price}</td>
                        <td>{product.discount}</td>
                        <td>{product.quantity}</td>
                        <td>{product.total_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SalesTable;