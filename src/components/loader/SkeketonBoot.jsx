import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SkeketonBoot = () => {
    return (
    
                    <Card className='mx-3 my-2' style={{ width: '15rem' }}>
                        {/* <Skeleton height={30} width={30} /> */}
                        <Card.Body>
                            <Card.Title>
                                <Skeleton circle={true} height={60} width={60} />
                            </Card.Title>
                            <Card.Text>
                                <Skeleton width={`80%`} />
                                <Skeleton width={`80%`} />
                                <Skeleton width={`80%`} />
                            </Card.Text>
                            {/* <Button> */}
                            <Card.Text>
                                <Skeleton width={`80%`} height={`20%`} />
                            </Card.Text>
                            {/* </Button> */}
                        </Card.Body>
                    </Card>
    )
}

export default SkeketonBoot