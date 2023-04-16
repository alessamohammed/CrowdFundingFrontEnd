import { request } from "../axios_helper";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Campaigns() {

    const [campaigns, setCampaigns] = useState([]);
    
    useEffect(() => {
        request("GET", "/campaign/all").then((response) => {
            setCampaigns(response.data);
        });
    }
    , []);

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
            {campaigns.map((campaign) => (
                <div className="col">
                <Card className="mb-3" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{campaign.name}</Card.Title>
                        <Card.Text>
                            {campaign.description}
                        </Card.Text>
                        <Card.Text>
                            Amount: {campaign.amount}
                        </Card.Text>
                        </Card.Body>
                        <Button variant="primary">Donate</Button>


                </Card>
                </div>
            ))}

                </div>                
                    
        </div>
        </div>
    );

}