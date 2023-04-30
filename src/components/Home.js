import React, {useEffect, useState} from 'react';

import {Container, Row, Col, Table, Button} from "react-bootstrap";

const Home = () => {
    return (
     <div> 
        <h2 align="center">TOURS</h2>  
    <Row>
                    <Col>
                        <Table striped bordered hover className="shadow-lg text-center">
                            
                            <tbody>
                                
                                    
                                        
                                            <tr>
                                                <td>JUL16</td>
                                                <td>DETROIT, MI</td>
                                                <td>DTE ENERGY MUSIC THEATRE</td>
                                                <Button>BUY TICKETS</Button>
                                            </tr>
                                            <tr>
                                                <td>JUL19</td>
                                                <td>TORONTO,ON</td>
                                                <td>
BUDWEISER STAGE</td>
                                                <Button>BUY TICKETS</Button>
                                            </tr>
                                            <tr>
                                                <td>JUL 22</td>
                                                <td>BRISTOW, VA</td>
                                                <td>JIGGY LUBE LIVE</td>
                                                <Button>BUY TICKETS</Button>
                                            </tr>
                                    
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
        </div>
    )
}

export default Home