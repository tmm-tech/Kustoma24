import React from 'react';
import { sales } from '../../DummyData';
import './salestable.css';
const SalesTable = () => {
    // sort sales data by total price in descending order
    const sortedData = sales.sort((a, b) => b.total_price - a.total_price);
    // take the top 10 products
    const top10Products = sortedData.slice(0, 10);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {top10Products.map(product => (
                    <tr key={product.id}>
                        <td>
                            <img src={product.product_image} alt={product.product_name} />
                            {product.product_name}
                        </td>
                        <td>{product.price}</td>
                        <td>{product.discount}%</td>
                        <td>{product.quantity}</td>
                        <td>{product.total_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SalesTable;