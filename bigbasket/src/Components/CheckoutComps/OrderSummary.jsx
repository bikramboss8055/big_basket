import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import "../../Pages/Checkout/Styles/OrderSummary.css" 

const OrderSummary = () => {
  return (
    
      <div className='allorder'>
      <h1 className='heading'>Order Summary</h1>
                <TableContainer>
                   <Table variant='simple'>
                     
                     <Thead>
                       <Tr>
                         <Th>Price Details( Items)</Th>
                 
                         <Th isNumeric></Th>
                       </Tr>
                     </Thead>
                     <Tbody>
                       <Tr>
                         <Td>Basket Value</Td>
                         
                         <Td isNumeric>₹totalmrp</Td>
                       </Tr>
                      <Tr>
                         <Td>Discount On Value</Td>
                         
                         <Td style={{color:"green", fontWeight:"500"}} isNumeric>-₹discount</Td>
                       </Tr>
                      
                       <Tr>
                         <Td>Delivery Charges<p style={{color:"orangered", fontWeight:"600"}}>Know More</p></Td>
                         
                         <Td isNumeric >
                           <p style={{textDecoration:"line-through"}}>₹90 </p>
                            <p style={{color:"green", fontWeight:"500"}}>FREE</p>
                            </Td>
                       </Tr>
                     </Tbody>
                     <Tfoot>
                       <Tr>
                         <Th>total Amount Payable</Th>
                        
                         <Th isNumeric>₹total</Th>
                       </Tr>
                     </Tfoot>
                   </Table>
                 </TableContainer>
                </div>
   
  )
}

export default OrderSummary